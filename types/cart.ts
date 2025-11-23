export type Product = {
  id: string;
  title: string;
  variant: string;
  price: number;
  qty: number;
  stock: number;
  image: string;
  variants: string[];
};

export type Shop = {
  shopId: string;
  shopName: string;
  freeShipping: boolean;
  products: Product[];
};

export type SelectedMap = {
  [productId: string]: boolean;
};

export const sampleData: Shop[] = [
  {
    shopId: "shop1",
    shopName: "TrungSky Store",
    freeShipping: true,
    products: [
      {
        id: "p1",
        title: "RAM DDR5 8Gb 16Gb BUS 5600MHz",
        variant: "SK Hynix 8GB 5600MHz",
        price: 749000,
        qty: 1,
        stock: 3,
        image: "https://via.placeholder.com/120x80",
        variants: ["SK Hynix 8GB 5600MHz", "SK Hynix 16GB 5600MHz"],
      },
    ],
  },
  {
    shopId: "shop2",
    shopName: "Linh Kiện Laptop PC SG",
    freeShipping: false,
    products: [
      {
        id: "p2",
        title: "Ram laptop DDR5 Skhynix 8gb /16GB Bus 5600",
        variant: "Ram 16gb bus 5600",
        price: 2500000,
        qty: 1,
        stock: 6,
        image: "https://via.placeholder.com/120x80",
        variants: ["Ram 16gb bus 5600", "Ram 16gb bus 4800"],
      },
      {
        id: "p3",
        title: "Ram laptop DDR5 Skhynix 8gb /16GB Bus 4800",
        variant: "Ram 16gb bus 4800",
        price: 2500000,
        qty: 1,
        stock: 4,
        image: "https://via.placeholder.com/120x80",
        variants: ["Ram 16gb bus 4800", "Ram 8gb bus 4800"],
      },
    ],
  },
];