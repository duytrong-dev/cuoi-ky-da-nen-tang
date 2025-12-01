import BannerSlider from "@/components/banner-slider";
import DeliveryAndRewards from "@/components/delivery-and-rewards";
import HomeHeader from "@/components/home-header";
import LiveAndVideoSection from "@/components/live-and-video-section";
import ProductsGrid from "@/components/products-grid";
import QuickLinks from "@/components/quick-links";
import React from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {

  return (
    <View className="flex-1 bg-transparent">
      {/* Header */}
      <HomeHeader />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Delivery & Rewards */}
        <DeliveryAndRewards />

        {/* Banner Slider */}
        <BannerSlider />

        {/* Quick Links */}
        <QuickLinks />

        {/* Live & Video Section */}
        <LiveAndVideoSection />

        {/* Featured Grid */}
        <ProductsGrid />
      </ScrollView>
    </View>
  );
}
