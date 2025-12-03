# Store Documentation

Tài liệu hướng dẫn sử dụng các store trong ứng dụng.

## 📦 Danh sách Store

### 1. Auth Store (`authStore.ts`)
Quản lý trạng thái xác thực người dùng.

### 2. Cart Store (`cartStore.ts`)
Quản lý giỏ hàng local với AsyncStorage.

### 3. Search History Store (`searchHistoryStore.ts`)
Quản lý lịch sử tìm kiếm với AsyncStorage.

---

## 🛒 Cart Store

### Import
```typescript
import { useCartStore } from '@/store';
// hoặc
import { useCartStore } from '@/store/cartStore';
```

### Sử dụng trong Component

```typescript
function CartScreen() {
  const { items, addItem, removeItem, getTotalPrice, getTotalItems } = useCartStore();

  // Thêm sản phẩm vào giỏ
  const handleAddToCart = () => {
    addItem({
      variant_id: 1,
      product_id: 100,
      product_name: 'iPhone 15 Pro',
      product_image: 'https://...',
      variant_attributes: { color: 'Titan Tự Nhiên', storage: '256GB' },
      price: 29990000,
      quantity: 1,
      stock: 50,
      shop_id: 5,
      shop_name: 'Apple Store',
    });
  };

  return (
    <View>
      <Text>Tổng sản phẩm: {getTotalItems()}</Text>
      <Text>Tổng tiền: {getTotalPrice().toLocaleString('vi-VN')}đ</Text>
    </View>
  );
}
```

### API

#### State
- `items: CartItem[]` - Danh sách sản phẩm trong giỏ

#### Methods

**Thêm sản phẩm**
```typescript
addItem(item: Omit<CartItem, 'id' | 'selected'>): void
```

**Cập nhật số lượng**
```typescript
updateQuantity(id: string, quantity: number): void
```

**Xóa sản phẩm**
```typescript
removeItem(id: string): void
removeItems(ids: string[]): void
```

**Chọn sản phẩm**
```typescript
toggleSelect(id: string): void
toggleSelectAll(): void
```

**Xóa giỏ hàng**
```typescript
clearCart(): void
clearSelected(): void
```

**Getter methods**
```typescript
getTotalItems(): number
getTotalPrice(): number
getSelectedItems(): CartItem[]
hasItem(variant_id: number): boolean
getItemByVariantId(variant_id: number): CartItem | undefined
```

### Ví dụ đầy đủ

```typescript
function ProductDetail({ product }: { product: ProductType }) {
  const { addItem, hasItem, getItemByVariantId } = useCartStore();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem({
      variant_id: selectedVariant.id,
      product_id: product.id,
      product_name: product.name,
      product_image: product.images?.[0],
      variant_attributes: selectedVariant.attributes || {},
      price: selectedVariant.price,
      quantity: 1,
      stock: selectedVariant.stock,
      shop_id: product.shop_id || 0,
      shop_name: product.shop_name,
    });

    showSuccessToast('Đã thêm vào giỏ hàng!');
  };

  const isInCart = selectedVariant ? hasItem(selectedVariant.id) : false;

  return (
    <Button onPress={handleAddToCart}>
      {isInCart ? 'Đã có trong giỏ' : 'Thêm vào giỏ'}
    </Button>
  );
}
```

---

## 🔍 Search History Store

### Import
```typescript
import { useSearchHistoryStore } from '@/store';
```

### Sử dụng

```typescript
function SearchScreen() {
  const { history, addSearch, removeSearch, clearHistory, getRecentSearches } = 
    useSearchHistoryStore();

  const handleSearch = (query: string) => {
    addSearch(query);
    // Thực hiện tìm kiếm...
  };

  const recentSearches = getRecentSearches(5); // Lấy 5 tìm kiếm gần nhất

  return (
    <View>
      {recentSearches.map((item) => (
        <TouchableOpacity 
          key={item.id}
          onPress={() => handleSearch(item.query)}
        >
          <Text>{item.query}</Text>
          <TouchableOpacity onPress={() => removeSearch(item.id)}>
            <Text>Xóa</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      
      <Button onPress={clearHistory}>Xóa tất cả lịch sử</Button>
    </View>
  );
}
```

### API

#### State
- `history: SearchHistoryItem[]` - Danh sách lịch sử tìm kiếm

#### Methods

**Thêm tìm kiếm**
```typescript
addSearch(query: string): void
```
- Tự động loại bỏ khoảng trắng thừa
- Nếu từ khóa đã tồn tại, sẽ di chuyển lên đầu
- Giới hạn tối đa 50 item

**Xóa tìm kiếm**
```typescript
removeSearch(id: string): void
```

**Xóa tất cả**
```typescript
clearHistory(): void
```

**Lấy tìm kiếm gần đây**
```typescript
getRecentSearches(limit?: number): SearchHistoryItem[]
```

---

## 🔐 Auth Store

### Import
```typescript
import { useAuthStore } from '@/store';
```

### Sử dụng

```typescript
function ProfileScreen() {
  const { user, isAuthenticated, setUser, clearUser, updateUser } = useAuthStore();

  if (!isAuthenticated) {
    return <LoginPrompt />;
  }

  return (
    <View>
      <Text>Xin chào, {user?.name}</Text>
    </View>
  );
}
```

### API

#### State
- `user: UserType | null` - Thông tin người dùng
- `isAuthenticated: boolean` - Trạng thái đăng nhập

#### Methods

**Đặt thông tin user**
```typescript
setUser(user: UserType): void
```

**Xóa thông tin user (đăng xuất)**
```typescript
clearUser(): void
```

**Cập nhật thông tin user**
```typescript
updateUser(userData: Partial<UserType>): void
```

---

## 💾 Persistence

Tất cả các store đều sử dụng **AsyncStorage** để lưu trữ dữ liệu local:

- **Auth Store**: `auth-storage`
- **Cart Store**: `cart-storage`
- **Search History Store**: `search-history-storage`

Dữ liệu sẽ được tự động lưu và khôi phục khi app khởi động lại.

---

## 🎯 Best Practices

### 1. Sử dụng Selectors
```typescript
// ❌ Không tốt - re-render khi bất kỳ state nào thay đổi
const cartStore = useCartStore();

// ✅ Tốt - chỉ re-render khi items thay đổi
const items = useCartStore((state) => state.items);
const addItem = useCartStore((state) => state.addItem);
```

### 2. Kết hợp với React Query
```typescript
function ProductList() {
  const { data: products } = useProducts();
  const addItem = useCartStore((state) => state.addItem);

  // Kết hợp dữ liệu từ server với local store
}
```

### 3. Xử lý lỗi
```typescript
const handleAddToCart = () => {
  try {
    addItem(cartItem);
    showSuccessToast('Đã thêm vào giỏ hàng!');
  } catch (error) {
    showErrorToast('Không thể thêm vào giỏ hàng');
  }
};
```

---

## 🔄 Sync với Server

Giỏ hàng local có thể được đồng bộ với server:

```typescript
// Đồng bộ giỏ hàng local lên server
const syncCartToServer = async () => {
  const localItems = useCartStore.getState().items;
  
  for (const item of localItems) {
    await addToCartAPI({
      variant_id: item.variant_id,
      quantity: item.quantity,
    });
  }
  
  // Xóa giỏ hàng local sau khi sync
  useCartStore.getState().clearCart();
};
```
