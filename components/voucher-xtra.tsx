import { Text, View } from "react-native";

export default function VoucherXtra() {
    return (
        <View className="absolute bottom-0 left-0 bg-yellow-400 px-1 py-[2px]">
            <Text className="text-[10px] font-bold text-white">VOUCHER</Text>
            <Text className="text-[10px] font-bold text-red-500 leading-3">XTRA</Text>
        </View>
    );
}