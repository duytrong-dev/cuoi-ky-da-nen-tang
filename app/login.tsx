import ContinueButton from "@/components/continue-button";
import Divider from "@/components/divider";
import InputField from "@/components/input-field";
import PasswordInput from "@/components/password-input";
import SocialLoginButton from "@/components/social-login-button";
import TextLink from "@/components/text-link";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [useSMS, setUseSMS] = useState(false);

  const router = useRouter();

  const canLogin = !useSMS
    ? identifier.trim().length > 0 && password.trim().length > 0
    : phoneNumber.trim().length > 0;

  return (
    <View className="flex-1 bg-white">
      <View className="px-6">
        {/* logo */}
        <View className="items-center mb-10 mt-10">
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 180, height: 120 }}
          />
        </View>

        {/* input */}
        {!useSMS ? (
          <>
            <InputField
              icon="person-outline"
              placeholder="Email hoặc số điện thoại"
              value={identifier}
              onChangeText={setIdentifier}
            />

            <PasswordInput
              value={password}
              onChangeText={setPassword}
              showForgotPassword={true}
            />
          </>
        ) : (
          <InputField
            icon="call-outline"
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        )}

        {/* login button */}
        <ContinueButton
          disabled={!canLogin}
          onPress={() => console.log("Login")}
          text="Đăng nhập"
        />

        {/* toggle password / sms */}
        <TouchableOpacity onPress={() => setUseSMS(!useSMS)}>
          <Text className="text-right text-primary mt-3">
            {useSMS ? "Đăng nhập bằng mật khẩu" : "Đăng nhập bằng SMS"}
          </Text>
        </TouchableOpacity>

        {/* social login & or line */}
        <Divider />

        <View className="flex-col gap-4">
          <SocialLoginButton provider="google" customLabel="Tiếp tục với Google" />
          <SocialLoginButton provider="facebook" customLabel="Tiếp tục với Facebook" />
          <SocialLoginButton provider="apple" customLabel="Tiếp tục với Apple" />
        </View>
      </View>

      {/* footer */}
      <View className="absolute bottom-12 w-full flex-row justify-center">
        <Text className="text-black font-light">Bạn chưa có tài khoản? </Text>
        <TextLink
          text="Đăng ký ngay"
          onPress={() => router.push("/register")}
          className="text-primary font-normal"
        />
      </View>
    </View>
  );
}

