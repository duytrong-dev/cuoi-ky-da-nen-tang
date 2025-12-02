import { RoleValues } from '@/constants/type'
import z from 'zod'

// register schema
export const RegisterBody = z.object({
    name: z.string().min(2).max(100),
    email: z.email(),
    password: z.string().min(6).max(100),
    password_confirmation: z.string().min(6).max(100),
    phone: z.string().min(10).max(15).regex(/^[0-9]+$/),
    role: z.enum(RoleValues)
}).strict()
export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

// register response schema
export const RegisterRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        user: z.string(),
        access_token: z.string(),
        refresh_token: z.string(),
        token_type: z.string(),
        expires_in: z.number()
    })
})
export type RegisterResType = z.TypeOf<typeof RegisterRes>

// login schema
export const LoginBody = z.object({
    email: z.email(),
    password: z.string().min(6).max(100)
}).strict()
export type LoginBodyType = z.TypeOf<typeof LoginBody>

// login response schema
export const LoginRes = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        user: z.string(),
        access_token: z.string(),
        refresh_token: z.string(),
        token_type: z.string(),
        expires_in: z.number()
    })
})
export type LoginResType = z.TypeOf<typeof LoginRes>

// refresh token schema
export const RefreshTokenBody = z.object({
    refreshToken: z.string()
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
    data: z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        role: z.enum(RoleValues),
        status: z.string(),
        avatar: z.string(),
        address: z.object({
            street: z.string(),
            city: z.string(),
            state: z.string(),
            zip: z.string()
        }),
        created_at: z.string(),
        updated_at: z.string()
    })
})
export type GetMeResType = z.TypeOf<typeof GetMeRes>


