import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const router = useRouter()

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 relative">
        {/* LOGO */}
        <View className="items-center mb-10 mt-10">
          <Image
            source={require("@/assets/images/react-icon.png")}
            style={{ width: 90, height: 90 }}
          />
        </View>

        {/* PHONE INPUT */}
        <View className="flex-row items-center border-b border-gray-300 py-3">
          <Ionicons name="call-outline" size={22} color="#777" />

          <TextInput
            placeholder="Số điện thoại"
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
            className="flex-1 ml-3 text-lg"
          />
        </View>

        {/* NEXT BUTTON */}
        <TouchableOpacity
          className={`w-full py-4 rounded-lg mt-6 ${phone.length >= 9 ? "bg-primary" : "bg-gray-200"
            }`}
          disabled={phone.length < 9}
        >
          <Text className={`text-center font-semibold ${phone.length >= 9 ? "text-white" : "text-gray-500"}`}>
            Tiếp
          </Text>
        </TouchableOpacity>

        {/* CHECKBOX ShopeePay */}
        <TouchableOpacity
          className="flex-row items-start mt-5"
          onPress={() => setChecked(!checked)}
        >
          <View
            className={`w-5 h-5 rounded border ${checked ? "bg-primary border-primary" : "border-gray-400"
              }`}
          />
          <Text className="flex-1 ml-3 text-gray-700">
            Kích hoạt Ví điện tử để sử dụng ưu đãi độc quyền khi thanh toán.
          </Text>
        </TouchableOpacity>

        {/* OR LINE */}
        <View className="flex-row items-center justify-center my-8">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="mx-3 text-gray-400">Hoặc</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        {/* SOCIAL REGISTER */}
        <View className="flex-col gap-4">

          {/* GOOGLE */}
          <TouchableOpacity className="flex-row items-center border border-gray-300 py-3 rounded-lg">
            <Image
              source={require("@/assets/images/google-logo.png")}
              style={{ width: 24, height: 20, marginLeft: 10 }}
              resizeMode="contain"
            />
            <Text className="flex-1 text-center font-medium mr-5">
              Đăng ký bằng Google
            </Text>
          </TouchableOpacity>

          {/* FACEBOOK */}
          <TouchableOpacity className="flex-row items-center border border-gray-300 py-3 rounded-lg">
            <Ionicons name="logo-facebook" size={22} color="#1877F2" style={{ marginLeft: 12 }} />
            <Text className="flex-1 text-center font-medium mr-5">
              Đăng ký bằng Facebook
            </Text>
          </TouchableOpacity>

          {/* APPLE */}
          <TouchableOpacity className="flex-row items-center border border-gray-300 py-3 rounded-lg">
            <Ionicons name="logo-apple" size={23} color="#000" style={{ marginLeft: 12 }} />
            <Text className="flex-1 text-center font-medium mr-5">
              Đăng ký bằng Apple
            </Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* TERMS & CONDITIONS */}
      <View className="absolute flex w-full justify-center bottom-12 px-10">
        <Text className="text-center text-gray-400 text-sm leading-5">
          Bằng việc đăng ký, bạn đã đồng ý với
        </Text>
        <Text className="text-center text-gray-400 text-sm leading-5">
          <Text className="text-primary">Điều khoản Dịch vụ</Text>
          {" "} & {" "}
          <Text className="text-primary">Chính sách Riêng tư</Text>
          {" "} của Nền tảng
        </Text>

        {/* FOOTER */}
        <View className="w-full flex flex-row justify-center items-center mt-12">
          <Text className="text-gray-500 font-light">Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-primary font-normal">Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
