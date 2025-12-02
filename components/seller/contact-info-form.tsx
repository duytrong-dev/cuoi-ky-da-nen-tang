import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

interface ContactInfoFormProps {
    phoneNumber: string;
    email: string;
    address: string;
    onPhoneNumberChange: (text: string) => void;
    onEmailChange: (text: string) => void;
    onAddressChange: (text: string) => void;
}

export function ContactInfoForm({
    phoneNumber,
    email,
    address,
    onPhoneNumberChange,
    onEmailChange,
    onAddressChange,
}: ContactInfoFormProps) {
    return (
        <>
            {/* Contact Information */}
            <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <Text className="text-lg font-bold text-gray-800 mb-4">
                    Thông tin liên hệ
                </Text>

                {/* Phone Number */}
                <View className="mb-4">
                    <Text className="text-base font-semibold text-gray-800 mb-2">
                        Số điện thoại <Text className="text-red-500">*</Text>
                    </Text>
                    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2">
                        <Ionicons name="call-outline" size={20} color="#666" />
                        <TextInput
                            className="flex-1 ml-2 text-base"
                            placeholder="Nhập số điện thoại"
                            value={phoneNumber}
                            onChangeText={onPhoneNumberChange}
                            keyboardType="phone-pad"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>
                </View>

                {/* Email */}
                <View>
                    <Text className="text-base font-semibold text-gray-800 mb-2">
                        Email <Text className="text-red-500">*</Text>
                    </Text>
                    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2">
                        <Ionicons name="mail-outline" size={20} color="#666" />
                        <TextInput
                            className="flex-1 ml-2 text-base"
                            placeholder="email@example.com"
                            value={email}
                            onChangeText={onEmailChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={{ fontSize: 16, lineHeight: 20 }}
                        />
                    </View>
                </View>
            </View>

            {/* Address */}
            <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <Text className="text-base font-semibold text-gray-800 mb-2">
                    Địa chỉ Shop <Text className="text-red-500">*</Text>
                </Text>
                <View className="flex-row items-start border border-gray-300 rounded-lg px-3 py-2">
                    <Ionicons name="location-outline" size={20} color="#666" style={{ marginTop: 2 }} />
                    <TextInput
                        className="flex-1 ml-2 text-base"
                        placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                        value={address}
                        onChangeText={onAddressChange}
                        multiline
                        numberOfLines={2}
                        style={{ fontSize: 16, lineHeight: 20 }}
                    />
                </View>
            </View>
        </>
    );
}
