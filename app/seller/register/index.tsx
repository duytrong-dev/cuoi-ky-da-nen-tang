import { BenefitsSection } from "@/components/seller/benefits-section";
import { ContactInfoForm } from "@/components/seller/contact-info-form";
import { RegisterHero } from "@/components/seller/register-hero";
import { RegisterTerms } from "@/components/seller/register-terms";
import { ShopImagesSection } from "@/components/seller/shop-images-section";
import { ShopInfoForm } from "@/components/seller/shop-info-form";
import { useCreateShop } from "@/queries/useShops";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SellerRegisterScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const [shopName, setShopName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [businessTypeId, setBusinessTypeId] = useState<number>(0);
    const [logo, setLogo] = useState<string | null>(null);
    const [banner, setBanner] = useState<string | null>(null);

    // Hook tạo shop
    const { mutate: createShop, isPending } = useCreateShop();

    const pickImage = async (type: 'logo' | 'banner') => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Cần quyền truy cập', 'Vui lòng cấp quyền truy cập thư viện ảnh để chọn ảnh.');
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

    const handleSubmit = () => {
        // Validation
        if (!shopName.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập tên cửa hàng');
            return;
        }

        if (shopName.trim().length < 2) {
            Alert.alert('Lỗi', 'Tên cửa hàng phải có ít nhất 2 ký tự');
            return;
        }

        // Tạo shop
        createShop(
            {
                name: shopName.trim(),
                description: description.trim() || null,
                logo: logo,
                banner: banner,
                address: address.trim() || null,
                business_type_id: businessTypeId,
            },
            {
                onSuccess: (data) => {
                    Alert.alert(
                        'Thành công',
                        'Cửa hàng của bạn đã được tạo thành công!',
                        [
                            {
                                text: 'OK',
                                onPress: () => router.push('/seller'),
                            },
                        ]
                    );
                },
                onError: (error: any) => {
                    Alert.alert(
                        'Lỗi',
                        error?.message || 'Đã có lỗi xảy ra khi tạo cửa hàng. Vui lòng thử lại.'
                    );
                },
            }
        );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-gray-50"
        >
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} bounces={false} overScrollMode="never">
                {/* Hero Section */}
                <RegisterHero />

                {/* Form Section */}
                <View className="px-4 py-6">
                    {/* Shop Banner & Logo */}
                    <ShopImagesSection
                        banner={banner}
                        logo={logo}
                        onPickImage={pickImage}
                    />

                    {/* Shop Info */}
                    <ShopInfoForm
                        shopName={shopName}
                        businessTypeId={businessTypeId}
                        description={description}
                        onShopNameChange={setShopName}
                        onBusinessTypeIdChange={setBusinessTypeId}
                        onDescriptionChange={setDescription}
                    />

                    {/* Contact Info */}
                    <ContactInfoForm
                        address={address}
                        onAddressChange={setAddress}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection />

                    {/* Terms and Conditions */}
                    <RegisterTerms />
                </View>
            </ScrollView>

            {/* Submit Button */}
            <View
                className="bg-white px-4 py-3 border-t border-gray-200"
                style={{ paddingBottom: insets.bottom + 12 }}
            >
                <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={isPending}
                    className={`py-4 rounded-lg ${isPending ? 'bg-gray-400' : 'bg-secondary'}`}
                    style={{ elevation: 2 }}
                >
                    {isPending ? (
                        <View className="flex-row items-center justify-center gap-2">
                            <ActivityIndicator color="white" />
                            <Text className="text-white text-center font-bold text-base">
                                Đang tạo cửa hàng...
                            </Text>
                        </View>
                    ) : (
                        <Text className="text-white text-center font-bold text-base">
                            Đăng ký ngay
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
