import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
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

export default function AddProduct() {
    const router = useRouter();
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState<string[]>([]);

    const pickImages = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Cần quyền truy cập', 'Vui lòng cấp quyền truy cập thư viện ảnh.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsMultipleSelection: true,
            quality: 0.8,
        });

        if (!result.canceled) {
            const newImages = result.assets.map(asset => asset.uri);
            setImages([...images, ...newImages].slice(0, 5)); // Max 5 images
        }
    };

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        if (!productName || !price || !stock) {
            Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin bắt buộc');
            return;
        }

        console.log({
            productName,
            description,
            price,
            stock,
            category,
            images,
        });

        Alert.alert('Thành công', 'Đã thêm sản phẩm mới', [
            { text: 'OK', onPress: () => router.back() }
        ]);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-gray-50"
        >
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="p-4">
                    {/* Product Images */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-3">
                            Hình ảnh sản phẩm <Text className="text-red-500">*</Text>
                        </Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {images.map((uri, index) => (
                                <View key={index} className="mr-3 relative">
                                    <Image
                                        source={{ uri }}
                                        className="w-24 h-24 rounded-lg"
                                    />
                                    <TouchableOpacity
                                        onPress={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                                    >
                                        <Ionicons name="close" size={16} color="white" />
                                    </TouchableOpacity>
                                </View>
                            ))}

                            {images.length < 5 && (
                                <TouchableOpacity
                                    onPress={pickImages}
                                    className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg items-center justify-center"
                                >
                                    <Ionicons name="camera-outline" size={32} color="#9ca3af" />
                                    <Text className="text-xs text-gray-400 mt-1">Thêm ảnh</Text>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                        <Text className="text-xs text-gray-500 mt-2">
                            Tối đa 5 ảnh. Ảnh đầu tiên sẽ là ảnh đại diện.
                        </Text>
                    </View>

                    {/* Product Name */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Tên sản phẩm <Text className="text-red-500">*</Text>
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                            placeholder="Nhập tên sản phẩm"
                            value={productName}
                            onChangeText={setProductName}
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>

                    {/* Category */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Danh mục
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                            placeholder="VD: Thời trang, Điện tử..."
                            value={category}
                            onChangeText={setCategory}
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>

                    {/* Price and Stock */}
                    <View className="flex-row mb-4">
                        <View className="flex-1 bg-white rounded-lg p-4 mr-2 shadow-sm">
                            <Text className="text-base font-semibold text-gray-800 mb-2">
                                Giá bán <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                                placeholder="0"
                                value={price}
                                onChangeText={setPrice}
                                keyboardType="numeric"
                                style={{ fontSize: 16, lineHeight: 20 }}
                            />
                            <Text className="text-xs text-gray-500 mt-1">VNĐ</Text>
                        </View>

                        <View className="flex-1 bg-white rounded-lg p-4 ml-2 shadow-sm">
                            <Text className="text-base font-semibold text-gray-800 mb-2">
                                Số lượng <Text className="text-red-500">*</Text>
                            </Text>
                            <TextInput
                                className="border border-gray-300 rounded-lg px-3 py-2 text-base"
                                placeholder="0"
                                value={stock}
                                onChangeText={setStock}
                                keyboardType="numeric"
                                style={{ fontSize: 16, lineHeight: 20 }}
                            />
                            <Text className="text-xs text-gray-500 mt-1">Sản phẩm</Text>
                        </View>
                    </View>

                    {/* Description */}
                    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <Text className="text-base font-semibold text-gray-800 mb-2">
                            Mô tả sản phẩm
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 text-base min-h-[120px]"
                            placeholder="Mô tả chi tiết về sản phẩm..."
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>

                    {/* Submit Buttons */}
                    <View className="flex-row mb-6">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="flex-1 py-4 border border-gray-300 rounded-lg mr-2"
                        >
                            <Text className="text-center text-gray-700 font-semibold">Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            className="flex-1 py-4 bg-secondary rounded-lg ml-2"
                        >
                            <Text className="text-center text-white font-semibold">Thêm sản phẩm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
