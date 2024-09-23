import {z} from 'zod'


export const UserSchemaUpdate = z.object({
    name: z.string().min(1, "Nome é obrigatório").optional(),
    email: z.string().email("Email inválido").optional(),
    telefone: z.string().optional(),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").optional() // Senha opcional
});

export type UserSchemaUpdateType = z.infer<typeof UserSchemaUpdate>;