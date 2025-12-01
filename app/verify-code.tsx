import ContinueButton from "@/components/continue-button";
import OTPInput from "@/components/otp-input";
import { useCountdown } from "@/hooks/use-countdown";
import { useOTPInput } from "@/hooks/use-otp-input";
import { useState } from "react";
import { Text, View } from "react-native";

export default function VerifyCodeScreen() {
  const [phoneNumber] = useState("(+84) 702 579 654");
  const { countdown } = useCountdown(60);
  const { otp, inputRefs, handleChange, handleKeyPress, isComplete, value } = useOTPInput(6);

  const handleContinue = () => {
    console.log("OTP:", value);
  };

  return (
    <View className="flex-1 bg-white px-5 pt-16">
      <Text className="text-base text-gray-700 mb-3">
        Mã xác thực đã được gửi qua{" "}
        <Text className="font-semibold text-blue-500">Zalo</Text> đến số điện thoại
      </Text>

      <Text className="text-lg font-semibold mb-8">{phoneNumber}</Text>

      {/* OTP Inputs */}
      <OTPInput
        otp={otp}
        inputRefs={inputRefs}
        onChangeText={handleChange}
        onKeyPress={handleKeyPress}
      />

      <ContinueButton
        disabled={!isComplete}
        onPress={handleContinue}
      />

      <Text className="mt-5 text-center text-gray-600">
        Vui lòng chờ <Text className="text-secondary">{countdown}</Text> giây để
        nhận lại mã xác thực
      </Text>
    </View>
  );
}

