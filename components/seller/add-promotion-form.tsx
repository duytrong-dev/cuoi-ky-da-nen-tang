import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface AddPromotionFormProps {
    code: string;
    discount: string;
    onCodeChange: (code: string) => void;
    onDiscountChange: (discount: string) => void;
    onCancel: () => void;
    onSubmit: () => void;
}

export function AddPromotionForm({
    code,
    discount,
    onCodeChange,
    onDiscountChange,
    onCancel,
    onSubmit
}: AddPromotionFormProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <Text className="text-base font-semibold text-gray-800 mb-3">
                Tạo mã khuyến mãi mới
            </Text>
            <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-3"
                placeholder="Mã khuyến mãi (VD: SALE50)"
                value={code}
                onChangeText={onCodeChange}
                autoCapitalize="characters"
                style={{ fontSize: 16, lineHeight: 20 }}
            />
            <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-3"
                placeholder="Giá trị giảm"
                value={discount}
                onChangeText={onDiscountChange}
                keyboardType="numeric"
                style={{ fontSize: 16, lineHeight: 20 }}
            />
            <View className="flex-row">
                <TouchableOpacity
                    onPress={onCancel}
                    className="flex-1 py-2 border border-gray-300 rounded-lg mr-2"
                >
                    <Text className="text-center text-gray-700 font-medium">Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onSubmit}
                    className="flex-1 py-2 bg-secondary rounded-lg ml-2"
                >
                    <Text className="text-center text-white font-medium">Tạo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
