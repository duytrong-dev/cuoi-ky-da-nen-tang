import { Role, RoleValues } from '@/constants/type'
import z from 'zod'
import { UserSchema } from './users.schema'


// register schema
export const RegisterBody = z.object({
    name: z.string({ message: "Vui lòng nhập họ và tên" })
        .min(2, { message: "Họ và tên phải có ít nhất 2 ký tự" })
        .max(100, { message: "Họ và tên không được quá 100 ký tự" }),
    email: z.email({ message: "Email không hợp lệ" }),
    password: z.string({ message: "Vui lòng nhập mật khẩu" })
        .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
        .max(100, { message: "Mật khẩu không được quá 100 ký tự" }),
    password_confirmation: z.string({ message: "Vui lòng xác nhận mật khẩu" })
        .min(6, { message: "Mật khẩu xác nhận phải có ít nhất 6 ký tự" })
        .max(100, { message: "Mật khẩu xác nhận không được quá 100 ký tự" }),
    role: z.enum(RoleValues).default(Role.BUYER),
}).strict().refine((data) => data.password === data.password_confirmation, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["password_confirmation"],
})
export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

// register response schema
export const RegisterRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        user: UserSchema,
        access_token: z.string(),
        refresh_token: z.string(),
        token_type: z.string(),
        expires_in: z.number()
    })
})
export type RegisterResType = z.TypeOf<typeof RegisterRes>

// login schema
export const LoginBody = z.object({
    email: z.email({ message: "Email không hợp lệ" }),
    password: z.string({ message: "Vui lòng nhập mật khẩu" })
        .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
        .max(100, { message: "Mật khẩu không được quá 100 ký tự" })
}).strict()
export type LoginBodyType = z.TypeOf<typeof LoginBody>

// login response schema
export const LoginRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        user: UserSchema,
        access_token: z.string(),
        refresh_token: z.string(),
        token_type: z.string(),
        expires_in: z.number()
    })
})
export type LoginResType = z.TypeOf<typeof LoginRes>

// refresh token schema
export const RefreshTokenBody = z.object({
    refreshToken: z.string({ message: "Vui lòng cung cấp refresh token" })
        .min(1, { message: "Refresh token không được để trống" })
}).strict()
export type RefreshTokenBodyType = z.TypeOf<typeof RefreshTokenBody>

// refresh token response schema
export const RefreshTokenRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        access_token: z.string(),
        token_type: z.string(),
        expires_in: z.number()
    })
})
export type RefreshTokenResType = z.TypeOf<typeof RefreshTokenRes>

// logout response schema
export const LogoutRes = z.object({
    success: z.boolean(),
    message: z.string()
})
export type LogoutResType = z.TypeOf<typeof LogoutRes>

// get me response schema
export const GetMeRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: UserSchema
})
export type GetMeResType = z.TypeOf<typeof GetMeRes>


