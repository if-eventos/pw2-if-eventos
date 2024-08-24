import { Button } from "./styles"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode,
    type: string,
    callback: () => void
}


export default function AuthButton({children, type, callback }:Props) {
    return (

        <Button $type={type} onClick={callback} >
            {children}
        </Button>
    )
}

