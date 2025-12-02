import { Role, RoleValues, Status, StatusValues } from '@/constants/type';
import z from 'zod';

// User schema 
export const UserSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(100),
    email: z.email(),
    phone: z.string().min(10).max(15).regex(/^[0-9]+$/).nullable(),
    role: z.enum(RoleValues).default(Role.BUYER),
    status: z.enum(StatusValues).default(Status.ACTIVE),
    avatar: z.string().nullable(),
    address: z.record(z.string(), z.any()).nullable(),
    created_at: z.string(),
    updated_at: z.string(),
});
export type UserType = z.TypeOf<typeof UserSchema>;

