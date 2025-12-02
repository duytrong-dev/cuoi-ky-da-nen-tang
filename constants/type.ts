export const Role = {
    BUYER: 'buyer',
    SELLER: 'seller',
    ADMIN: 'admin'
} as const

export const RoleValues = [Role.BUYER, Role.SELLER, Role.ADMIN] as const

export const Status = {
    ACTIVE: 'active',
    BANNED: 'banned'
} as const

export const StatusValues = [Status.ACTIVE, Status.BANNED] as const