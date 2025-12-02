import { UserType } from '@/schemaValidations/users.schema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
    user: UserType | null;
    isAuthenticated: boolean;
    setUser: (user: UserType) => void;
    clearUser: () => void;
    updateUser: (userData: Partial<UserType>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            setUser: (user) =>
                set({
                    user,
                    isAuthenticated: true,
                }),

            clearUser: () =>
                set({
                    user: null,
                    isAuthenticated: false,
                }),

            updateUser: (userData) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...userData } : null,
                })),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
