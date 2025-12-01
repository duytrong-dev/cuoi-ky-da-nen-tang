import { ProductItemType, products } from "@/constants/product";
import MasonryList from "@react-native-seoul/masonry-list";
import React from "react";
import ProductItem from "./product-item";

export default function ProductsGrid() {
    return (
        <MasonryList
            data={products}
            keyExtractor={(item) => (item as ProductItemType).id}
            numColumns={2}
            renderItem={({ item }) => <ProductItem item={item as ProductItemType} />}
            showsVerticalScrollIndicator={false}
            className="p-1"
        />
    );
}
