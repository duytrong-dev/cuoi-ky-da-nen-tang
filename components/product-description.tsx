import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ProductDescriptionProps {
    description?: string;
}

const DEFAULT_DESCRIPTION = `Mô hình Bandai đấu sĩ LBX tổng hợp

* ĐẶC ĐIỂM SẢN PHẨM

- Xuất xứ: Nhật Bản. Sản phẩm của hãng Bandai Nhật Bản.
- Chất liệu: nhựa cao cấp, an toàn cho bé
- Độ tuổi phù hợp: Trẻ từ 8 tuổi trở lên
- Mô hình LBX hoàn thiện cao khoảng 12 cm.
- Có đủ chi tiết và cử động tốt
- Lắp theo kiểu bấm khớp ko dùng keo dán.
- Có thể kết hợp với các mẫu mô hình khác
- Cách lắp ráp sẽ được chỉ dẫn chi tiết qua mô hình:
- Tất cả các runner (bảng chứa chi tiết mô hình) đều được chứa trong bao nilon được đóng kín.
- Bảo hành: Sản phẩm không bảo hành
- Bộ lắp ráp LBX được làm từ chất liệu nhựa an toàn theo công nghệ Nhật Bản. Sản phẩm dành cho trẻ từ 8 tuổi trở lên, được mô phỏng theo hình dạng chính xác của nhân vật LBX trong trò chơi điện tử và trong chuỗi phim hoạt hình LBX.

* ĐẶC ĐIỂM SẢN PHẨM

- Lắp ráp các bộ phận với nhau một cách dễ dàng nhờ các khấc và điểm nối chính xác, không cần dùng keo dính.
- Công nghệ "da sắc màu" đặc biệt trên cùng một mô hình giúp cho mô hình LBX của bạn sống động như thật.
- Mô hình được lắp ghép từ những khớp nối giúp cho việc xoay chuyển linh hoạt, dễ dàng tạo các tư thế đẹp mắt.
- Biệt đồ chơi sẽ giúp bạn rèn luyện sự kiên nhẫn, tỉ mỉ và khéo léo của mình nữa.`;

export default function ProductDescription({ description = DEFAULT_DESCRIPTION }: ProductDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View className="px-4 py-3 bg-white border-t-2 border-gray-100">
            <Text className="text-md font-medium text-gray-800 mb-3">Mô tả sản phẩm</Text>

            <Text
                className="text-sm text-gray-700 leading-5 mb-3"
                numberOfLines={isExpanded ? undefined : 3}
            >
                {description}
            </Text>

            <View className="items-center mt-4 mb-2">
                <TouchableOpacity
                    className="flex-row items-center border-t border-gray-200 pt-3 w-full justify-center"
                    onPress={() => setIsExpanded(!isExpanded)}
                >
                    <Text className="text-md text-secondary mr-1">
                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                    </Text>
                    <Ionicons
                        name={isExpanded ? "chevron-up" : "chevron-down"}
                        size={16}
                        color={Colors.light.secondary}
                    />
                </TouchableOpacity>
            </View>

            {/* Share Question */}
            <View className="bg-gray-50 p-3 rounded-lg flex-row items-center justify-between mt-2">
                <Text className="text-md text-gray-700 flex-1">Bạn có muốn chia sẻ sản phẩm này?</Text>
                <TouchableOpacity className="bg-white px-4 py-2 rounded border border-gray-200">
                    <Text className="text-md text-gray-800">Chia sẻ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
