import CaixaPesquisa from '../CaixaPesquisa';
import {
  LoginButton, 
  CadastroButton, 
  SairButton,
  PageButton} from '../Buttons';
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

        {
          !!auth.user ?
            (
              <PageButton callback={() => navigate('/criarevento')}>
                criar evento
              </PageButton>
            ) :
            (
              null
            )
        }
        

        <AuthMenu>

          {
            !!auth.user ? 
              (
                <SairButton callback={handleLogoutButton}>
                  Sair
                  <img src={sair} alt="Sair" />
                </SairButton>
              )    
              :
              (
                <>
                <LoginButton callback={handleLoginButton}>
                  Login
                </LoginButton>
                <CadastroButton callback={handleCadastroButton}>
                  Cadastre-se
                </CadastroButton>
                </>
              )
          }

        </AuthMenu>
      </Container>
    );
  }