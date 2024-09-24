import { 
    ButtonStyled,
    LoginButtonStyled,
    CadastroButtonStyled, 
    SairButtonStyled,
    PageButtonStyled,
    SubmitButtonStyled } from "./styles"

type Props = {
    children: React.ReactNode,
    callback: () => void
}

export function PageButton({children, callback }:Props) {
    return (        
        <PageButtonStyled onClick={callback} >
            {children}
        </PageButtonStyled>
    )
}


export default function AuthButton({children, callback }:Props) {
    return (        
        <ButtonStyled onClick={callback} >
            {children}
        </ButtonStyled>
    )
}

export function LoginButton({children, callback}:Props) {
    return (
        <LoginButtonStyled onClick={callback} >
            {children}
        </LoginButtonStyled>
    )
}

export function CadastroButton({children, callback}:Props) {
    return (
        <CadastroButtonStyled onClick={callback} >
            {children}
        </CadastroButtonStyled>
    )
}

export function SairButton({children, callback}:Props) {
    return (
        <SairButtonStyled onClick={callback} >
            {children}
        </SairButtonStyled>
    )
}


type SubmitProps = {
    children:React.ReactNode
}

export function SubmitButton({children}:SubmitProps) {
    return (
        <SubmitButtonStyled type="submit">
            {children}
        </SubmitButtonStyled>
    )
}