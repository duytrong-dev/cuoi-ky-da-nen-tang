import OrdersSection from "@/components/orders-section";
import OtherUtilitiesSection from "@/components/other-utilities-section";
import ProfileHeader from "@/components/profile-header";
import RecommendationSection from "@/components/recommendation-section";
import SupportSection from "@/components/support-section";
import { useAuth } from "@/queries/useAuth";
import React from "react";
import {
  ScrollView,
  View
} from "react-native";

export default function ProfileScreen() {
  const { isAuthenticated } = useAuth();

  return (
    <View className="flex-1 bg-transparent">
      {/* Fixed Header with User Info */}
      <ProfileHeader
        isLoggedIn={true}
      />

      {/* Scrollable Content */}
      <ScrollView className="flex-1">

        {/* Orders Section */}
        <OrdersSection />

        {/* Other Utilities */}
        <OtherUtilitiesSection />

        {/* Support Section */}
        <SupportSection />

        {/* Recommendations */}
        <RecommendationSection />
      </ScrollView>
    </View >
  );
}
