import { useAuth, useCurrentUser, useLogin, useLogout } from '@/queries/useAuth';
import type { LoginBodyType } from '@/schemaValidations/auth.schema';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

/**
 * Example Authentication Component
 * Demonstrating how to use TanStack Query + Zustand for authentication
 */

export default function AuthExample() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Get auth state from Zustand store
    const { user, isAuthenticated } = useAuth();

    // TanStack Query hooks
    const loginMutation = useLogin();
    const logoutMutation = useLogout();
    const { isLoading: isLoadingUser } = useCurrentUser(isAuthenticated);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }

        const credentials: LoginBodyType = {
            email,
            password,
        };

        try {
            await loginMutation.mutateAsync(credentials);
            Alert.alert('Success', 'Login successful!');
            // Clear form
            setEmail('');
            setPassword('');
        } catch (error: any) {
            Alert.alert('Login Failed', error?.message || 'An error occurred');
        }
    };

    const handleLogout = async () => {
        try {
            await logoutMutation.mutateAsync();
            Alert.alert('Success', 'Logged out successfully!');
        } catch (error: any) {
            Alert.alert('Logout Failed', error?.message || 'An error occurred');
        }
    };

    // Show loading state
    if (isLoadingUser) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Loading user data...</Text>
            </View>
        );
    }

    // Show user info if authenticated
    if (isAuthenticated && user) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back!</Text>

                <View style={styles.userCard}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{user.name}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{user.email}</Text>

                    <Text style={styles.label}>Phone:</Text>
                    <Text style={styles.value}>{user.phone}</Text>

                    <Text style={styles.label}>Role:</Text>
                    <Text style={styles.value}>{user.role}</Text>
                </View>

                <TouchableOpacity
                    style={[styles.button, styles.logoutButton]}
                    onPress={handleLogout}
                    disabled={logoutMutation.isPending}
                >
                    {logoutMutation.isPending ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Logout</Text>
                    )}
                </TouchableOpacity>
            </View>
        );
    }

    // Show login form
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loginMutation.isPending}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!loginMutation.isPending}
            />

            {loginMutation.isError && (
                <Text style={styles.errorText}>
                    {loginMutation.error?.message || 'Login failed'}
                </Text>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loginMutation.isPending}
            >
                {loginMutation.isPending ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Login</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    errorText: {
        color: '#FF3B30',
        marginBottom: 10,
        textAlign: 'center',
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center',
        color: '#666',
    },
    userCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
});
