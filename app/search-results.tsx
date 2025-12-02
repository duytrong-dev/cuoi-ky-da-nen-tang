import ProductsGrid from "@/components/products-grid";
import SearchHeader from "@/components/search-header";
import { SearchTab } from "@/components/search-tabs";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SearchResultsScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const params = useLocalSearchParams();
    const [searchText, setSearchText] = useState(params.query as string || "dấu sĩ lbx");
    const [selectedTab, setSelectedTab] = useState<SearchTab>("related");

    return (
        <View className="flex-1 bg-transparent" style={{ paddingTop: insets.top }}>
            {/* Header */}
            <SearchHeader
                searchText={searchText}
                onSearchTextChange={setSearchText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                onBack={() => router.back()}
                onFilter={() => console.log("Filter")}
                onCamera={() => console.log("Camera")}
                onFilterPillPress={(filterId) => console.log("Filter:", filterId)}
            />

            {/* Product Grid */}
            <ProductsGrid />
        </View>
    );
}
