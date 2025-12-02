import CheckoutOrderItem from "@/components/checkout-order-item";
import CheckoutSummary from "@/components/checkout-summary";
import DeliveryAddressSection from "@/components/delivery-address-section";
import PaymentMethodSection from "@/components/payment-method-section";
import ShippingMethodSection from "@/components/shipping-method-section";
import { Colors } from "@/constants/theme";
import { formatVND } from "@/utils/formatVND";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function CheckoutScreen() {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<"cod" | "shopeepay">("cod");
    const [note, setNote] = useState("");

    // Sample data - would come from cart in real app
    const deliveryAddress = {
        name: "Nguyễn Duy Trọng",
        phone: "(+84) 914 255 912",
        address: "Trường Đại Học Việt Hàn, Đường Trần Đại Nghĩa\nPhường Hòa Quý, Quận Ngũ Hành Sơn, Đà Nẵng"
    };

    const orderItem = {
        shopName: "dbsticker",
        product: {
            name: "Giá đỡ trung bày huy hiệu, chân đế dùng thể hìn...",
            variant: "2 cái",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
            price: 8000,
            quantity: 1
        }
    };

    const shipping = {
        method: "Nhanh",
        deliveryDate: "2 Th12 - 3 Th12",
        voucherDiscount: 15000,
        voucherNote: "Nhận Voucher trị giá 15.000đ nếu đơn hàng được giao đến bạn sau ngày 3 Tháng 12 2025."
    };

    const pricing = {
        subtotal: 8000,
        shippingFee: 32700,
        shippingDiscount: -32700,
        total: 8000,
        savings: 32700
    };

    return (
        <View className="flex-1 bg-gray-50">
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Delivery Address */}
                <DeliveryAddressSection
                    name={deliveryAddress.name}
                    phone={deliveryAddress.phone}
                    address={deliveryAddress.address}
                />

                {/* Order Item */}
                <CheckoutOrderItem
                    shopName={orderItem.shopName}
                    product={orderItem.product}
                    note={note}
                    onNoteChange={setNote}
                />

                {/* Shipping Method */}
                <ShippingMethodSection
                    method={shipping.method}
                    deliveryDate={shipping.deliveryDate}
                    shippingFee={pricing.shippingFee}
                    voucherDiscount={shipping.voucherDiscount}
                />

                {/* Total */}
                <View className="bg-white px-4 py-3 mb-2">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-md">Tổng số tiền (1 sản phẩm)</Text>
                        <Text className="font-medium text-lg text-red-500">{pricing.subtotal.toLocaleString('vi-VN')}đ</Text>
                    </View>
                </View>

                {/* Shopee Voucher */}
                <TouchableOpacity className="bg-white px-4 py-4 mb-2 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="ticket-percent" size={20} color={Colors.light.secondary} />
                        <Text className="font-medium text-md ml-2">Chọn Voucher</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-teal-600 text-sm mr-2">Miễn Phí Vận Chuyển</Text>
                        <Ionicons name="chevron-forward" size={16} color="#999" />
                    </View>
                </TouchableOpacity>

                {/* Payment Method */}
                <PaymentMethodSection
                    selectedMethod={paymentMethod}
                    onMethodChange={setPaymentMethod}
                />

                {/* Payment Details */}
                <CheckoutSummary
                    subtotal={pricing.subtotal}
                    shippingFee={pricing.shippingFee}
                    shippingDiscount={pricing.shippingDiscount}
                    total={pricing.total}
                />

                {/* Terms */}
                <View className="px-4 py-3">
                    <Text className="text-gray-500 text-sm">
                        Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
                        <Text className="text-primary">Điều khoản của chúng tôi</Text>
                    </Text>
                </View>
            </ScrollView>

            {/* Bottom Bar */}
            <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-3">
                <View className="flex-row items-center justify-between pb-6">
                    <View className="flex-1 items-end px-4">
                        <View className="flex-row items-center">
                            <Text className="text-sm text-gray-600 mr-1">Tổng cộng</Text>
                            <Text className="text-red-500 text-xl font-bold max-w-[80px] overflow-hidden" numberOfLines={1}>
                                {formatVND(pricing.total)}
                            </Text>
                        </View>
                        <View className="flex-row items-center text-xs text-gray-500">
                            <Text className="text-xs text-gray-600 mr-1">Tiết kiệm</Text>
                            <Text className="text-red-500 font-bold">
                                {formatVND(pricing.savings)}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        className="bg-red-500 px-8 py-3 rounded-md"
                        onPress={() => router.push("/orders/success")}
                    >
                        <Text className="text-white font-bold text-base">Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
