import { AddProductButton } from '@/components/seller/add-product-button';
import { EmptyProductState } from '@/components/seller/empty-product-state';
import { Product, ProductCard } from '@/components/seller/product-card';
import { ProductSearchBar } from '@/components/seller/product-search-bar';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Áo thun nam basic',
        price: 199000,
        stock: 50,
        image: 'https://via.placeholder.com/100',
        category: 'Thời trang',
        status: 'active'
    },
    {
        id: '2',
        name: 'Quần jean nữ',
        price: 399000,
        stock: 30,
        image: 'https://via.placeholder.com/100',
        category: 'Thời trang',
        status: 'active'
    },
    {
        id: '3',
        name: 'Giày thể thao',
        price: 599000,
        stock: 0,
        image: 'https://via.placeholder.com/100',
        category: 'Giày dép',
        status: 'inactive'
    },
];

type FilterType = 'all' | 'active' | 'inactive';

export default function ProductsManagement() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all' || product.status === filter;
        return matchesSearch && matchesFilter;
    });

    const handleEditProduct = (product: Product) => {
        // TODO: Navigate to edit screen
        console.log('Edit product:', product.id);
    };

    const handleDeleteProduct = (product: Product) => {
        // TODO: Show confirmation dialog and delete
        console.log('Delete product:', product.id);
        setProducts(products.filter(p => p.id !== product.id));
    };

    return (
        <View className="flex-1 bg-gray-50">
            <ProductSearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filter={filter}
                onFilterChange={setFilter}
            />

            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onEdit={handleEditProduct}
                        onDelete={handleDeleteProduct}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={<EmptyProductState />}
            />

            <AddProductButton onPress={() => router.push('/seller/products/add')} />
        </View>
    );
}
