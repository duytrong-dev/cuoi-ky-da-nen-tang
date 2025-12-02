import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

interface ShopInfoFormProps {
    shopName: string;
    businessType: string;
    description: string;
    onShopNameChange: (text: string) => void;
    onBusinessTypeChange: (text: string) => void;
    onDescriptionChange: (text: string) => void;
}

export function ShopInfoForm({
    shopName,
    businessType,
    description,
    onShopNameChange,
    onBusinessTypeChange,
    onDescriptionChange,
}: ShopInfoFormProps) {
    return (
        <>
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
                        onChangeText={onShopNameChange}
                        style={{ fontSize: 16, lineHeight: 20 }}
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
                        onChangeText={onBusinessTypeChange}
                        style={{ fontSize: 16, lineHeight: 20 }}
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
                        onChangeText={onDescriptionChange}
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        style={{ fontSize: 16, lineHeight: 20 }}
                    />
                </View>
                <Text className="text-xs text-gray-500 mt-1">
                    {description.length}/500 ký tự
                </Text>
            </View>
        </>
    );
}
