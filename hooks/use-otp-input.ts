import { useRef, useState } from "react";
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from "react-native";

export function useOTPInput(length: number = 6) {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleChange = (text: string, index: number) => {
        const digit = text.replace(/[^0-9]/g, "");
        if (!digit) return;

        const updated = [...otp];
        updated[index] = digit[0];
        setOtp(updated);

        // Focus next input
        if (index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>,
        index: number
    ) => {
        if (e.nativeEvent.key === "Backspace") {
            const updated = [...otp];
            if (otp[index] !== "") {
                // Clear current input
                updated[index] = "";
                setOtp(updated);
            } else if (index > 0) {
                // Clear previous input and focus back
                updated[index - 1] = "";
                setOtp(updated);
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const isComplete = otp.every((x) => x !== "");
    const value = otp.join("");
    const reset = () => setOtp(Array(length).fill(""));

    return {
        otp,
        inputRefs,
        handleChange,
        handleKeyPress,
        isComplete,
        value,
        reset,
    };
}
