import CartIconWithBadge from '@/components/cart-icon-with-badge';
import { HapticTab } from '@/components/haptic-tab';
import HeaderIconButton from '@/components/header-icon-button';
import TrendingHeaderTitle from '@/components/trending-header-title';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].secondary,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopColor: '#e0e0e0',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? "home" : "home-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Xu hướng',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors[colorScheme ?? 'light'].secondary,
          },
          headerTitle: () => <TrendingHeaderTitle colorScheme={colorScheme ?? 'light'} />,
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
              <HeaderIconButton
                iconName="search-outline"
                onPress={() => router.push('/search')}
                color="black"
                size={26}
              />
              <View style={{ marginLeft: 16 }}>
                <CartIconWithBadge
                  count={5}
                  onPress={() => router.push('/cart')}
                  color="black"
                  badgeColor="red"
                  badgeTextColor="white"
                  colorScheme={colorScheme ?? 'light'}
                />
              </View>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? "flame" : "flame-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: '',  // Ẩn title
          tabBarLabel: () => null,  // Ẩn label hoàn toàn
          tabBarIcon: ({ focused }) => (
            <View style={{
              width: 55,
              height: 55,
              borderRadius: 30,
              backgroundColor: focused ? Colors[colorScheme ?? 'light'].secondary : Colors[colorScheme ?? 'light'].secondary,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,  // Nâng lên khỏi tab bar
              borderWidth: 2,
              borderColor: "white",
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}>
              <Ionicons size={28} name="heart-outline" color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Thông báo',
          headerShown: true,
          headerTitle: 'Thông báo',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '500',
            color: "black",
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
              <View style={{ marginRight: 16 }}>
                <CartIconWithBadge
                  count={5}
                  onPress={() => router.push('/cart')}
                  color="black"
                  badgeColor="red"
                  badgeTextColor="white"
                  colorScheme={colorScheme ?? 'light'}
                />
              </View>
              <HeaderIconButton
                iconName="chatbubble-ellipses-outline"
                onPress={() => router.push('/chat')}
                color="black"
                size={26}
              />
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? "notifications" : "notifications-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Tôi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? "person" : "person-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

