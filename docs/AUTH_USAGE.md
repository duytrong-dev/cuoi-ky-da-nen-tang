# Authentication System - Usage Guide

## 📦 Files Created

- `store/authStore.ts` - Zustand store for user state
- `apiRequests/auth.ts` - API request functions
- `utils/queryClient.ts` - TanStack Query configuration
- `hooks/useAuth.ts` - Custom authentication hooks
- `components/AuthExample.tsx` - Example component

## 🚀 Setup

### 1. Wrap your app with QueryClientProvider

In your root layout file (e.g., `app/_layout.tsx`):

```tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/utils/queryClient';

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            {/* Your app content */}
        </QueryClientProvider>
    );
}
```

## 💡 Usage Examples

### Login

```tsx
import { useLogin, useAuth } from '@/hooks/useAuth';

function LoginScreen() {
    const loginMutation = useLogin();
    const { isAuthenticated, user } = useAuth();
    
    const handleLogin = async () => {
        try {
            await loginMutation.mutateAsync({
                email: 'user@example.com',
                password: 'password123',
            });
            // Login successful, user is now in Zustand store
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    
    return (
        <View>
            <Button 
                title="Login" 
                onPress={handleLogin}
                disabled={loginMutation.isPending}
            />
            {loginMutation.isError && (
                <Text>Error: {loginMutation.error.message}</Text>
            )}
        </View>
    );
}
```

### Register

```tsx
import { useRegister } from '@/hooks/useAuth';

function RegisterScreen() {
    const registerMutation = useRegister();
    
    const handleRegister = async () => {
        try {
            await registerMutation.mutateAsync({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                password_confirmation: 'password123',
                phone: '0123456789',
                role: 'buyer',
            });
            // Registration successful
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    
    return (
        <Button 
            title="Register" 
            onPress={handleRegister}
            disabled={registerMutation.isPending}
        />
    );
}
```

### Logout

```tsx
import { useLogout } from '@/hooks/useAuth';

function ProfileScreen() {
    const logoutMutation = useLogout();
    
    const handleLogout = async () => {
        try {
            await logoutMutation.mutateAsync();
            // User logged out, tokens cleared
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    
    return (
        <Button 
            title="Logout" 
            onPress={handleLogout}
            disabled={logoutMutation.isPending}
        />
    );
}
```

### Access User Data

```tsx
import { useAuth } from '@/hooks/useAuth';

function ProfileScreen() {
    const { user, isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
        return <Text>Please login</Text>;
    }
    
    return (
        <View>
            <Text>Name: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Role: {user?.role}</Text>
        </View>
    );
}
```

### Fetch Current User

```tsx
import { useCurrentUser } from '@/hooks/useAuth';

function ProfileScreen() {
    const { data: user, isLoading, error } = useCurrentUser();
    
    if (isLoading) return <ActivityIndicator />;
    if (error) return <Text>Error loading user</Text>;
    
    return (
        <View>
            <Text>Name: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
        </View>
    );
}
```

### Protected Route

```tsx
import { useAuth } from '@/hooks/useAuth';
import { Redirect } from 'expo-router';

function ProtectedScreen() {
    const { isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
        return <Redirect href="/login" />;
    }
    
    return (
        <View>
            {/* Protected content */}
        </View>
    );
}
```

## 🔑 Key Features

### Zustand Store
- ✅ Persistent state with AsyncStorage
- ✅ Automatic rehydration on app restart
- ✅ Simple API: `setUser`, `clearUser`, `updateUser`

### TanStack Query
- ✅ Automatic caching and refetching
- ✅ Loading and error states
- ✅ Optimistic updates
- ✅ Retry logic for failed requests

### Integration
- ✅ Automatic token management
- ✅ Sync between TanStack Query and Zustand
- ✅ Type-safe with Zod validation
- ✅ Error handling

## 📝 API Response Format

All API responses follow this format:

```typescript
{
    success: boolean,
    message: string,
    data: {
        // Response data
    }
}
```

## 🔒 Token Management

Tokens are automatically managed:
- **Login/Register**: Tokens saved to AsyncStorage
- **Logout**: Tokens cleared from AsyncStorage
- **API Requests**: Access token automatically added to headers
- **Token Refresh**: Handled by http interceptor in `utils/http.ts`

## ⚠️ Important Notes

1. **QueryClientProvider**: Must wrap your app root
2. **Persistence**: User state persists across app restarts
3. **Type Safety**: All requests validated with Zod schemas
4. **Error Handling**: Errors automatically logged and propagated
