import ShopSection from "@/components/shop-section";
import StickyFooter from "@/components/sticky-footer";
import { SelectedMap, Shop, sampleData } from "@/types/cart";
import { formatVND } from "@/utils/formatVND";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function CartScreen() {
  const router = useRouter();
  const [cart, setCart] = React.useState<Shop[]>(sampleData);
  const [selected, setSelected] = React.useState<SelectedMap>({});

  // Derived state
  const allProductIds = React.useMemo(
    () => cart.flatMap((s) => s.products.map((p) => p.id)),
    [cart]
  );

  const allSelected = React.useMemo(
    () => allProductIds.length > 0 && allProductIds.every((id) => selected[id]),
    [allProductIds, selected]
  );

  const total = React.useMemo(() => {
    let t = 0;
    cart.forEach((s) =>
      s.products.forEach((p) => {
        if (selected[p.id]) t += p.price * p.qty;
      })
    );
    return t;
  }, [cart, selected]);

  const totalItems = React.useMemo(() => {
    let count = 0;
    cart.forEach((s) =>
      s.products.forEach((p) => {
        if (selected[p.id]) count += p.qty;
      })
    );
    return count;
  }, [cart, selected]);


  // Handlers
  const toggleSelectProduct = (id: string) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));

  const toggleSelectAll = () => {
    if (allSelected) setSelected({});
    else {
      const newSel: SelectedMap = {};
      allProductIds.forEach(id => (newSel[id] = true));
      setSelected(newSel);
    }
  };

  const changeQty = (productId: string, delta: number) => {
    setCart(prev =>
      prev.map(s => ({
        ...s,
        products: s.products.map(p =>
          p.id === productId ? { ...p, qty: Math.max(1, Math.min(p.stock, p.qty + delta)) } : p
        ),
      }))
    );
  };

  const removeProduct = (productId: string) => {
    setCart(prev =>
      prev.map(s => ({ ...s, products: s.products.filter(p => p.id !== productId) }))
    );
    setSelected(prev => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  return (
    <View className="flex-1 bg-background">
      <Stack.Screen options={{
        headerTitle: () => (
          <View className="flex-row items-center">
            <Text className="text-lg font-medium text-black">Giỏ hàng</Text>
            <Text className="text-lg text-gray-500 ml-1">({allProductIds.length})</Text>
          </View>
        )
      }} />

      <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
        {cart.map(shop => (
          <ShopSection
            key={shop.shopId}
            shop={shop}
            selected={selected}
            onToggleProduct={toggleSelectProduct}
            onChangeQty={changeQty}
            onRemove={removeProduct}
          />
        ))}

        {/* You might also like section */}
        <View className="mt-4 px-2">
          <View className="flex-row items-center justify-center mb-4">
            <View className="h-[1px] bg-gray-300 flex-1" />
            <Text className="mx-4 text-gray-500 font-medium">Có thể bạn cũng thích</Text>
            <View className="h-[1px] bg-gray-300 flex-1" />
          </View>

          <View className="flex-row flex-wrap justify-between">
            {/* Mock items for "You might also like" */}
            {[1, 2, 3, 4].map((i) => (
              <View key={i} className="w-[49%] bg-white mb-2 rounded-sm overflow-hidden">
                <Image source={{ uri: 'https://via.placeholder.com/150' }} className="w-full h-40" />
                <View className="p-2">
                  <Text numberOfLines={2} className="text-xs mb-1">Sản phẩm gợi ý {i} - Chất lượng cao, giá tốt</Text>
                  <View className="flex-row items-center">
                    <Text className="text-primary text-sm">₫{formatVND(100000 * i)}</Text>
                    <Text className="text-[10px] text-gray-500 ml-2">Đã bán {i * 10}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <StickyFooter
        allSelected={allSelected}
        onToggleAll={toggleSelectAll}
        total={total}
        totalItems={totalItems}
        onCheckout={() => alert("Checkout: " + formatVND(total))}
      />
    </View>
  );
}
