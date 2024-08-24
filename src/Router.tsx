import { Route, Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Cadastro from './pages/Cadastro';
import { Login } from './pages/Login';


export function Router() {
    const {user} = useAuth()
    const isLogged = !!user

    return (
        <Routes>
            {
                !isLogged ?
                (
                    <>
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    </>
                ) 
                :
                (
                    <></> // Substituir por pages que o usuario acessa quando esta logado
                )
            }
        </Routes>
    )
}