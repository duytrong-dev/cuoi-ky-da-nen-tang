import {
    GetBusinessTypesRes,
    GetBusinessTypesResType,
} from "@/schemaValidations/businessTypes.schema";
import http from "@/utils/http";

// ==================== API LOẠI HÌNH KINH DOANH ====================

// Lấy danh sách loại hình kinh doanh
export const getBusinessTypesApiRequest = async (): Promise<GetBusinessTypesResType> => {
    const response = await http.get<GetBusinessTypesResType>("/business-types");
    const validatedResponse = GetBusinessTypesRes.parse(response);
    return validatedResponse;
};
