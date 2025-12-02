import Checkbox from "@/components/checkbox";
import ContinueButton from "@/components/continue-button";
import Divider from "@/components/divider";
import InputField from "@/components/input-field";
import SocialLoginButton from "@/components/social-login-button";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  const [identifier, setIdentifier] = useState("");
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const canContinue = identifier.trim().length > 0;

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 relative">
        {/* logo */}
        <View className="items-center mb-10 mt-10">
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 180, height: 120 }}
          />
        </View>

        {/* phone input */}
        <InputField
          icon="person-outline"
          placeholder="Email hoặc số điện thoại"
          value={identifier}
          onChangeText={setIdentifier}
        />

        {/* next button */}
        <ContinueButton
          disabled={!canContinue}
          onPress={() => console.log("Continue")}
          text="Tiếp tục"
        />

        {/* checkbox */}
        <Checkbox
          checked={checked}
          onToggle={() => setChecked(!checked)}
          label="Kích hoạt Ví điện tử để sử dụng ưu đãi độc quyền khi thanh toán."
        />

        {/* or line */}
        <Divider />

        {/* social register */}
        <View className="flex-col gap-4">
          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="facebook" />
          <SocialLoginButton provider="apple" />
        </View>
      </View>

      {/* terms & conditions */}
      <View className="absolute flex w-full justify-center bottom-12 px-10">
        <Text className="text-center text-black text-sm leading-5">
          Bằng việc đăng ký, bạn đã đồng ý với
        </Text>
        <Text className="text-center text-black text-sm leading-5">
          <Text className="text-primary">Điều khoản Dịch vụ</Text>
          {" "} & {" "}
          <Text className="text-primary">Chính sách Riêng tư</Text>
          {" "} của Nền tảng
        </Text>

        {/* footer */}
        <View className="w-full flex flex-row justify-center items-center mt-12">
          <Text className="text-black font-light">Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-primary font-normal">Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

