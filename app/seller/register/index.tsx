import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SellerRegisterScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const [shopName, setShopName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [logo, setLogo] = useState("https://via.placeholder.com/150");
    const [banner, setBanner] = useState("https://via.placeholder.com/400x200");

    const pickImage = async (type: 'logo' | 'banner') => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Cần quyền truy cập', 'Vui lòng cấp quyền truy cập thư viện ảnh để chọn ảnh.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
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

    const handleSubmit = () => {
        console.log({
            shopName,
            description,
            address,
            phoneNumber,
            email,
            businessType,
            logo,
            banner,
        });

        // Navigate to seller dashboard
        router.push('/seller');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-gray-50"
        >
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Hero Section */}
                <View className="bg-secondary px-6 py-6">
                    <View className="items-center">
                        <View className="bg-white/20 p-4 rounded-full mb-4">
                            <Ionicons name="storefront" size={48} color="white" />
                        </View>
                        <Text className="text-white text-2xl font-bold text-center mb-2">
                            Bắt đầu kinh doanh
                        </Text>
                        <Text className="text-white/90 text-center text-base">
                            Mở shop của bạn và tiếp cận hàng triệu khách hàng
                        </Text>
                    </View>
                </View>

                {/* Form Section */}
                <View className="px-4 py-6">
                    {/* Shop Banner & Logo Combined */}
                    <View className="bg-white rounded-lg overflow-hidden mb-4 shadow-md border border-gray-300">
                        {/* Banner */}
                        <View className="relative">
                            <Image
                                source={{ uri: banner }}
                                style={{ width: '100%', height: 150 }}
                                resizeMode="cover"
                            />
                            <TouchableOpacity
                                onPress={() => pickImage('banner')}
                                className="absolute top-2 right-2 bg-black/50 p-2 rounded-full"
                                style={{ elevation: 2 }}
                            >
                                <Ionicons name="camera" size={20} color="white" />
                            </TouchableOpacity>
                            <Text className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
                                Banner Shop
                            </Text>
                        </View>

                        {/* Logo overlapping banner */}
                        <View className="items-center" style={{ marginTop: -50 }}>
                            <View className="relative rounded-full border-4 border-gray-300">
                                <Image
                                    source={{ uri: logo }}
                                    style={{ width: 100, height: 100 }}
                                    className="rounded-full border-2 border-gray-300 bg-white"
                                />
                                <TouchableOpacity
                                    onPress={() => pickImage('logo')}
                                    className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full border-2 border-white"
                                    style={{ elevation: 2 }}
                                >
                                    <Ionicons name="camera" size={16} color="white" />
                                </TouchableOpacity>
                            </View>
                            <Text className="text-sm text-gray-500 mt-2 mb-3">
                                Nhấn để thay đổi ảnh
                            </Text>
                        </View>
                    </View>

                    {/* Shop Name */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Tên Shop <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2">
                            <Ionicons name="storefront-outline" size={20} color="#666" />
                            <TextInput
                                className="flex-1 ml-2 text-base"
                                placeholder="Nhập tên shop của bạn"
                                value={shopName}
                                onChangeText={setShopName}
                            />
                        </View>
                    </View>

                    {/* Business Type */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Loại hình kinh doanh <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2">
                            <Ionicons name="briefcase-outline" size={20} color="#666" />
                            <TextInput
                                className="flex-1 ml-2 text-base"
                                placeholder="VD: Thời trang, Điện tử, Thực phẩm..."
                                value={businessType}
                                onChangeText={setBusinessType}
                            />
                        </View>
                    </View>

                    {/* Description */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Mô tả Shop <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="border border-gray-300 rounded-lg p-3">
                            <TextInput
                                className="text-base min-h-[100px]"
                                placeholder="Giới thiệu về shop của bạn, sản phẩm và dịch vụ..."
                                value={description}
                                onChangeText={setDescription}
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                            />
                        </View>
                        <Text className="text-xs text-gray-500 mt-1">
                            {description.length}/500 ký tự
                        </Text>
                    </View>

                    {/* Contact Information */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-lg font-bold text-gray-800 mb-4">
                            Thông tin liên hệ
                        </Text>

                        {/* Phone Number */}
                        <View className="mb-4">
                            <Text className="text-base font-semibold text-gray-800 mb-2">
                                Số điện thoại <Text className="text-red-500">*</Text>
                            </Text>
                            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2">
                                <Ionicons name="call-outline" size={20} color="#666" />
                                <TextInput
                                    className="flex-1 ml-2 text-base"
                                    placeholder="Nhập số điện thoại"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>

                        {/* Email */}
                        <View>
                            <Text className="text-base font-semibold text-gray-800 mb-2">
                                Email <Text className="text-red-500">*</Text>
                            </Text>
                            <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2">
                                <Ionicons name="mail-outline" size={20} color="#666" />
                                <TextInput
                                    className="flex-1 ml-2 text-base"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Address */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Địa chỉ Shop <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="flex-row items-start border border-gray-300 rounded-lg px-3 py-2">
                            <Ionicons name="location-outline" size={20} color="#666" style={{ marginTop: 2 }} />
                            <TextInput
                                className="flex-1 ml-2 text-base"
                                placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                                value={address}
                                onChangeText={setAddress}
                                multiline
                                numberOfLines={2}
                            />
                        </View>
                    </View>

                    {/* Benefits Section */}
                    <View className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-4">
                        <Text className="text-base font-bold text-gray-800 mb-3">
                            🎉 Ưu đãi dành cho người bán mới
                        </Text>
                        <View className="space-y-2">
                            <View className="flex-row items-center mb-2">
                                <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                                <Text className="ml-2 text-sm text-gray-700">
                                    Miễn phí đăng ký và quản lý shop
                                </Text>
                            </View>
                            <View className="flex-row items-center mb-2">
                                <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                                <Text className="ml-2 text-sm text-gray-700">
                                    Hỗ trợ vận chuyển toàn quốc
                                </Text>
                            </View>
                            <View className="flex-row items-center mb-2">
                                <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                                <Text className="ml-2 text-sm text-gray-700">
                                    Công cụ quản lý bán hàng chuyên nghiệp
                                </Text>
                            </View>
                            <View className="flex-row items-center">
                                <Ionicons name="checkmark-circle" size={20} color="#EE4D2D" />
                                <Text className="ml-2 text-sm text-gray-700">
                                    Tiếp cận hàng triệu khách hàng tiềm năng
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Terms and Conditions */}
                    <View className="flex-row items-start mb-6">
                        <Ionicons name="information-circle-outline" size={20} color="#666" style={{ marginTop: 2 }} />
                        <Text className="flex-1 ml-2 text-sm text-gray-600 leading-5">
                            Bằng việc đăng ký, bạn đồng ý với{" "}
                            <Text className="text-secondary font-semibold">
                                Điều khoản dịch vụ
                            </Text>{" "}
                            và{" "}
                            <Text className="text-secondary font-semibold">
                                Chính sách bảo mật
                            </Text>{" "}
                            của chúng tôi.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            {/* Submit Button */}
            <View
                className="bg-white px-4 py-3 border-t border-gray-200"
                style={{ paddingBottom: insets.bottom + 12 }}
            >
                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-secondary py-4 rounded-lg"
                    style={{ elevation: 2 }}
                >
                    <Text className="text-white text-center font-bold text-base">
                        Đăng ký ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
