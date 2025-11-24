import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Sample data
const SEARCH_HISTORY = [
  "Samsung Galaxy Siêu Sale",
  "dấu sĩ lbx",
  "prism keycaps",
  "monka 3067",
  "switch cherry",
  "Switch",
  "bàn phím m1w",
];

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

const PRODUCT_RECOMMENDATIONS = [
  {
    id: 1,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rdvl-lz7j1caiwpep17@resize_w450_nl.webp",
    title: "SK hynix",
    name: "DDR5 8GB 4800 SO-DIMM",
  },
  {
    id: 2,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rdw4-lz7j1caiwpep17@resize_w450_nl.webp",
    title: "Keyboard Bag",
    name: "68/87 Keys | Wear-Resistant Hard-shell protection",
  },
  {
    id: 3,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    title: "Đấu Sĩ Lbx Achilles",
    name: "Mô hình lắp ráp",
  },
  {
    id: 4,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rdvl-lz7j1caiwpep17@resize_w450_nl.webp",
    title: "USA NUTRITION",
    name: "Whey Protein Isolate",
  },
];

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const showSuggestions = searchText.length > 0;

  const handleClear = () => {
    setSearchText("");
  };

  const handleSearch = () => {
    console.log("Search:", searchText);
    // Implement search logic here
  };

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-white border-b border-gray-200">
        <View className="flex-row items-center px-3 py-2">
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()} className="mr-2">
            <Ionicons name="arrow-back" size={24} color="#EE4D2D" />
          </TouchableOpacity>

          {/* Search Input */}
          <View className="flex-1 flex-row items-center justify-center bg-white rounded-md px-3 py-2 border border-gray-300">
            <TextInput
              placeholder="Samsung Galaxy Siêu Sale"
              placeholderTextColor="#999"
              className="flex-1 text-lg text-gray-800"
              style={{ fontSize: 16, lineHeight: 20 }}
              value={searchText}
              onChangeText={setSearchText}
              onFocus={() => setIsFocused(true)}
              autoFocus={false}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={handleClear} className="mr-2">
                <Ionicons name="close-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
            <Ionicons name="camera-outline" size={22} color="#666" />
          </View>

          {/* Search Button */}
          <TouchableOpacity
            onPress={handleSearch}
            className="ml-2 bg-primary rounded-md p-2"
          >
            <Ionicons name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1">
        {showSuggestions ? (
          // Autocomplete Suggestions (when typing)
          <View className="bg-white">
            {SEARCH_SUGGESTIONS.map((suggestion) => (
              <TouchableOpacity
                key={suggestion.id}
                onPress={() => setSearchText(suggestion.fullText)}
                className="px-4 py-3 border-b border-gray-100"
              >
                <Text className="text-base text-gray-800">
                  <Text className="font-bold" numberOfLines={1}>{suggestion.text}</Text>
                  {suggestion.fullText.substring(suggestion.text.length)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          // Initial State (search history + suggestions + products)
          <View>
            {/* Search History */}
            <View className="px-4 py-3">
              <View
                className="flex flex-row flex-wrap gap-3"
              >
                {SEARCH_HISTORY.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSearchText(item)}
                    className="bg-gray-100 rounded-full px-3 py-2 mr-2 flex-row items-center"
                  >
                    <Text className="text-sm text-gray-700 mr-1">{item}</Text>
                    {index === 0 && (
                      <Image
                        source={{
                          uri: "https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9740552626c877d211c7_xxhdpi",
                        }}
                        className="w-4 h-4 rounded"
                      />
                    )}
                  </TouchableOpacity>
                ))}
                <TouchableOpacity className="bg-gray-100 rounded-full px-3 py-1.5 flex-row items-center">
                  <Ionicons name="trash-outline" size={14} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Search Suggestions Section */}
            <View className="px-4 py-2">
              <Text className="text-md font-medium text-gray-800 mb-3">
                Gợi ý tìm kiếm
              </Text>

              {/* Product Grid */}
              <View className="flex-row flex-wrap -mx-1">
                {PRODUCT_RECOMMENDATIONS.map((product) => (
                  <View key={product.id} className="w-1/2 px-1 mb-3">
                    <TouchableOpacity className="bg-white rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        source={{ uri: product.image }}
                        className="w-full aspect-square"
                        resizeMode="cover"
                      />
                      <View className="p-2">
                        <Text
                          className="text-xs font-medium text-gray-800 mb-1"
                          numberOfLines={1}
                        >
                          {product.title}
                        </Text>
                        <Text
                          className="text-xs text-gray-600"
                          numberOfLines={1}
                        >
                          {product.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
