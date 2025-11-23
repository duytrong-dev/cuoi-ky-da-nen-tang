import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const screenOptions = {
  headerShown: true,
  headerTitle: "Quên mật khẩu",
};


export default function ForgotPassword() {

  const router = useRouter();
  const [value, setValue] = useState("");

  const canContinue = value.trim().length > 0;

  return (
    <View className="flex-1 bg-white px-5 pt-16">

      {/* Input */}
      <View className="flex-row items-center border-b border-gray-300 pb-2 mb-8">
        <Ionicons name="person-outline" size={22} color="#777" />
        <TextInput
          placeholder="Số điện thoại/Email"
          placeholderTextColor="#b7b7b7"
          className="flex-1 ml-3 text-lg"
          onChangeText={setValue}
          value={value}
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        disabled={!canContinue}
        onPress={() => router.push("/verify-code")}
        className={`w-full py-4 rounded-lg ${canContinue ? "bg-primary" : "bg-gray-200"
          }`}
      >
        <Text
          className={`text-center font-semibold ${canContinue ? "text-white" : "text-gray-500"
            }`}
        >
          Tiếp
        </Text>
      </TouchableOpacity>

      {/* Extra link */}
      <TouchableOpacity className="mt-8">
        <Text className="text-primary text-center">
          Số điện thoại đã thay đổi?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
