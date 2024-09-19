import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserSchemaSignIn, UserSchemaSignInType } from "../../utils/signinValidation"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { api } from "../../api/axios"
import { useNavigate } from "react-router-dom"


export function Login() {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSchemaSignInType>({
        resolver:zodResolver(UserSchemaSignIn),
    })

    function handleSignin(data:UserSchemaSignInType) {
        const {email, password} = data

        if (email && password) {
            auth.logar(email, password)

            navigate('/')
        }
    }


    return (



        <div>
            <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={handleSubmit((data) => handleSignin(data))}>

                <input {...register("email")} placeholder="email" />
                {errors.email?.message && <div>{errors.email.message}</div>}

                <input {...register("password")} placeholder="senha" type="password"/>
                {errors.password?.message && <div>{errors.password.message}</div>}

                <button type="submit">Entrar!</button>
            </form>

            <div>
                <p>você já possui uma conta?</p>
                <p>Acesse ela por <a href="#">aqui</a></p>
            </div>
        </div>
    )
}