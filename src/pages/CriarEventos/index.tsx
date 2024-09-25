import { useForm } from "react-hook-form"
import { EventSchemaCreate, EventSchemaCreateType } from "../../utils/createEventValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../api/axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { ImageUploader } from "../../components/ImageUploader"
import { InputStyled } from "../../components/Input"

import icon_map_pin from "../../assets/map-pin-bold.png"
import icon_calendar from "../../assets/calendar-dots-bold.png"
import icon_graduation_cap from "../../assets/graduation-cap-bold.png"
import icon_link from "../../assets/link-bold.png"
import icon_clipboard from "../../assets/clipboard-text-bold.png"


export default function CriarEventos() {
    const navigate = useNavigate()
    const [image, setImage] = useState<File | undefined>()
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EventSchemaCreateType>({
        resolver:zodResolver(EventSchemaCreate),
    })


    async function handleCreateEvent(data:EventSchemaCreateType) {
        const requestBody = new FormData
        requestBody.append('nome', data.nome)
        requestBody.append('categoria', data.categoria)
        requestBody.append('descricao', data.descricao)
        requestBody.append('data_hora', data.data_hora)
        requestBody.append('urlsiteoficial', data.urlsiteoficial)

        if (image) {
            requestBody.append('image', image)
        }

        console.log(requestBody)
        try {
            console.log(data)
            const response = await api.post('api/v1/evento/criar',
                requestBody,
                {
                    headers: {"Content-Type": "multipart/form-data"}
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

                
                <ImageUploader image={image} setImage={setImage} />

                <InputStyled $iconPath={icon_map_pin} {...register("nome")} placeholder="nome"  />
                {errors.nome?.message && <div>{errors.nome.message}</div>}

                <InputStyled $iconPath={icon_clipboard} {...register("descricao")} placeholder="descricao" />
                {errors.descricao?.message && <div>{errors.descricao.message}</div>}
                
                <InputStyled $iconPath={icon_calendar} type="date" {...register("data_hora")} placeholder="data_hora" />
                {errors.data_hora?.message && <div>{errors.data_hora.message}</div>}
                
                <InputStyled $iconPath={icon_link} {...register("urlsiteoficial")} placeholder="urlsiteoficial" />
                {errors.urlsiteoficial?.message && <div>{errors.urlsiteoficial.message}</div>}

                <InputStyled $iconPath={icon_graduation_cap} {...register("categoria")} placeholder="categoria" />
                {errors.categoria?.message && <div>{errors.categoria.message}</div>}

                <button type="submit">Criar Evento!</button>
            </form>
        </div>
    )
}