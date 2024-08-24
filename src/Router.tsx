import { Route, Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Cadastro from './pages/Cadastro';


export function Router() {
    const {user} = useAuth()
    const isLogged = !!user

    return (
        <Routes>
            {
                !isLogged ?
                (
                    <Route path='/cadastro' element={<Cadastro />} />
                ) 
                :
                (
                    <></> // Substituir por pages que o usuario acessa quando esta logado
                )
            }
        </Routes>
    )
}