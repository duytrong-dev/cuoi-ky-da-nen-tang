import FilterPills from "@/components/filter-pills";
import SearchBar from "@/components/search-bar";
import SearchTabs, { SearchTab } from "@/components/search-tabs";
import React from "react";
import { View } from "react-native";

interface SearchHeaderProps {
    searchText: string;
    onSearchTextChange: (text: string) => void;
    selectedTab: SearchTab;
    onTabChange: (tab: SearchTab) => void;
    selectedFilter?: string;
    onBack: () => void;
    onFilter?: () => void;
    onCamera?: () => void;
    onFilterPillPress?: (filterId: string) => void;
}

export default function SearchHeader({
    searchText,
    onSearchTextChange,
    selectedTab,
    onTabChange,
    selectedFilter,
    onBack,
    onFilter,
    onCamera,
    onFilterPillPress,
}: SearchHeaderProps) {
    return (
        <View className="bg-white border-b border-gray-100">
            <SearchBar
                value={searchText}
                onChangeText={onSearchTextChange}
                onBack={onBack}
                onFilter={onFilter}
                onCamera={onCamera}
            />
            <SearchTabs
                selectedTab={selectedTab}
                onTabChange={onTabChange}
            />
            <FilterPills
                selectedFilter={selectedFilter}
                onFilterPress={onFilterPillPress}
            />
        </View>
    );
}
