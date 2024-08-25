import { Route, Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Cadastro from './pages/Cadastro';
import Home from './pages/home';


export function Router() {
    const {user} = useAuth()
    const isLogged = !!user

    return (
        <Routes>
            {
                !isLogged ?
                (
                    <>
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/' element={<Home />} />
                    
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