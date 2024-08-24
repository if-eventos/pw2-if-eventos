import { Button } from "./styles"


type Props = {
    children: React.ReactNode,
    type: string
}


export default function AuthButton({children, type }:Props) {
    return (

        <Button $type={type} >
            {children}
        </Button>
    )
}

