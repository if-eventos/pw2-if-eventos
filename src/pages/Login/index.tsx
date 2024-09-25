import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserSchemaSignIn, UserSchemaSignInType } from "../../utils/signinValidation"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { LoginContainer,
         FormStyled,
         Aviso,
         Text } from "./styles"
import { InputStyled } from "../../components/Input"
import { SubmitButton } from "../../components/Buttons"

import icon_email from "../../assets/icon_email.png"
import icon_password from "../../assets/icon_password.png"



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



        <LoginContainer>
            <FormStyled onSubmit={handleSubmit((data) => handleSignin(data))}>

                <InputStyled {...register("email")} 
                placeholder="email" 
                $iconPath={icon_email} />
                {errors.email?.message && <div>{errors.email.message}</div>}

                <InputStyled {...register("password")} 
                placeholder="senha" 
                type="password"
                $iconPath={icon_password} />
                {errors.password?.message && <div>{errors.password.message}</div>}
 
                <SubmitButton>
                    Login
                </SubmitButton>
            </FormStyled>

            <Aviso>
                <Text>Não possui uma conta?</Text>
                <Text>Crie uma <a href="#" onClick={() => navigate('/cadastro')}>aqui</a></Text>
            </Aviso>
        </LoginContainer>
    )
}