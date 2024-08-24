import { 
    Button,
    LoginButton,
    CadastroButton, 
    SairButton } from "./styles"

type Props = {
    children: React.ReactNode,
    callback: () => void
}


export default function AuthButton({children, callback }:Props) {
    return (        
        <Button onClick={callback} >
            {children}
        </Button>
    )
}

export function LoginButtonComp({children, callback}:Props) {
    return (
        <LoginButton onClick={callback} >
            {children}
        </LoginButton>
    )
}

export function CadastroButtonComp({children, callback}:Props) {
    return (
        <CadastroButton onClick={callback} >
            {children}
        </CadastroButton>
    )
}

export function SairButtonComp({children, callback}:Props) {
    return (
        <SairButton onClick={callback} >
            {children}
        </SairButton>
    )
}