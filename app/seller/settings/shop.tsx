import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ShopSettings() {
    const [shopName, setShopName] = useState('My Shop');
    const [description, setDescription] = useState('Chuyên cung cấp sản phẩm chất lượng');
    const [address, setAddress] = useState('123 Đường ABC, Quận 1, TP.HCM');
    const [phoneNumber, setPhoneNumber] = useState('0123456789');
    const [email, setEmail] = useState('shop@example.com');
    const [logo, setLogo] = useState('https://via.placeholder.com/150');
    const [banner, setBanner] = useState('https://via.placeholder.com/400x200');

    const pickImage = async (type: 'logo' | 'banner') => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Cần quyền truy cập', 'Vui lòng cấp quyền truy cập thư viện ảnh.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: type === 'logo' ? [1, 1] : [3, 1],
            quality: 0.8,
        });

        if (!result.canceled && result.assets[0]) {
            if (type === 'logo') {
                setLogo(result.assets[0].uri);
            } else {
                setBanner(result.assets[0].uri);
            }
        }
    };

    const handleSave = () => {
        Alert.alert('Thành công', 'Đã lưu thông tin shop');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-gray-50"
        >
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="p-4">
                    {/* Shop Images */}
                    <View className="bg-white rounded-lg overflow-hidden mb-4 shadow-sm">
                        {/* Banner with Avatar Inside */}
                        <View className="relative">
                            <Image
                                source={{ uri: banner }}
                                style={{ width: '100%', height: 220 }}
                                resizeMode="cover"
                            />
                            <TouchableOpacity
                                onPress={() => pickImage('banner')}
                                className="absolute top-2 right-2 bg-black/50 p-2 rounded-full"
                            >
                                <Ionicons name="camera" size={20} color="white" />
                            </TouchableOpacity>
                            <Text className="absolute top-2 left-2 bg-black/40 px-3 py-2 rounded text-md text-white">
                                Banner Shop
                            </Text>

                            {/* Avatar positioned at bottom center of banner */}
                            <View className="absolute bottom-4 left-0 right-0 items-center">
                                <View className="relative">
                                    <Image
                                        source={{ uri: logo }}
                                        style={{ width: 100, height: 100 }}
                                        className="rounded-full bg-white border-2 border-gray-300"
                                    />
                                    <TouchableOpacity
                                        onPress={() => pickImage('logo')}
                                        className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full border-2 border-white"
                                        style={{ elevation: 2 }}
                                    >
                                        <Ionicons name="camera" size={16} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Shop Name */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Tên Shop
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                            value={shopName}
                            onChangeText={setShopName}
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>

                    {/* Description */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Mô tả Shop
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base min-h-[100px]"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>

                    {/* Contact Info */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-lg font-bold text-gray-800 mb-4">
                            Thông tin liên hệ
                        </Text>

                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Số điện thoại
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />

                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Email
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />

                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Địa chỉ
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                            value={address}
                            onChangeText={setAddress}
                            multiline
                            numberOfLines={2}
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>

                    {/* Save Button */}
                    <TouchableOpacity
                        onPress={handleSave}
                        className="bg-secondary py-4 rounded-lg mb-6"
                    >
                        <Text className="text-center text-white font-semibold text-base">
                            Lưu thay đổi
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
