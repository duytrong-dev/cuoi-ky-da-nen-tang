import { useBusinessTypes } from "@/queries/useBusinessTypes";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

interface ShopInfoFormProps {
    shopName: string;
    businessTypeId: number;
    description: string;
    onShopNameChange: (text: string) => void;
    onBusinessTypeIdChange: (id: number) => void;
    onDescriptionChange: (text: string) => void;
}

export function ShopInfoForm({
    shopName,
    businessTypeId,
    description,
    onShopNameChange,
    onBusinessTypeIdChange,
    onDescriptionChange,
}: ShopInfoFormProps) {
    const [showBusinessTypeModal, setShowBusinessTypeModal] = useState(false);

    // Fetch business types từ API
    const { data: businessTypes, isLoading, isError } = useBusinessTypes();

    // Tìm business type được chọn
    const selectedBusinessType = businessTypes?.find(bt => bt.id === businessTypeId);

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

            {/* Business Type Dropdown */}
            <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Loại hình kinh doanh <Text className="text-red-500">*</Text>
                </Text>
                <TouchableOpacity
                    onPress={() => setShowBusinessTypeModal(true)}
                    className="flex-row items-center justify-between border border-gray-300 rounded-lg px-3 py-3"
                >
                    <View className="flex-row items-center flex-1">
                        <Ionicons name="briefcase-outline" size={20} color="#666" />
                        <Text
                            className={`ml-2 text-base ${selectedBusinessType ? 'text-gray-800' : 'text-gray-400'}`}
                            style={{ fontSize: 16, lineHeight: 20 }}
                        >
                            {selectedBusinessType?.name || "Chọn loại hình kinh doanh"}
                        </Text>
                    </View>
                    <Ionicons name="chevron-down" size={20} color="#666" />
                </TouchableOpacity>
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

            {/* Business Type Modal */}
            <Modal
                visible={showBusinessTypeModal}
                transparent
                animationType="slide"
                onRequestClose={() => setShowBusinessTypeModal(false)}
            >
                <View className="flex-1 bg-black/50 justify-end">
                    <View className="bg-white rounded-t-3xl h-[70%]">
                        {/* Header */}
                        <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
                            <Text className="text-lg font-bold text-gray-800">
                                Chọn loại hình kinh doanh
                            </Text>
                            <TouchableOpacity onPress={() => setShowBusinessTypeModal(false)}>
                                <Ionicons name="close" size={24} color="#666" />
                            </TouchableOpacity>
                        </View>

                        {/* Content */}
                        {isLoading ? (
                            <View className="py-10 items-center">
                                <ActivityIndicator size="large" color="#EE4D2D" />
                                <Text className="text-gray-500 mt-2">Đang tải...</Text>
                            </View>
                        ) : isError ? (
                            <View className="py-10 items-center">
                                <Ionicons name="alert-circle-outline" size={48} color="#EF4444" />
                                <Text className="text-gray-500 mt-2">Không thể tải dữ liệu</Text>
                            </View>
                        ) : (
                            <FlatList
                                data={businessTypes}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            onBusinessTypeIdChange(item.id);
                                            setShowBusinessTypeModal(false);
                                        }}
                                        className={`p-4 border-b border-gray-100 ${item.id === businessTypeId ? 'bg-orange-50' : ''
                                            }`}
                                    >
                                        <View className="flex-row items-center justify-between">
                                            <View className="flex-1">
                                                <Text className="text-base font-medium text-gray-800">
                                                    {item.name}
                                                </Text>
                                                {item.description && (
                                                    <Text className="text-sm text-gray-500 mt-1">
                                                        {item.description}
                                                    </Text>
                                                )}
                                            </View>
                                            {item.id === businessTypeId && (
                                                <Ionicons name="checkmark-circle" size={24} color="#EE4D2D" />
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                )}
                                ListEmptyComponent={
                                    <View className="py-10 items-center">
                                        <Text className="text-gray-500">Không có dữ liệu</Text>
                                    </View>
                                }
                            />
                        )}
                    </View>
                </View>
            </Modal>
        </>
    );
}
