import { Switch, Text, View } from 'react-native';

interface LayoutToggleItemProps {
    title: string;
    description: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
    showBorder?: boolean;
}

export function LayoutToggleItem({
    title,
    description,
    value,
    onValueChange,
    showBorder = true
}: LayoutToggleItemProps) {
    return (
        <View className={`flex-row items-center justify-between py-3 ${showBorder ? 'border-b border-gray-100' : ''}`}>
            <View className="flex-1">
                <Text className="text-base text-gray-800 font-medium">
                    {title}
                </Text>
                <Text className="text-sm text-gray-500 mt-1">
                    {description}
                </Text>
            </View>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: '#d1d5db', true: '#FED7D7' }}
                thumbColor={value ? '#EE4D2D' : '#f4f3f4'}
            />
        </View>
    );
}
