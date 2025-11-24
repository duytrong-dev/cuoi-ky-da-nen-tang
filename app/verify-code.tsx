import { useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerifyCodeScreen() {

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [countdown, setCountdown] = useState(60);
  const [phoneNumber, setPhoneNumber] = useState("(+84) 702 579 654");

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Xử lý nhập OTP
  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "");
    if (!digit) return;

    const updated = [...otp];
    updated[index] = digit[0];
    setOtp(updated);

    // Focus ô tiếp theo
    if (index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Xử lý backspace
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      const updated = [...otp];
      if (otp[index] !== "") {
        // Xóa ô hiện tại
        updated[index] = "";
        setOtp(updated);
      } else if (index > 0) {
        // Xóa ô trước và focus về trước
        updated[index - 1] = "";
        setOtp(updated);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const canContinue = otp.every((x) => x !== "");

  return (
    <View className="flex-1 bg-white px-5 pt-16">
      <Text className="text-base text-gray-700 mb-3">
        Mã xác thực đã được gửi qua{" "}
        <Text className="font-semibold text-blue-500">Zalo</Text> đến số điện thoại
      </Text>

      <Text className="text-lg font-semibold mb-8">{phoneNumber}</Text>

      {/* OTP Inputs */}
      <View className="flex-row justify-between mb-8">
        {otp.map((val, idx) => (
          <TextInput
            key={idx}
            ref={(ref) => {
              inputRefs.current[idx] = ref;
            }}
            value={val}
            onChangeText={(t) => handleChange(t, idx)}
            onKeyPress={(e) => handleKeyPress(e, idx)}
            maxLength={1}
            keyboardType="number-pad"
            className="w-12 h-14 border-b border-gray-500 text-center text-2xl text-primary"
          />
        ))}
      </View>

      <TouchableOpacity
        disabled={!canContinue}
        onPress={() => console.log("OTP:", otp.join(""))}
        className={`w-full py-4 rounded-lg ${canContinue ? "bg-primary" : "bg-gray-200"
          }`}
      >
        <Text
          className={`text-center font-semibold ${canContinue ? "text-white" : "text-gray-500"
            }`}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>

      <Text className="mt-5 text-center text-gray-600">
        Vui lòng chờ <Text className="text-primary">{countdown}</Text> giây để
        nhận lại mã xác thực
      </Text>
    </View>
  );
}
