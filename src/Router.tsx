import { Route, Routes, useLocation} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import Cadastro from './pages/Cadastro';
import { Login } from './pages/Login';
import CriarEventos from './pages/CriarEventos';
import Home from './pages/home';
import EditarPerfil from './pages/EditarPerfil';
import DetalhesEvento from './pages/Detalhes-Evento';
import Inscricoes from './pages/Inscricoes';
import { AnimatePresence } from 'framer-motion';


export function Router() {
    const {user} = useAuth()
    const isLogged = !!user
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
                        <>
                        <Route path='/' element={<Home />} />
                        <Route path='/editar-perfil' element={<EditarPerfil />} />
                        <Route path='/detalhes-evento/:id' element={<DetalhesEvento/>} />
                        <Route path='/criarevento' element={<CriarEventos />} />
                        <Route path='/inscricoes' element={<Inscricoes />} />
                        </> // Substituir por pages que o usuario acessa quando esta logado
                    )
                }
            </Routes>
        </AnimatePresence>
    )
}