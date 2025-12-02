import { Text, View } from 'react-native';
import { LayoutToggleItem } from './layout-toggle-item';

interface LayoutOption {
    key: string;
    title: string;
    description: string;
    value: boolean;
}

interface LayoutOptionsSectionProps {
    options: LayoutOption[];
    onToggle: (key: string, value: boolean) => void;
}

export function LayoutOptionsSection({ options, onToggle }: LayoutOptionsSectionProps) {
    return (
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <Text className="text-lg font-bold text-gray-800 mb-4">
                Tùy chỉnh Layout
            </Text>

            {options.map((option, index) => (
                <LayoutToggleItem
                    key={option.key}
                    title={option.title}
                    description={option.description}
                    value={option.value}
                    onValueChange={(value) => onToggle(option.key, value)}
                    showBorder={index < options.length - 1}
                />
            ))}
        </View>
    );
}
