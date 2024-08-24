import CaixaPesquisa from '../CaixaPesquisa';
import AuthButton from '../AuthButton';
import logo from '../../assets/IF_logo_BLUElogo-if-eventos.svg';
import { 
  AuthMenu,
  LeftMenu,
  Container } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import sair from '../../assets/log-outsair.svg'


export default function Menu() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  
    function handleLoginButton() {
      navigate('/login')
    }

    function handleCadastroButton() {
      navigate('/cadastro')
    }

    function handleLogoutButton() {
      auth.deslogar()
      navigate('/login')
    }

    return (
      <Container>
        <LeftMenu >
          <img src={logo} alt="Home" />

          <CaixaPesquisa />
        </LeftMenu>

        <AuthMenu>

          {
            !!auth.user ? 
              (
                <AuthButton type='logout' callback={handleLogoutButton}>
                  <img src={sair} alt="Sair" />
                  Sair
                </AuthButton>
              )    
              :
              (
                <>
                <AuthButton type='login' callback={handleLoginButton}>
                  Login
                </AuthButton>
                <AuthButton type='cadastrar' callback={handleCadastroButton}>
                  Cadastre-se
                </AuthButton>
                </>
              )
          }

        </AuthMenu>
      </Container>
    );
  }