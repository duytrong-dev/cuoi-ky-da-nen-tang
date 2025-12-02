import { AddCategoryButton } from '@/components/seller/add-category-button';
import { AddCategoryForm } from '@/components/seller/add-category-form';
import { Category, CategoryCard } from '@/components/seller/category-card';
import { useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

const MOCK_CATEGORIES: Category[] = [
    { id: '1', name: 'Thời trang', productCount: 45, icon: 'shirt-outline' },
    { id: '2', name: 'Điện tử', productCount: 23, icon: 'phone-portrait-outline' },
    { id: '3', name: 'Giày dép', productCount: 18, icon: 'footsteps-outline' },
    { id: '4', name: 'Phụ kiện', productCount: 32, icon: 'watch-outline' },
];

export default function CategoriesManagement() {
    const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddCategory = () => {
        if (!newCategoryName.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập tên danh mục');
            return;
        }

        const newCategory: Category = {
            id: Date.now().toString(),
            name: newCategoryName,
            productCount: 0,
            icon: 'pricetag-outline',
        };

        setCategories([...categories, newCategory]);
        setNewCategoryName('');
        setShowAddForm(false);
        Alert.alert('Thành công', 'Đã thêm danh mục mới');
    };

    const handleEditCategory = (category: Category) => {
        // TODO: Navigate to edit screen or show edit modal
        console.log('Edit category:', category.id);
    };

    const handleDeleteCategory = (category: Category) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc muốn xóa danh mục này?',
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => {
                        setCategories(categories.filter(cat => cat.id !== category.id));
                    },
                },
            ]
        );
    };

    const handleCancelAdd = () => {
        setShowAddForm(false);
        setNewCategoryName('');
    };

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <CategoryCard
                        category={item}
                        onEdit={handleEditCategory}
                        onDelete={handleDeleteCategory}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListHeaderComponent={
                    showAddForm ? (
                        <AddCategoryForm
                            categoryName={newCategoryName}
                            onCategoryNameChange={setNewCategoryName}
                            onCancel={handleCancelAdd}
                            onSubmit={handleAddCategory}
                        />
                    ) : null
                }
            />

            {!showAddForm && (
                <AddCategoryButton onPress={() => setShowAddForm(true)} />
            )}
        </View>
    );
}
