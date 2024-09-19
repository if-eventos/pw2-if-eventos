import { createContext, useEffect, useState } from "react"
import { api } from "../api/axios"

interface User {
    id: number
    name: string,
    email: string,
    telefone: string,
    ehPalestrante: number,
    minicurriculo: string,
    urlsite: string,
    curriculo_redesocial: string,
    image: string
}
interface getUser {
    name: string,
    email: string,
    telefone: string,
    ehPalestrante: number,
    minicurriculo: string,
    urlsite: string,
    curriculo_redesocial: string,
    image: string
}



interface signinResponse {
    token: string,
    userId: string
}

interface IAuthContext {
    user: User | null
    logar: (email:string, password:string) => Promise<void>
    deslogar: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)


type Props = {
    children: React.ReactNode
}

export function AuthProvider({children}:Props) {

    const [user, setUser] = useState<User | null>(null)


    async function logar(email:string, password:string) {
        try {
            const data = {
                email: email,
                password: password
            }
            const response =  await api.post('/api/v1/user/signin', data)

            if (response.status === 200) {
                console.log(response.data)
                const {token, userId} = response.data as signinResponse
                api.defaults.headers.common.Authorization = `Bearer ${token}`

                const getUserResponse = await api.get(`api/v1/user/${userId}`)
                
                const userData = getUserResponse.data as getUser
                const id = Number(userId)
                const user = {...userData, id:id}
                setUser(user)

                localStorage.setItem('auth.token', token)
                localStorage.setItem('auth.user', JSON.stringify(user))
            }
        } catch (error) {
            console.error(error)
        }
    }


    async function deslogar() {
        setUser(null)
        localStorage.removeItem('auth.token')
        localStorage.removeItem('auth.user')
        api.defaults.headers.common.Authorization = undefined //maybe it's wrong...
    }


    useEffect(() => {
        const token = localStorage.getItem('auth.token')
        console.log(token)
        const user = localStorage.getItem('auth.user')

        if (token && user) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            setUser(JSON.parse(user))
        }
    }, [])



    return (
        <AuthContext.Provider value={{user, logar, deslogar}}>
            {children}
        </AuthContext.Provider>
    )
}