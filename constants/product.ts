export type ProductItemType = {
    id: string;
    image: string;
    title: string;
    price: number;
    rating: number;
    sold: number;
    location: string;
    deliveryTime: string;
    isMall?: boolean;
    isPreferred?: boolean;
    hasVoucherXtra?: boolean;
    isTrending?: boolean;
    discount?: string;
    originalPrice?: number;
};
