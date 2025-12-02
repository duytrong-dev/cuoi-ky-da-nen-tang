import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface AddCategoryFormProps {
    categoryName: string;
    onCategoryNameChange: (name: string) => void;
    onCancel: () => void;
    onSubmit: () => void;
}

export function AddCategoryForm({
    categoryName,
    onCategoryNameChange,
    onCancel,
    onSubmit
}: AddCategoryFormProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <Text className="text-base font-semibold text-gray-800 mb-3">
                Thêm danh mục mới
            </Text>
            <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-3"
                placeholder="Tên danh mục"
                value={categoryName}
                onChangeText={onCategoryNameChange}
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
                    <Text className="text-center text-white font-medium">Thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
