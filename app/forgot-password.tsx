import ContinueButton from "@/components/continue-button";
import InputField from "@/components/input-field";
import TextLink from "@/components/text-link";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export const screenOptions = {
  headerShown: true,
  headerTitle: "Quên mật khẩu",
};

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");

  const canContinue = identifier.trim().length > 0;

  return (
    <View className="flex-1 bg-white px-5 pt-16">
      {/* Input */}
      <InputField
        icon="person-outline"
        placeholder="Email hoặc số điện thoại"
        value={identifier}
        onChangeText={setIdentifier}
      />

      {/* Button */}
      <ContinueButton
        disabled={!canContinue}
        onPress={() => router.push("/verify-code")}
        text="Tiếp tục"
      />

      {/* Extra link */}
      <View className="mt-8">
        <TextLink
          text="Số điện thoại đã thay đổi?"
          onPress={() => console.log("Phone changed")}
          className="text-secondary text-center"
        />
      </View>
    </View>
  );
}

