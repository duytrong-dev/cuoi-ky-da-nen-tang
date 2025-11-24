import { Colors } from "@/constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function ProfileScreen() {

  const router = useRouter();
  return (
    <View className="flex-1 bg-transparent">
      {/* Fixed Header with User Info */}
      <View className="bg-primary px-4 h-52 pb-12 pt-16">
        {/* Top Icons */}
        <View className="flex-row justify-end items-center mb-4">
          <TouchableOpacity className="mr-4" onPress={() => { }}>
            <Ionicons name="settings-outline" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="mr-4" onPress={() => router.push("/cart")}>
            <View className="relative">
              <Ionicons name="cart-outline" size={26} color="white" />
              <View className="absolute -top-1 -right-1 bg-white rounded-full w-4 h-4 items-center justify-center">
                <Text className="text-primary text-xs font-bold">5</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/chat")}>
            <Ionicons name="chatbubble-ellipses-outline" size={26} color="white" />
          </TouchableOpacity>
        </View>

        {/* User Profile */}
        <View className="flex-row items-center">
          <View className="relative">
            <Image
              source={{ uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp" }}
              className="w-16 h-16 rounded-full"
            />
            <View className="absolute bottom-0 right-0 bg-gray-600 rounded-full p-1">
              <Ionicons name="camera" size={12} color="white" />
            </View>
          </View>
          <View className="ml-3 flex-1">
            <View className="flex-row items-center">
              <Text className="text-white text-xl font-medium">vf28o_pmef</Text>
              <View className="bg-pink-100 px-2 py-0.5 rounded ml-2">
                <Text className="text-primary text-xs">Thành viên</Text>
              </View>
            </View>
            <View className="flex-row mt-1">
              <Text className="text-white text-sm">0 Người theo dõi</Text>
              <Text className="text-white text-sm ml-4">3 Đang theo dõi</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </View>

        {/* VIP Voucher Banner */}
        <TouchableOpacity className="mx-4 -mt-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-3 flex-row items-center justify-between shadow-lg">
          <View className="flex-row items-center">
            {/* <Image
              source={{ uri: "https://down-vn.img.susercontent.com/file/vn-50009109-1975fb1af4ae3c22878d44f6e32aa1db" }}
              className="w-8 h-8"
            /> */}
            <Text className="text-gray-800 font-medium ml-2">200+ Voucher mới tháng chỉ với 29k!</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1">

        {/* Email Verification */}
        <View className="bg-white mx-4 mt-3 p-4 rounded-lg">
          <TouchableOpacity className="absolute top-2 right-2">
            <Ionicons name="close" size={20} color="#999" />
          </TouchableOpacity>
          <View className="flex-row items-start">
            <Ionicons name="mail-outline" size={24} color={Colors.light.primary} />
            <View className="flex-1 ml-3">
              <Text className="text-base font-medium text-gray-800">Xác minh email</Text>
              <Text className="text-sm text-gray-600 mt-1">
                Cập nhật email thường xuyên để đảm bảo bạn luôn có thể đăng nhập vào Shopee
              </Text>
              <View className="flex-row mt-3">
                <TouchableOpacity className="border border-gray-300 px-4 py-2 rounded mr-2">
                  <Text className="text-sm text-gray-700">Đổi Email</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-300 px-4 py-2 rounded">
                  <Text className="text-sm text-gray-700">Xác minh ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Orders Section */}
        <View className="bg-white mt-3 p-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-base font-medium text-gray-800">Đơn mua</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-sm text-gray-600">Xem lịch sử mua hàng</Text>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
          </View>

          {/* Order Status Icons */}
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity className="items-center flex-1">
              <View className="relative">
                <Ionicons name="receipt-outline" size={28} color="#666" />
              </View>
              <Text className="text-xs text-gray-600 mt-2 text-center">Chờ xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <View className="relative">
                <Ionicons name="cube-outline" size={28} color="#666" />
              </View>
              <Text className="text-xs text-gray-600 mt-2 text-center">Chờ lấy hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <View className="relative">
                <Ionicons name="car-outline" size={28} color="#666" />
              </View>
              <Text className="text-xs text-gray-600 mt-2 text-center">Chờ giao hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <View className="relative">
                <Ionicons name="star-outline" size={28} color="#666" />
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
                  <Text className="text-white text-xs font-bold">1</Text>
                </View>
              </View>
              <Text className="text-xs text-gray-600 mt-2 text-center">Đánh giá</Text>
            </TouchableOpacity>
          </View>

          {/* Special Orders */}
          <View className="border-t border-gray-200 pt-3">
            <TouchableOpacity className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <Ionicons name="phone-portrait-outline" size={20} color={Colors.light.primary} />
                <Text className="text-sm text-gray-800 ml-2">Đơn Nạp điện thoại & Dịch vụ</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-sm text-red-500 mr-1">Giảm 5%</Text>
                <Ionicons name="chevron-forward" size={16} color="#999" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <MaterialCommunityIcons name="food-outline" size={20} color={Colors.light.primary} />
                <Text className="text-sm text-gray-800 ml-2">Đơn ShopeeFood</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-sm text-red-500 mr-1">Đang có ưu đãi</Text>
                <Ionicons name="chevron-forward" size={16} color="#999" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* My Utilities */}
        <View className="bg-white mt-3 p-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-base font-medium text-gray-800">Tiện ích của tôi</Text>
          </View>
          <View className="flex-row justify-between">
            <TouchableOpacity className="items-center flex-1">
              <Ionicons name="wallet-outline" size={28} color={Colors.light.primary} />
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">Ví ShopeePay</Text>
              <Text className="text-xs text-red-500 mt-1">Kích hoạt ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <MaterialCommunityIcons name="credit-card-outline" size={28} color={Colors.light.primary} />
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">SPaylater</Text>
              <Text className="text-xs text-red-500 mt-1">Kích hoạt nhận 150K</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <View className="relative">
                <Ionicons name="logo-usd" size={28} color={Colors.light.primary} />
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3" />
              </View>
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">Shopee Xu</Text>
              <Text className="text-xs text-red-500 mt-1">Nhận đề nhận Xu mỗi ngày!</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <View className="relative">
                <Ionicons name="ticket-outline" size={28} color={Colors.light.primary} />
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3" />
              </View>
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">Kho Voucher</Text>
              <Text className="text-xs text-red-500 mt-1">50+ Voucher</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Financial Services */}
        <View className="bg-white mt-3 p-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-base font-medium text-gray-800">Dịch vụ tài chính</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-sm text-gray-600">Xem thêm</Text>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between">
            <TouchableOpacity className="items-center flex-1">
              <View className="bg-red-100 rounded-full p-2 mb-1">
                <View className="bg-red-500 px-2 py-0.5 rounded">
                  <Text className="text-white text-xs font-bold">Mới</Text>
                </View>
              </View>
              <Ionicons name="cash-outline" size={24} color={Colors.light.primary} />
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">Vay Tiêu Dùng</Text>
              <Text className="text-xs text-red-500 mt-1">Miễn lãi kỳ đầu tiên</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <Ionicons name="card-outline" size={28} color={Colors.light.primary} />
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">Tài ShopeePay</Text>
              <Text className="text-xs text-red-500 mt-1">Gói voucher 1.000.000Đ</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center flex-1">
              <Ionicons name="shield-checkmark-outline" size={28} color={Colors.light.primary} />
              <Text className="text-xs text-gray-800 mt-2 text-center font-medium">Bảo hiểm của tôi</Text>
              <Text className="text-xs text-red-500 mt-1">Gói Tai nạn MIỄN phí</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Other Utilities */}
        <View className="bg-white mt-3 p-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-base font-medium text-gray-800">Tiện ích khác</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-sm text-gray-600">Xem tất cả</Text>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap">
            <TouchableOpacity className="w-1/2 border border-gray-200 p-4 flex-row items-center">
              <Ionicons name="person-outline" size={24} color={Colors.light.primary} />
              <View className="ml-3 flex-1">
                <Text className="text-sm text-gray-800">Khách hàng thân thiết</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity className="w-1/2 border border-gray-200 p-4 flex-row items-center">
              <Ionicons name="bag-outline" size={24} color={Colors.light.primary} />
              <View className="ml-3 flex-1">
                <Text className="text-sm text-gray-800">Mua lại</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity className="w-1/2 border border-gray-200 p-4 flex-row items-center">
              <Ionicons name="people-outline" size={24} color={Colors.light.primary} />
              <View className="ml-3 flex-1">
                <Text className="text-sm text-gray-800">Kênh người sáng tạo</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity className="w-1/2 border border-gray-200 p-4 flex-row items-center">
              <Ionicons name="card-outline" size={24} color={Colors.light.primary} />
              <View className="ml-3 flex-1">
                <Text className="text-sm text-gray-800">Số dư TK Shopee</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity className="w-1/2 border border-gray-200 p-4 flex-row items-center">
              <Ionicons name="storefront-outline" size={24} color={Colors.light.primary} />
              <View className="ml-3 flex-1">
                <Text className="text-sm text-gray-800">Shopee Tiếp Thị Liên Kết</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity className="w-1/2 border border-gray-200 p-4 flex-row items-center">
              <Ionicons name="heart-outline" size={24} color={Colors.light.primary} />
              <View className="ml-3 flex-1">
                <Text className="text-sm text-gray-800">Đã thích</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Support Section */}
        <View className="bg-white mt-3 p-4 mb-4">
          <Text className="text-base font-medium text-gray-800 mb-4">Hỗ trợ</Text>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="help-circle-outline" size={24} color="#666" />
            <Text className="text-sm text-gray-800 ml-3 flex-1">Trung tâm trợ giúp</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="headset-outline" size={24} color="#666" />
            <Text className="text-sm text-gray-800 ml-3 flex-1">Trò Chuyện Với Shopee</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="document-text-outline" size={24} color="#666" />
            <Text className="text-sm text-gray-800 ml-3 flex-1">Shopee Blog</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Recommendations */}
        <View className="bg-white p-4 mb-20">
          <View className="flex-row items-center justify-center mb-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="text-sm text-gray-500 mx-3">Có thể bạn cũng thích</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} className="mr-3 w-40">
                <Image
                  source={{ uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp" }}
                  className="w-40 h-40 rounded-lg"
                />
                <Text className="text-sm text-gray-800 mt-2" numberOfLines={2}>
                  Sản phẩm gợi ý {item}
                </Text>
                <Text className="text-primary font-medium mt-1">₫99.000</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
