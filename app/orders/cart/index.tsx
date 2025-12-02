import RecommendationSection from "@/components/recommendation-section";
import ShopSection from "@/components/shop-section";
import ShopVoucherModal from "@/components/shop-voucher-modal";
import StickyFooter from "@/components/sticky-footer";
import VariantModal from "@/components/variant-modal";
import { Product, SelectedMap, Shop, sampleData } from "@/types/cart";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function CartScreen() {
  const router = useRouter();
  const [cart, setCart] = React.useState<Shop[]>(sampleData);
  const [selected, setSelected] = React.useState<SelectedMap>({});
  const [selectedProductForVariant, setSelectedProductForVariant] = React.useState<Product | null>(null);
  const [selectedShopForVoucher, setSelectedShopForVoucher] = React.useState<Shop | null>(null);

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

  const handleOpenVariant = (product: Product) => {
    setSelectedProductForVariant(product);
  };

  const handleConfirmVariant = (product: Product, newVariant: string, newQty: number) => {
    setCart(prev =>
      prev.map(s => ({
        ...s,
        products: s.products.map(p =>
          p.id === product.id ? { ...p, variant: newVariant, qty: newQty } : p
        ),
      }))
    );
    setSelectedProductForVariant(null);
  };

  return (
    <View className="flex-1 bg-background">
      <Stack.Screen options={{
        headerTitle: () => (
          <View className="flex-row items-center">
            <Text className="text-lg font-medium text-black">Giỏ hàng</Text>
            <Text className="text-lg text-gray-700 ml-1">({allProductIds.length})</Text>
          </View>
        )
      }} />

      <ScrollView contentContainerStyle={{ paddingBottom: 180 }} className="px-2">
        {cart.map(shop => (
          <ShopSection
            key={shop.shopId}
            shop={shop}
            selected={selected}
            onToggleProduct={toggleSelectProduct}
            onChangeQty={changeQty}
            onRemove={removeProduct}
            onOpenVariant={handleOpenVariant}
            onOpenVoucher={() => setSelectedShopForVoucher(shop)}
          />
        ))}

        <RecommendationSection />
      </ScrollView>

      <StickyFooter
        allSelected={allSelected}
        onToggleAll={toggleSelectAll}
        total={total}
        totalItems={totalItems}
        onCheckout={() => router.push("/orders/checkout")}
      />

      <VariantModal
        visible={!!selectedProductForVariant}
        product={selectedProductForVariant}
        currentVariant={selectedProductForVariant?.variant || ""}
        currentQty={selectedProductForVariant?.qty || 1}
        onClose={() => setSelectedProductForVariant(null)}
        onConfirm={handleConfirmVariant}
      />

      <ShopVoucherModal
        visible={!!selectedShopForVoucher}
        shopName={selectedShopForVoucher?.shopName || ""}
        onClose={() => setSelectedShopForVoucher(null)}
      />
    </View>
  );
}
