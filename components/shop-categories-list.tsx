import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Category {
    id: string;
    name: string;
    productCount: number;
    thumbnail: string;
}

interface ShopCategoriesListProps {
    categories: Category[];
}

export default function ShopCategoriesList({ categories }: ShopCategoriesListProps) {
    const router = useRouter();

    return (
        <View className="bg-white">
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={category.id}
                    onPress={() => console.log("Category:", category.name)}
                    className={`flex-row items-center px-4 py-3 ${index !== categories.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                >
                    {/* Thumbnail */}
                    <Image
                        source={
                            category.thumbnail.startsWith("http")
                                ? { uri: category.thumbnail }
                                : require("@/assets/images/logo.png")
                        }
                        style={{ width: 48, height: 48 }}
                        className="rounded-md bg-gray-100"
                    />

                    {/* Category Info */}
                    <View className="flex-1 ml-3">
                        <Text className="text-base text-gray-800">
                            {category.name}{" "}
                            <Text className="text-gray-400">({category.productCount})</Text>
                        </Text>
                    </View>

                    {/* Chevron */}
                    <Ionicons name="chevron-forward" size={20} color="#999" />
                </TouchableOpacity>
            ))}
        </View>
    );
}
