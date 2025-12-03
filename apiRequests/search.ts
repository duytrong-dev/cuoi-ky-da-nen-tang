import {
    SearchFiltersSchema,
    SearchFiltersType,
    SearchProductsRes,
    SearchProductsResType,
} from "@/schemaValidations/search.schema";
import http from "@/utils/http";

// ==================== TÌM KIẾM ====================

// Tìm kiếm sản phẩm
export const searchProductsApiRequest = async (filters: SearchFiltersType): Promise<SearchProductsResType> => {
    const validatedFilters = SearchFiltersSchema.parse(filters);
    const response = await http.get<SearchProductsResType>("/catalog/products/search", {
        params: validatedFilters,
    });
    const validatedResponse = SearchProductsRes.parse(response);
    return validatedResponse;
};
