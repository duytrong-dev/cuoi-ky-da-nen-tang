import { AddPromotionForm } from '@/components/seller/add-promotion-form';
import { Promotion, PromotionCard } from '@/components/seller/promotion-card';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';

const MOCK_PROMOTIONS: Promotion[] = [
    {
        id: '1',
        code: 'SALE50',
        discount: 50000,
        type: 'fixed',
        minOrder: 200000,
        usageLimit: 100,
        used: 45,
        startDate: '01/12/2025',
        endDate: '31/12/2025',
        active: true,
    },
    {
        id: '2',
        code: 'DISCOUNT20',
        discount: 20,
        type: 'percentage',
        minOrder: 100000,
        maxDiscount: 100000,
        usageLimit: 50,
        used: 12,
        startDate: '01/12/2025',
        endDate: '15/12/2025',
        active: true,
    },
];

export default function PromotionsManagement() {
    const [promotions, setPromotions] = useState<Promotion[]>(MOCK_PROMOTIONS);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newCode, setNewCode] = useState('');
    const [newDiscount, setNewDiscount] = useState('');

    const togglePromotionStatus = (id: string) => {
        setPromotions(promotions.map(promo =>
            promo.id === id ? { ...promo, active: !promo.active } : promo
        ));
    };

    const deletePromotion = (id: string) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc muốn xóa mã khuyến mãi này?',
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'Xóa',
                    style: 'destructive',
                    onPress: () => setPromotions(promotions.filter(p => p.id !== id)),
                },
            ]
        );
    };

    const handleCancelAdd = () => {
        setShowAddForm(false);
        setNewCode('');
        setNewDiscount('');
    };

    const handleSubmitAdd = () => {
        Alert.alert('Thành công', 'Đã tạo mã khuyến mãi mới');
        setShowAddForm(false);
        setNewCode('');
        setNewDiscount('');
    };

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={promotions}
                renderItem={({ item }) => (
                    <PromotionCard
                        promotion={item}
                        onToggleStatus={togglePromotionStatus}
                        onDelete={deletePromotion}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListHeaderComponent={
                    showAddForm ? (
                        <AddPromotionForm
                            code={newCode}
                            discount={newDiscount}
                            onCodeChange={setNewCode}
                            onDiscountChange={setNewDiscount}
                            onCancel={handleCancelAdd}
                            onSubmit={handleSubmitAdd}
                        />
                    ) : null
                }
            />

            {!showAddForm && (
                <TouchableOpacity
                    onPress={() => setShowAddForm(true)}
                    className="absolute bottom-6 right-6 bg-secondary w-14 h-14 rounded-full items-center justify-center shadow-lg"
                    style={{ elevation: 5 }}
                >
                    <Ionicons name="add" size={28} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
}
