import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Interface cho lịch sử tìm kiếm
export interface SearchHistoryItem {
    id: string;
    query: string;
    timestamp: number;
}

export interface SearchHistoryState {
    history: SearchHistoryItem[];
    addSearch: (query: string) => void;
    removeSearch: (id: string) => void;
    clearHistory: () => void;
    getRecentSearches: (limit?: number) => SearchHistoryItem[];
}

export const useSearchHistoryStore = create<SearchHistoryState>()(
    persist(
        (set, get) => ({
            history: [],

            // Thêm từ khóa tìm kiếm mới
            addSearch: (query: string) => {
                const trimmedQuery = query.trim();
                if (!trimmedQuery) return;

                set((state) => {
                    // Kiểm tra xem từ khóa đã tồn tại chưa
                    const existingIndex = state.history.findIndex(
                        (item) => item.query.toLowerCase() === trimmedQuery.toLowerCase()
                    );

                    let newHistory = [...state.history];

                    if (existingIndex !== -1) {
                        // Nếu đã tồn tại, xóa item cũ
                        newHistory.splice(existingIndex, 1);
                    }

                    // Thêm item mới vào đầu danh sách
                    newHistory.unshift({
                        id: Date.now().toString(),
                        query: trimmedQuery,
                        timestamp: Date.now(),
                    });

                    // Giới hạn số lượng lịch sử (tối đa 50 item)
                    if (newHistory.length > 10) {
                        newHistory = newHistory.slice(0, 10);
                    }

                    return { history: newHistory };
                });
            },

            // Xóa một item khỏi lịch sử
            removeSearch: (id: string) => {
                set((state) => ({
                    history: state.history.filter((item) => item.id !== id),
                }));
            },

            // Xóa toàn bộ lịch sử
            clearHistory: () => {
                set({ history: [] });
            },

            // Lấy danh sách tìm kiếm gần đây
            getRecentSearches: (limit = 10) => {
                return get().history.slice(0, limit);
            },
        }),
        {
            name: 'search-history-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
