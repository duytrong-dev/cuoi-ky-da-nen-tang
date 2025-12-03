import { BannersSchemaRes, BannersSchemaResType } from "@/schemaValidations/banner.schema";
import http from "@/utils/http";

// Lấy danh sách banner
export const getBannersApiRequest = async (): Promise<BannersSchemaResType> => {
    const response = await http.get<BannersSchemaResType>("/banners");
    const validatedResponse = BannersSchemaRes.parse(response);
    return validatedResponse;
};