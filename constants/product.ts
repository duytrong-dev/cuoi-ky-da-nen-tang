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

export const products: ProductItemType[] = [
    {
        id: '1',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "Áo hoodie nam unisex dày dặn form rộng chất nỉ bông có mũ trùm đầu Alex cool HD01",
        price: 86333,
        rating: 5.0,
        sold: 10000,
        location: "Hà Nội",
        deliveryTime: "2 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
        discount: "-19%",
        originalPrice: 149000,
    },
    {
        id: '2',
        image: "https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-mbrnqd7r8r56ff.webp",
        title: "Bộ nhớ trong (RAM) DDR5 Bus 4800/5600 16GB 32GB",
        price: 1495120,
        rating: 5.0,
        sold: 18,
        location: "Quảng Ninh",
        deliveryTime: "2 - 4 ngày",
        hasVoucherXtra: true,
        discount: "-19%",
        originalPrice: 1743900,
    },
    {
        id: '3',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m33f1mqavijfd6.webp",
        title: "[Sẵn hàng] Kit bàn phím cơ Lucky65 v3 - Nhôm CNC cao cấp",
        price: 1300500,
        rating: 5.0,
        sold: 280,
        location: "Hà Nội",
        deliveryTime: "1 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
        isTrending: true,
        discount: "-19%",
        originalPrice: 1550500,
    },
    {
        id: '4',
        image: "https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-mbrnqd7r34vebe.webp",
        title: "[Bảo Hành 3 Năm] RAM LAPTOP DDR5 Samsung 8GB 16GB Bus 4800 5600",
        price: 1799000,
        rating: 4.9,
        sold: 451,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
        discount: "-19%",
        originalPrice: 2158000,
    },
    {
        id: '5',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-meyhktetfgu8c4.webp",
        title: "Quần Âu Dài Nam LC, Form Slim, cạp chun ấn, vải ấu",
        price: 322960,
        rating: 4.8,
        sold: 128,
        location: "Hà Nội",
        deliveryTime: "3 - 5 ngày",
        discount: "-19%",
        originalPrice: 390000,
    },
    {
        id: '6',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz7j1caiwpep17.webp",
        title: "Ram Laptop Ddr5 16gb Bus 5600, 4800MHz Chính hãng Samsung SK Hynix Crucial",
        price: 2112000,
        rating: 5.0,
        sold: 36,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        hasVoucherXtra: true,
        discount: "-19%",
        originalPrice: 2158000,
    },
    {
        id: '7',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mh7cbakyg1zi75.webp",
        title: "Máy tính All In One G33 I7-8650U Ram 16GB SSD 256GB Màn 24 inch",
        price: 7310000,
        rating: 4.9,
        sold: 89,
        location: "Hà Nội",
        deliveryTime: "2 - 4 ngày",
        isMall: true,
        isTrending: true,
        discount: "-19%",
        originalPrice: 2158000,
    },
    {
        id: '8',
        image: "https://down-vn.img.susercontent.com/file/0982de1d517eed28495a9bbcaced5881.webp",
        title: "iPhone 14 Pro Max 128GB 256GB 512GB Chính hãng VN/A",
        price: 25990000,
        rating: 5.0,
        sold: 234,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "1 - 2 ngày",
        isMall: true,
        isPreferred: true,
        isTrending: true,
        discount: "-19%",
        originalPrice: 2158000,
    },
];