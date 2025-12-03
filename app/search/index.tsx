import ProductsGrid from "@/components/products-grid";
import SearchHistory from "@/components/search-history";
import SearchInput from "@/components/search-input";
import SearchSuggestions from "@/components/search-suggestions";
import { useSearchHistoryStore } from "@/store";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SEARCH_SUGGESTIONS = [
  { id: 1, text: "tim", fullText: "tim" },
  { id: 2, text: "tim", fullText: "tim xe máy trong bãi xe" },
  { id: 3, text: "tim", fullText: "tim minh trong thế giới hậu tuổi thơ" },
  { id: 4, text: "tim", fullText: "tim toy store" },
  { id: 5, text: "tim", fullText: "tim đồ vật sách" },
  { id: 6, text: "tim", fullText: "tim hình giống nhau cho bé" },
  { id: 7, text: "tim", fullText: "tim bình yên trong gia đình" },
  { id: 8, text: "tim", fullText: "tim hình giống nhau" },
  { id: 9, text: "tim", fullText: "tim chia khoá thông minh" },
  { id: 10, text: "tim", fullText: "tim xe máy từ xa" },
];

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { getRecentSearches, clearHistory, addSearch } = useSearchHistoryStore();

  const recentSearches = getRecentSearches();

  const showSuggestions = searchText.length > 0;

  const handleClear = () => {
    setSearchText("");
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      addSearch(searchText);
      router.push(`/search/results?query=${encodeURIComponent(searchText)}`);
    }
  };

  const handleClearHistory = () => {
    Alert.alert("Xóa lịch sử tìm kiếm", "Bạn có chắc chắn muốn xóa lịch sử tìm kiếm không?", [
      {
        text: "Hủy",
        onPress: () => { },
        style: "cancel",
      },
      {
        text: "Xóa",
        onPress: () => clearHistory(),
      },
    ]);
  };

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
        onBack={() => router.back()}
        onClear={handleClear}
        onSearch={handleSearch}
        onCamera={() => console.log("Camera")}
        onFocus={() => setIsFocused(true)}
      />

      {/* Content */}
      <ScrollView className="flex-1">
        {showSuggestions ? (
          // Autocomplete Suggestions (when typing)
          <SearchSuggestions
            suggestions={SEARCH_SUGGESTIONS}
            onSuggestionPress={setSearchText}
          />
        ) : (
          // Initial State (search history + suggestions + products)
          <View>
            {/* Search History */}
            <SearchHistory
              history={recentSearches.map((item) => item.query)}
              onHistoryPress={setSearchText}
              onClearHistory={handleClearHistory}
            />

            {/* Search Suggestions Section */}
            <View className="py-4 px-3 bg-gray-100">
              <Text className="text-md font-medium text-gray-800 mb-3 px-1">
                Gợi ý tìm kiếm
              </Text>

              {/* Product Grid */}
              <ProductsGrid />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
