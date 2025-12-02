import React from "react";
import { TextInput, View } from "react-native";

interface OTPInputProps {
    otp: string[];
    inputRefs: React.RefObject<(TextInput | null)[]>;
    onChangeText: (text: string, index: number) => void;
    onKeyPress: (e: any, index: number) => void;
}

export default function OTPInput({
    otp,
    inputRefs,
    onChangeText,
    onKeyPress,
}: OTPInputProps) {
    return (
        <View className="flex-row justify-between mb-8">
            {otp.map((val, idx) => (
                <TextInput
                    key={idx}
                    ref={(ref) => {
                        inputRefs.current[idx] = ref;
                    }}
                    value={val}
                    onChangeText={(t) => onChangeText(t, idx)}
                    onKeyPress={(e) => onKeyPress(e, idx)}
                    maxLength={1}
                    keyboardType="number-pad"
                    className="w-12 h-14 border-b border-gray-300 text-center text-2xl text-gray-700"
                />
            ))}
        </View>
    );
}
