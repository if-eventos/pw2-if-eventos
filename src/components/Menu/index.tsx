import CaixaPesquisa from '../CaixaPesquisa';
import {
  LoginButtonComp, 
  CadastroButtonComp, 
  SairButtonComp,
  PageButtonComp} from '../AuthButton';
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
              <PageButtonComp callback={() => navigate('/criarevento')}>
                criar evento
              </PageButtonComp>
            ) :
            (
              null
            )
        }
        

        <AuthMenu>

          {
            !!auth.user ? 
              (
                <SairButtonComp callback={handleLogoutButton}>
                  Sair
                  <img src={sair} alt="Sair" />
                </SairButtonComp>
              )    
              :
              (
                <>
                <LoginButtonComp callback={handleLoginButton}>
                  Login
                </LoginButtonComp>
                <CadastroButtonComp callback={handleCadastroButton}>
                  Cadastre-se
                </CadastroButtonComp>
                </>
              )
          }

        </AuthMenu>
      </Container>
    );
  }