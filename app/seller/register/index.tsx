import { BenefitsSection } from "@/components/seller/benefits-section";
import { ContactInfoForm } from "@/components/seller/contact-info-form";
import { RegisterHero } from "@/components/seller/register-hero";
import { RegisterTerms } from "@/components/seller/register-terms";
import { ShopImagesSection } from "@/components/seller/shop-images-section";
import { ShopInfoForm } from "@/components/seller/shop-info-form";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
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
                        businessType={businessType}
                        description={description}
                        onShopNameChange={setShopName}
                        onBusinessTypeChange={setBusinessType}
                        onDescriptionChange={setDescription}
                    />

                    {/* Contact Info */}
                    <ContactInfoForm
                        phoneNumber={phoneNumber}
                        email={email}
                        address={address}
                        onPhoneNumberChange={setPhoneNumber}
                        onEmailChange={setEmail}
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
