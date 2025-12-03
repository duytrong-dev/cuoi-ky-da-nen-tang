import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

interface ContactInfoFormProps {
    address: string;
    onAddressChange: (text: string) => void;
}

export function ContactInfoForm({
    address,
    onAddressChange,
}: ContactInfoFormProps) {
    return (
        <>
            {/* Address */}
            <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Địa chỉ Shop <Text className="text-red-500">*</Text>
                </Text>
                <View className="flex-row items-start border border-gray-300 rounded-lg px-3 py-2">
                    <Ionicons name="location-outline" size={20} color="#666" style={{ marginTop: 2 }} />
                    <TextInput
                        className="flex-1 ml-2 text-base min-h-[50px]"
                        placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                        value={address}
                        onChangeText={onAddressChange}
                        multiline
                        numberOfLines={2}
                        style={{ fontSize: 16, lineHeight: 20 }}
                    />
                </View>
            </View>
        </>
    );
}
