import FinancialServicesSection from "@/components/financial-services-section";
import MyUtilitiesSection from "@/components/my-utilities-section";
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
        isLoggedIn={isAuthenticated}
      />

      {/* Scrollable Content */}
      <ScrollView className="flex-1">
        {/* Email Verification */}
        {/* <EmailVerificationCard /> */}

        {/* Orders Section */}
        <OrdersSection />

        {/* My Utilities */}
        <MyUtilitiesSection />

        {/* Financial Services */}
        <FinancialServicesSection />

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
