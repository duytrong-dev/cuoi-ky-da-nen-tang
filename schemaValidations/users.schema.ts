import { RoleValues, StatusValues } from '@/constants/type';
import z from 'zod';

// ==================== SCHEMA ĐỊA CHỈ NGƯỜI DÙNG ====================

// Schema địa chỉ
export const AddressSchema = z.object({
    id: z.number(),
    user_id: z.number(),
    receiver_name: z.string().min(2).max(255),
    receiver_phone: z.string().min(10).max(20),
    address: z.string().min(5),
    ward: z.string().max(100),
    district: z.string().max(100),
    province: z.string().max(100),
    is_default: z.boolean().default(false),
    created_at: z.string(),
    updated_at: z.string(),
});
export type AddressType = z.TypeOf<typeof AddressSchema>;

// Schema phản hồi lấy danh sách địa chỉ
export const GetAddressesRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(AddressSchema),
});
export type GetAddressesResType = z.TypeOf<typeof GetAddressesRes>;

// Schema tạo địa chỉ
export const CreateAddressBody = z.object({
    receiver_name: z.string().min(2, { message: "Tên người nhận phải có ít nhất 2 ký tự" }).max(255),
    receiver_phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }).max(20),
    address: z.string().min(5, { message: "Địa chỉ phải có ít nhất 5 ký tự" }),
    ward: z.string().max(100),
    district: z.string().max(100),
    province: z.string().max(100),
    is_default: z.boolean().optional().default(false),
});
export type CreateAddressBodyType = z.TypeOf<typeof CreateAddressBody>;

// Schema phản hồi tạo địa chỉ
export const CreateAddressRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: AddressSchema,
});
export type CreateAddressResType = z.TypeOf<typeof CreateAddressRes>;

// Schema cập nhật địa chỉ
export const UpdateAddressBody = CreateAddressBody.partial();
export type UpdateAddressBodyType = z.TypeOf<typeof UpdateAddressBody>;

// Schema phản hồi cập nhật địa chỉ
export const UpdateAddressRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: AddressSchema,
});
export type UpdateAddressResType = z.TypeOf<typeof UpdateAddressRes>;

// Schema phản hồi xóa địa chỉ
export const DeleteAddressRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type DeleteAddressResType = z.TypeOf<typeof DeleteAddressRes>;

// ==================== SCHEMA HỒ SƠ NGƯỜI DÙNG ====================

// Schema cập nhật hồ sơ
export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.email(),
    phone: z.string().nullable(),
    avatar: z.url().nullable(),
    address: z.record(z.string(), z.string()).nullable(),
    role: z.enum(RoleValues),
    status: z.enum(StatusValues),
    email_verified_at: z.string().nullable().optional(),
    created_at: z.string(),
    updated_at: z.string(),
});
export type UserType = z.TypeOf<typeof UserSchema>;

// Schema cập nhật hồ sơ
export const UpdateProfileBody = z.object({
    name: z.string().min(2).max(100).optional(),
    phone: z.string().min(10).max(15).optional(),
    avatar: z.string().url().optional(),
});
export type UpdateProfileBodyType = z.TypeOf<typeof UpdateProfileBody>;

// Schema phản hồi cập nhật hồ sơ
export const UpdateProfileRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: UserSchema,
});
export type UpdateProfileResType = z.TypeOf<typeof UpdateProfileRes>;

// Schema đổi mật khẩu
export const ChangePasswordBody = z.object({
    current_password: z.string().min(8, { message: "Mật khẩu hiện tại phải có ít nhất 8 ký tự" }),
    new_password: z.string().min(8, { message: "Mật khẩu mới phải có ít nhất 8 ký tự" }),
    new_password_confirmation: z.string().min(8, { message: "Xác nhận mật khẩu phải có ít nhất 8 ký tự" }),
}).refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["new_password_confirmation"],
});
export type ChangePasswordBodyType = z.TypeOf<typeof ChangePasswordBody>;

// Schema phản hồi đổi mật khẩu
export const ChangePasswordRes = z.object({
    success: z.boolean(),
    message: z.string(),
});
export type ChangePasswordResType = z.TypeOf<typeof ChangePasswordRes>;

// End of file
