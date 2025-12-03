import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Interface cho sản phẩm trong giỏ hàng (local)
export interface CartItem {
    id: string; // ID local (variant_id + timestamp)
    variant_id: number;
    product_id: number;
    product_name: string;
    product_image?: string;
    variant_attributes?: Record<string, string>; // { "color": "red", "size": "M" }
    price: number;
    quantity: number;
    stock: number; // Số lượng tồn kho
    shop_id: number;
    shop_name?: string;
    selected: boolean; // Để chọn sản phẩm khi thanh toán
}

export interface CartState {
    items: CartItem[];

    // Thêm sản phẩm vào giỏ hàng
    addItem: (item: Omit<CartItem, 'id' | 'selected'>) => void;

    // Cập nhật số lượng sản phẩm
    updateQuantity: (id: string, quantity: number) => void;

    // Xóa sản phẩm khỏi giỏ hàng
    removeItem: (id: string) => void;

    // Xóa nhiều sản phẩm
    removeItems: (ids: string[]) => void;

    // Chọn/bỏ chọn sản phẩm
    toggleSelect: (id: string) => void;

    // Chọn/bỏ chọn tất cả
    toggleSelectAll: () => void;

    // Xóa toàn bộ giỏ hàng
    clearCart: () => void;

    // Xóa các sản phẩm đã chọn
    clearSelected: () => void;

    // Lấy tổng số sản phẩm
    getTotalItems: () => number;

    // Lấy tổng tiền các sản phẩm đã chọn
    getTotalPrice: () => number;

    // Lấy các sản phẩm đã chọn
    getSelectedItems: () => CartItem[];

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    hasItem: (variant_id: number) => boolean;

    // Lấy sản phẩm theo variant_id
    getItemByVariantId: (variant_id: number) => CartItem | undefined;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => {
                set((state) => {
                    // Kiểm tra xem sản phẩm đã tồn tại chưa
                    const existingItemIndex = state.items.findIndex(
                        (i) => i.variant_id === item.variant_id
                    );

                    if (existingItemIndex !== -1) {
                        // Nếu đã tồn tại, cập nhật số lượng
                        const newItems = [...state.items];
                        const existingItem = newItems[existingItemIndex];
                        const newQuantity = existingItem.quantity + item.quantity;

                        // Kiểm tra không vượt quá tồn kho
                        newItems[existingItemIndex] = {
                            ...existingItem,
                            quantity: Math.min(newQuantity, item.stock),
                        };

                        return { items: newItems };
                    } else {
                        // Nếu chưa tồn tại, thêm mới
                        const newItem: CartItem = {
                            ...item,
                            id: `${item.variant_id}-${Date.now()}`,
                            selected: false,
                        };
                        return { items: [newItem, ...state.items] };
                    }
                });
            },

            updateQuantity: (id, quantity) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: Math.min(Math.max(1, quantity), item.stock) }
                            : item
                    ),
                }));
            },

            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                }));
            },

            removeItems: (ids) => {
                set((state) => ({
                    items: state.items.filter((item) => !ids.includes(item.id)),
                }));
            },

            toggleSelect: (id) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, selected: !item.selected } : item
                    ),
                }));
            },

            toggleSelectAll: () => {
                set((state) => {
                    const allSelected = state.items.every((item) => item.selected);
                    return {
                        items: state.items.map((item) => ({
                            ...item,
                            selected: !allSelected,
                        })),
                    };
                });
            },

            clearCart: () => {
                set({ items: [] });
            },

            clearSelected: () => {
                set((state) => ({
                    items: state.items.filter((item) => !item.selected),
                }));
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                return get().items
                    .filter((item) => item.selected)
                    .reduce((total, item) => total + item.price * item.quantity, 0);
            },

            getSelectedItems: () => {
                return get().items.filter((item) => item.selected);
            },

            hasItem: (variant_id) => {
                return get().items.some((item) => item.variant_id === variant_id);
            },

            getItemByVariantId: (variant_id) => {
                return get().items.find((item) => item.variant_id === variant_id);
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
