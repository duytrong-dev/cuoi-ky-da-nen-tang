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
                  badgeColor={Colors[colorScheme ?? 'light'].primary}
                  badgeTextColor="black"
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
        name="mall"
        options={{
          title: 'Mall',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={22} name={focused ? "bag-handle" : "bag-handle-outline"} color={color} />
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
            color: Colors[colorScheme ?? 'light'].secondary,
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
              <View style={{ marginRight: 16 }}>
                <CartIconWithBadge
                  count={5}
                  onPress={() => router.push('/cart')}
                  color="black"
                  badgeColor={Colors[colorScheme ?? 'light'].primary}
                  badgeTextColor="black"
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

