import { useForm } from "react-hook-form"
import { UserSchemaSignUp, UserSchemaSignUpType } from "../../utils/signupValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../api/axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ImageUploader } from "../../components/ImageUploader"


export default function Cadastro() {
    const navigate = useNavigate()

    const [togglePalestrante, setTogglePalestrante] =useState(false)
    const [image, setImage] = useState<undefined | File>(undefined)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSchemaSignUpType>({
        resolver:zodResolver(UserSchemaSignUp),
    })


    async function handleSignup(data:UserSchemaSignUpType) {

        const requestBody = new FormData
        requestBody.append('name', data.name)
        requestBody.append('email', data.email)
        requestBody.append('password', data.password)

        const ehPalestrante = togglePalestrante ? 1 : 0;
        requestBody.append('ehPalestrante', ehPalestrante.toString())
        if (data.telefone) {
            requestBody.append('telefone', data.telefone)
        }
        if (data.urlsite) {
            requestBody.append('urlsite', data.urlsite)
        }
        if (data.curriculo_redesocial) {
            requestBody.append('curriculo_redesocial', data.curriculo_redesocial)
        }
        if (data.minicurriculo) {
            requestBody.append('minicurriculo', data.minicurriculo)
        }
        if (image) {
            requestBody.append('image', image)
        }
 
        try {
            const response = await api.post('api/v1/user/signup', requestBody, {
                headers: {"Content-Type": "multipart/form-data"}
            })

            console.log(response.status)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    function handlePalestrante() {
        // console.log(ehPalestrante)
        setTogglePalestrante(!togglePalestrante)
    }


    return (
        <div >
            <form style={{display: 'flex', flexDirection: 'column'}}
             onSubmit={handleSubmit((data) => handleSignup(data))}>

                <ImageUploader image={image} setImage={setImage} />

                <input {...register("name")} placeholder="nome"  />
                {errors.name?.message && <div>{errors.name.message}</div>}

                <input {...register("email")} placeholder="email" />
                {errors.email?.message && <div>{errors.email.message}</div>}
                
                <input {...register("telefone")} placeholder="telefone" />
                {errors.telefone?.message && <div>{errors.telefone.message}</div>}
                
                <input {...register("urlsite")} placeholder="site pessoal:" />
                {errors.urlsite?.message && <div>{errors.urlsite.message}</div>}

                <input {...register("curriculo_redesocial")} placeholder="rede social" />
                {errors.curriculo_redesocial?.message && <div>{errors.curriculo_redesocial.message}</div>}
                
                <input {...register("password")} placeholder="senha" type="password"/>
                {errors.password?.message && <div>{errors.password.message}</div>}

                <input {...register("minicurriculo")} placeholder="Escreva um pouco sobre você:" />
                {errors.minicurriculo?.message && <div>{errors.minicurriculo.message}</div>}

                <input type="checkbox" name="ehPalestrante" id="ehPalestrante"
                    onClick={handlePalestrante} />
                <label htmlFor="ehPalestrante">Sou Palestrante?</label>

                <button type="submit">Criar Conta!</button>
            </form>

            <div>
                <p>você já possui uma conta?</p>
                <p>Acesse ela por <a href="#">aqui</a></p>
            </div>
        </div>
    )
}