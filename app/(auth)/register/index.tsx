import ContinueButton from "@/components/continue-button";
import Divider from "@/components/divider";
import InputField from "@/components/input-field";
import PasswordInput from "@/components/password-input";
import SocialLoginButton from "@/components/social-login-button";
import { useRegister } from "@/queries/useAuth";
import { RegisterBody } from "@/schemaValidations/auth.schema";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
  }>({});

  const router = useRouter();
  const insets = useSafeAreaInsets();
  const registerMutation = useRegister();

  const canContinue =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    confirmPassword.trim().length > 0;

  const handleRegister = async () => {
    setErrors({});

    const data = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
      role: 'buyer' as const
    };

    const result = RegisterBody.safeParse(data);

    if (!result.success) {
      const newErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof errors;
        if (field) {
          newErrors[field] = issue.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    try {
      await registerMutation.mutateAsync(result.data);
      Alert.alert('Thành công', 'Đăng ký thành công!');
      router.replace('/(auth)/login');
      setEmail('');
      setPassword('');
      setName('');
      setConfirmPassword('');
      setErrors({});
    } catch (error: any) {
      if (error?.response?.data?.errors) {
        const serverErrors = error.response.data.errors;
        setErrors({
          name: serverErrors.name?.[0],
          email: serverErrors.email?.[0],
          password: serverErrors.password?.[0],
          password_confirmation: serverErrors.password_confirmation?.[0],
        });
      } else {
        Alert.alert('Lỗi', error?.message || 'Đăng ký thất bại');
      }
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top }}
      >
        <View className="px-6">
          {/* logo */}
          <View className="items-center mb-8 mt-6">
            <Image
              source={require("@/assets/images/logo.png")}
              style={{ width: 180, height: 120 }}
            />
          </View>

          {/* input fields */}
          <InputField
            icon="person-outline"
            placeholder="Họ và tên"
            value={name}
            onChangeText={setName}
            error={errors.name}
          />

          <InputField
            icon="mail-outline"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            error={errors.email}
          />

          <PasswordInput
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          <PasswordInput
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            error={errors.password_confirmation}
          />

          {/* next button */}
          <ContinueButton
            disabled={!canContinue}
            onPress={handleRegister}
            text="Đăng ký"
            isLoading={registerMutation.isPending}
          />

          {/* or line */}
          <Divider />

          {/* social register */}
          <View className="flex-col gap-4 mb-6">
            <SocialLoginButton provider="google" />
            <SocialLoginButton provider="facebook" />
            <SocialLoginButton provider="apple" />
          </View>

          {/* terms & conditions */}
          <View className="mt-4 mb-4">
            <Text className="text-center text-black text-sm leading-5">
              Bằng việc đăng ký, bạn đã đồng ý với
            </Text>
            <Text className="text-center text-black text-sm leading-5">
              <Text className="text-secondary">Điều khoản Dịch vụ</Text>
              {" "} & {" "}
              <Text className="text-secondary">Chính sách Riêng tư</Text>
              {" "} của Nền tảng
            </Text>
          </View>

          {/* footer */}
          <View className="w-full flex flex-row justify-center items-center mb-6">
            <Text className="text-black font-light">Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text className="text-secondary font-normal">Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
