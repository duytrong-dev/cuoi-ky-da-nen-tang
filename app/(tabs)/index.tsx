import BannerSlider from "@/components/banner-slider";
import FeaturedGrid from "@/components/featured-grid";
import HomeHeader from "@/components/home-header";
import LiveAndVideoSection from "@/components/live-and-video-section";
import QuickLinks from "@/components/quick-links";
import React from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <HomeHeader />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Banner Slider */}
        <BannerSlider />

        {/* Quick Links */}
        <QuickLinks />

        {/* Live & Video Section */}
        <LiveAndVideoSection />

        {/* Featured Grid */}
        <FeaturedGrid />
      </ScrollView>
    </View>
  );
}
