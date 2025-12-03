import { Colors } from "@/constants/theme";
import { ProductType } from "@/schemaValidations/products.schema";
import MasonryList from "@react-native-seoul/masonry-list";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import ProductItem from "./product-item";

interface ProductsGridProps {
    products?: ProductType[];
    isLoading?: boolean;
}

export default function ProductsGrid({ products, isLoading }: ProductsGridProps) {

    return (
        isLoading ? (
            <View className="px-2 py-2 h-[200px] items-center justify-center">
                <ActivityIndicator size="large" color={Colors.light.secondary} />
            </View>
        ) : (
            <MasonryList
                data={products || []}
                keyExtractor={(item) => (item as ProductType).id.toString()}
                numColumns={2}
                renderItem={({ item }) => <ProductItem item={item as ProductType} />}
                showsVerticalScrollIndicator={false}
                className="p-1"
            />
        )
    );
}
