export const Role = {
    BUYER: 'buyer',
    SELLER: 'seller',
    ADMIN: 'admin'
} as const

export const RoleValues = [Role.BUYER, Role.SELLER, Role.ADMIN] as const