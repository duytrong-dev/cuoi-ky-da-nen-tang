import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [useSMS, setUseSMS] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const canLogin = !useSMS
    ? username.trim().length > 0 && password.trim().length > 0
    : phoneNumber.trim().length > 0;

  return (
    <View className="flex-1 bg-white">
      <View className="px-6">
        {/* LOGO */}
        <View className="items-center mb-10 mt-10">
          <Image
            source={require("@/assets/images/react-icon.png")}
            style={{ width: 90, height: 90 }}
          />
        </View>

        {/* INPUTS */}
        {!useSMS ? (
          <>
            {/* USERNAME */}
            <View className="flex-row items-center border-b border-gray-300 py-3">
              <Ionicons name="person-outline" size={22} color="#777" />
              <TextInput
                placeholder="Email hoặc số điện thoại"
                className="flex-1 ml-3 text-lg"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            {/* PASSWORD */}
            <View className="flex-row items-center border-b border-gray-300 py-3 mt-4">
              <Ionicons name="lock-closed-outline" size={22} color="#777" />
              <TextInput
                placeholder="Mật khẩu"
                secureTextEntry={!showPassword}
                className="flex-1 ml-3 text-lg"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#777"
                />
              </TouchableOpacity>
              <View className="w-[1px] h-5 bg-gray-300 mx-3" />
              <TouchableOpacity onPress={() => router.push('/forgot-password')}>
                <Text className="text-primary ">Quên?</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            {/* CHỈ HIỆN INPUT SỐ ĐIỆN THOẠI */}
            <View className="flex-row items-center border-b border-gray-300 py-3">
              <Ionicons name="call-outline" size={22} color="#777" />
              <TextInput
                placeholder="Số điện thoại"
                keyboardType="phone-pad"
                className="flex-1 ml-3 text-lg"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </>
        )}

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          disabled={!canLogin}
          className={`w-full py-4 rounded-lg mt-6 ${canLogin ? "bg-primary" : "bg-gray-200"}`}
        >
          <Text className={`text-center font-semibold ${canLogin ? "text-white" : "text-gray-500"}`}>
            Đăng nhập
          </Text>
        </TouchableOpacity>

        {/* TOGGLE PASSWORD / SMS */}
        <TouchableOpacity onPress={() => setUseSMS(!useSMS)}>
          <Text className="text-right text-primary mt-3">
            {useSMS ? "Đăng nhập bằng mật khẩu" : "Đăng nhập bằng SMS"}
          </Text>
        </TouchableOpacity>

        {/* SOCIAL LOGIN & OR LINE luôn hiện */}
        <View className="flex-row items-center justify-center my-6">
          <View className="w-16 h-[1px] bg-gray-200" />
          <Text className="mx-3 text-gray-400">Hoặc</Text>
          <View className="w-16 h-[1px] bg-gray-200" />
        </View>

        <View className="flex-col gap-4">
          {/* GOOGLE */}
          <TouchableOpacity className="flex-row items-center border border-gray-300 py-3 rounded-lg">
            <Image
              source={require("@/assets/images/google-logo.png")}
              style={{ width: 24, height: 20, marginLeft: 10 }}
              resizeMode="contain"
            />
            <Text className="flex-1 text-center font-medium mr-5">
              Tiếp tục với Google
            </Text>
          </TouchableOpacity>

          {/* FACEBOOK */}
          <TouchableOpacity className="flex-row items-center border border-gray-300 py-3 rounded-lg">
            <Ionicons name="logo-facebook" size={22} color="#1877F2" className="ml-3" />
            <Text className="flex-1 text-center font-medium mr-5">
              Tiếp tục với Facebook
            </Text>
          </TouchableOpacity>

          {/* APPLE */}
          <TouchableOpacity className="flex-row items-center border border-gray-300 py-3 rounded-lg">
            <Ionicons name="logo-apple" size={23} color="black" className="ml-3" />
            <Text className="flex-1 text-center font-medium mr-5">
              Tiếp tục với Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FOOTER */}
      <View className="absolute bottom-12 w-full flex-row justify-center">
        <Text className="text-gray-500 font-light">Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-primary font-normal">Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
