import EmptyOrderNotifications from "@/components/empty-order-notifications";
import NotificationAlertBanner from "@/components/notification-alert-banner";
import NotificationCategoryCard from "@/components/notification-category-card";
import OrderNotificationCard from "@/components/order-notification-card";
import RecommendationSection from "@/components/recommendation-section";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

type NotificationType = "promotion" | "financial" | "update" | "reward" | "order";

type Notification = {
  id: string;
  type: NotificationType;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  badge?: number;
  time?: string;
};

const notificationCategories: Notification[] = [
  {
    id: "1",
    type: "promotion",
    icon: "pricetag-outline",
    iconBg: "#FFA726",
    title: "Khuyến mãi",
    description: "✨ Ưu đãi tới 500.000Đ",
    badge: 8,
  },
  {
    id: "2",
    type: "financial",
    icon: "wallet-outline",
    iconBg: "#EF5350",
    title: "Thông tin Tài chính",
    description: "💰 Hạn mức vay đến 50 triệu",
    badge: 1,
  },
  {
    id: "3",
    type: "update",
    icon: "storefront-outline",
    iconBg: "#EF5350",
    title: "Cập nhật Shopee",
    description: "Bạn đang có 100 Shopee Xu sẽ hết hạn vào...",
    badge: 1,
  },
  {
    id: "4",
    type: "reward",
    icon: "gift-outline",
    iconBg: "#42A5F5",
    title: "Giải Thưởng Shopee",
    description: "Đập Kẹo: Lượt chơi đã đầy, vào chơi ngay b...",
    badge: 5,
  },
];

type OrderNotification = {
  id: string;
  image: string;
  title: string;
  orderId: string;
  description: string;
  time: string;
};

const orderNotifications: OrderNotification[] = [
  // Empty - will show empty state
  // Uncomment below to show order notification
  {
    id: "1",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
    title: "Đơn hàng đã hoàn tất",
    orderId: "2510276E96561R",
    description: "Đơn hàng 2510276E96561R đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 01-12-2025 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
    time: "12:18 01-11-2025",
  },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(true);

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView>
        {/* Alert Banner */}
        {showAlert && (
          <NotificationAlertBanner onClose={() => setShowAlert(false)} />
        )}

        {/* Notification Categories */}
        <View className="bg-white mt-2">
          {notificationCategories.map((item, index) => (
            <NotificationCategoryCard
              key={item.id}
              icon={item.icon}
              iconBg={item.iconBg}
              title={item.title}
              description={item.description}
              badge={item.badge}
              showBorder={index < notificationCategories.length - 1}
            />
          ))}
        </View>

        {/* Order Updates Section */}
        <View className="mt-2 bg-white">
          {orderNotifications.length === 0 ? (
            <EmptyOrderNotifications onShopNow={() => router.push("/")} />
          ) : (
            <>
              <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
                <Text className="text-lg font-medium text-gray-700">Cập nhật đơn hàng</Text>
                <TouchableOpacity>
                  <Text className="text-md text-red-500">Đọc tất cả</Text>
                </TouchableOpacity>
              </View>
              {orderNotifications.map((order) => (
                <OrderNotificationCard
                  key={order.id}
                  image={order.image}
                  title={order.title}
                  orderId={order.orderId}
                  description={order.description}
                  time={order.time}
                />
              ))}
            </>
          )}
        </View>

        <RecommendationSection />
      </ScrollView>
    </View>
  );
}

