import { useForm } from "react-hook-form"
import { EventSchemaCreate, EventSchemaCreateType } from "../../utils/createEventValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../api/axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { 
    Container,
    FormStyled,
    Categoria,
    LabelCategoria,
    ContainerCategoria
 } from "./styles"
import { Titulo } from "../../components/Titulo"
import { SubmitButton } from "../../components/Buttons"

import { BannerUploader } from "../../components/ImageUploader"
import { InputStyled } from "../../components/Input"
import { ErrorMessage } from "../../components/ErrorMessage"

import icon_map_pin from "../../assets/map-pin-bold.png"
import icon_calendar from "../../assets/calendar-dots-bold.png"
// import icon_graduation_cap from "../../assets/graduation-cap-bold.png"
import icon_signature from "../../assets/signature.png"
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
        requestBody.append('local_ou_link', data.local_ou_link)

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
        <Container>
            <Titulo>Crie o seu evento:</Titulo>

            <FormStyled style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={handleSubmit(data => handleCreateEvent(data))}>

                
                <BannerUploader image={image} setImage={setImage} />

                <InputStyled $iconPath={icon_signature} {...register("nome")} placeholder="nome"  />
                <ErrorMessage>
                    {errors.nome?.message && <div>{errors.nome.message}</div>}
                </ErrorMessage>

                <InputStyled $iconPath={icon_clipboard} {...register("descricao")} placeholder="descricao" />
                <ErrorMessage>
                    {errors.descricao?.message && <div>{errors.descricao.message}</div>}
                </ErrorMessage>
                
                <InputStyled $iconPath={icon_calendar} type="date" {...register("data_hora")} placeholder="data_hora" />
                <ErrorMessage>
                    {errors.data_hora?.message && <div>{errors.data_hora.message}</div>}
                </ErrorMessage>
                
                <InputStyled $iconPath={icon_map_pin} {...register("local_ou_link")} placeholder="local_ou_link" />
                <ErrorMessage>
                    {errors.local_ou_link?.message && <div>{errors.local_ou_link.message}</div>}
                </ErrorMessage>
                
                {/* <InputStyled $iconPath={icon_graduation_cap} {...register("categoria")} placeholder="categoria" /> */}
                
                <ContainerCategoria>
                    <LabelCategoria htmlFor="categoria">Escolha a categoria:</LabelCategoria>
                    <Categoria id="categoria" {...register("categoria")}>
                        <option value="">--categoria--</option>
                        <option value="ads">ADS</option>
                        <option value="matematica">Matemática</option>
                        <option value="controle-automacao">Controle e Automação</option>
                        <option value="engenharia-civil">Engenharia Civil</option>
                    </Categoria>
                </ContainerCategoria>
                <ErrorMessage>
                    {errors.categoria?.message && <div>{errors.categoria.message}</div>}
                </ErrorMessage>
                
                <SubmitButton>
                    Criar Evento!
                </SubmitButton>
            </FormStyled>
        </Container>
    )
}