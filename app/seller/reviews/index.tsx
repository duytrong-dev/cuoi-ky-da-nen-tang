import { EmptyReviewState } from '@/components/seller/empty-review-state';
import { Review, ReviewCard } from '@/components/seller/review-card';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

const MOCK_REVIEWS: Review[] = [
    {
        id: '1',
        customerName: 'Nguyễn Văn A',
        rating: 5,
        comment: 'Sản phẩm rất tốt, giao hàng nhanh!',
        productName: 'Áo thun nam basic',
        date: '02/12/2025',
        replied: false,
    },
    {
        id: '2',
        customerName: 'Trần Thị B',
        rating: 4,
        comment: 'Chất lượng ổn, đóng gói cẩn thận',
        productName: 'Quần jean nữ',
        date: '01/12/2025',
        replied: true,
    },
];

export default function ReviewsManagement() {
    const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyText, setReplyText] = useState('');

    const handleReply = (reviewId: string) => {
        if (!replyText.trim()) return;

        setReviews(reviews.map(review =>
            review.id === reviewId ? { ...review, replied: true } : review
        ));
        setReplyingTo(null);
        setReplyText('');
    };

    const handleCancelReply = () => {
        setReplyingTo(null);
        setReplyText('');
    };

    return (
        <View className="flex-1 bg-gray-50">
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <ReviewCard
                        review={item}
                        isReplying={replyingTo === item.id}
                        replyText={replyText}
                        onReplyTextChange={setReplyText}
                        onStartReply={() => setReplyingTo(item.id)}
                        onCancelReply={handleCancelReply}
                        onSubmitReply={() => handleReply(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={<EmptyReviewState />}
            />
        </View>
    );
}
