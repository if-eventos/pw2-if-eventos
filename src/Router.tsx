import { Route, Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Cadastro from './pages/Cadastro';
import Home from './pages/home';
import EditarPerfil from './pages/Editar-Perfil';
import DetalhesEvento from './pages/Detalhes-Evento';


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
                    <Route path='/editar-perfil' element={<EditarPerfil />} />
                    <Route path='/detalhes-evento' element={<DetalhesEvento/>} />
                    
                    </>
                ) 
                :
                (
                    <>

                    

                    </> // Substituir por pages que o usuario acessa quando esta logado
                )
            }
        </Routes>
    )
}