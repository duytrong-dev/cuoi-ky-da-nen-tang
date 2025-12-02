import ContinueButton from "@/components/continue-button";
import Divider from "@/components/divider";
import InputField from "@/components/input-field";
import PasswordInput from "@/components/password-input";
import SocialLoginButton from "@/components/social-login-button";
import TextLink from "@/components/text-link";
import { useLogin } from "@/queries/useAuth";
import { LoginBody } from "@/schemaValidations/auth.schema";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [useSMS, setUseSMS] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const router = useRouter();
  const loginMutation = useLogin();

  const canLogin = !useSMS
    ? email.trim().length > 0 && password.trim().length > 0
    : phoneNumber.trim().length > 0;

  const handleLogin = async () => {
    setErrors({});

    const data = {
      email,
      password,
    };

    const result = LoginBody.safeParse(data);

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
      await loginMutation.mutateAsync(result.data);
      Alert.alert('Thành công', 'Đăng nhập thành công!');
      router.replace('/')
      setEmail('');
      setPassword('');
      setErrors({});
    } catch (error: any) {
      if (error?.response?.data?.errors) {
        const serverErrors = error.response.data.errors;
        setErrors({
          email: serverErrors.email?.[0],
          password: serverErrors.password?.[0],
        });
      } else {
        Alert.alert('Lỗi', error?.message || 'Đăng nhập thất bại');
      }
    }
  };

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
              icon="mail-outline"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              error={errors.email}
            />

            <PasswordInput
              value={password}
              onChangeText={setPassword}
              showForgotPassword={true}
              error={errors.password}
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
          onPress={handleLogin}
          text="Đăng nhập"
          isLoading={loginMutation.isPending}
        />

        {/* toggle password / sms */}
        <TouchableOpacity onPress={() => setUseSMS(!useSMS)}>
          <Text className="text-right text-secondary mt-3">
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
          onPress={() => router.push("/(auth)/register")}
          className="text-secondary font-normal"
        />
      </View>
    </View>
  );
}
