import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface Suggestion {
    id: number;
    text: string;
    fullText: string;
}

interface SearchSuggestionsProps {
    suggestions: Suggestion[];
    onSuggestionPress: (fullText: string) => void;
}

export default function SearchSuggestions({ suggestions, onSuggestionPress }: SearchSuggestionsProps) {
    return (
        <View className="bg-white">
            {suggestions.map((suggestion) => (
                <TouchableOpacity
                    key={suggestion.id}
                    onPress={() => onSuggestionPress(suggestion.fullText)}
                    className="px-4 py-3 border-b border-gray-100"
                >
                    <Text className="text-base text-gray-800">
                        <Text className="font-bold" numberOfLines={1}>{suggestion.text}</Text>
                        {suggestion.fullText.substring(suggestion.text.length)}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
