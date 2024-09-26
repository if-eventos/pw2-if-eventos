import {z} from 'zod'


export const EventSchemaCreate = z.object({
    nome:z.string().min(1, {message: "nome é obrigatório!"}),
    descricao:z.string().min(1, {message: "descrição é obrigatória!"}),
    data_hora:z.string().date(),
    local_ou_link:z.string().min(1, {message: "Informe o link ou local do Evento!"}),
    categoria:z.string().min(1, {message: "Informe qual é a categoria do Evento!"}),
})

export type EventSchemaCreateType = z.infer<typeof EventSchemaCreate>;