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
    const [selectedFilter, setSelectedFilter] = useState<string | undefined>();

    const handleFilterPillPress = (filterId: string) => {
        // Toggle filter: if already selected, unselect it
        setSelectedFilter(selectedFilter === filterId ? undefined : filterId);
        console.log("Filter:", filterId);
    };

    return (
        <View className="flex-1 bg-transparent" style={{ paddingTop: insets.top }}>
            {/* Header */}
            <SearchHeader
                searchText={searchText}
                onSearchTextChange={setSearchText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                selectedFilter={selectedFilter}
                onBack={() => router.back()}
                onFilter={() => console.log("Filter")}
                onCamera={() => console.log("Camera")}
                onFilterPillPress={handleFilterPillPress}
            />

            {/* Product Grid */}
            <ProductsGrid />
        </View>
    );
}
