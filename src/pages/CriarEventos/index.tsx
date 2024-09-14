import { useForm } from "react-hook-form"
import { EventSchemaCreate, EventSchemaCreateType } from "../../utils/createEventValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../api/axios"
import { useNavigate } from "react-router-dom"

type RequestBody = {
    nome: string
    descricao: string
    data_hora: Date
    urlsiteoficial: string
    categoria: string
}


export default function CriarEventos() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EventSchemaCreateType>({
        resolver:zodResolver(EventSchemaCreate),
    })


    async function handleCreateEvent(data:EventSchemaCreateType) {
        // const requestBody = {} as RequestBody

        try {
            console.log(data)
            const response = await api.post('api/v1/evento/criar', {
                ...data 
            })

            console.log(response.status)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <h1>Crie o seu evento:</h1>

            <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={handleSubmit(data => handleCreateEvent(data))}>
                <input {...register("nome")} placeholder="nome"  />
                {errors.nome?.message && <div>{errors.nome.message}</div>}

                <input {...register("descricao")} placeholder="descricao" />
                {errors.descricao?.message && <div>{errors.descricao.message}</div>}
                
                <input type="date" {...register("data_hora")} placeholder="data_hora" />
                {errors.data_hora?.message && <div>{errors.data_hora.message}</div>}
                
                <input {...register("urlsiteoficial")} placeholder="urlsiteoficial" />
                {errors.urlsiteoficial?.message && <div>{errors.urlsiteoficial.message}</div>}

                <input {...register("categoria")} placeholder="categoria" />
                {errors.categoria?.message && <div>{errors.categoria.message}</div>}

                <button type="submit">Criar Evento!</button>
            </form>
        </div>
    )
}