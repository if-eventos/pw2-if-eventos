import {z} from 'zod'


export const UserSchemaSignUp = z.object({
    name:z.string().min(1, {message: "nome é obrigatório!"}),
    email:z.string().min(1, {message: "email é obrigatório!"}).email({message: "email inválido!"}),
    password:z.string().min(8, {message: "senha menor que 8 caracteres!"}),
    telefone:z.string().min(9, {message: "telefone com menos de 9 números!"}).optional().or(z.literal('')),
    minicurriculo:z.optional(z.string()),
    urlsite:z.optional(z.string()),
    curriculo_redesocial:z.optional(z.string()),
})

export type UserSchemaSignUpType = z.infer<typeof UserSchemaSignUp>;