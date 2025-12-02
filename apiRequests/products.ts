import { RecommendedProductsSchemaRes, RecommendedProductsSchemaResType } from "@/schemaValidations/products.schema";
import http from "@/utils/http";

// Get recommended products
export const getRecommendedProductsApiRequest = async (): Promise<RecommendedProductsSchemaResType> => {
    const response = await http.get<RecommendedProductsSchemaResType>("/banners");
    const validatedResponse = RecommendedProductsSchemaRes.parse(response);
    return validatedResponse;
};