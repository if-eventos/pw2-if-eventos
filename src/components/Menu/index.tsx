import {
  LoginButton, 
  CadastroButton, 
  SairButton,
  PageButton} from '../Buttons';
import logo from '../../assets/IF_logo_BLUElogo-if-eventos.svg';
import list_bold from '../../assets/list-bold.png';
import { 
  AuthContent,
  LeftContent,
  Container,
  OpenMenu,
  ButtonsContainer,
  PagesContainer } from './styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import sair from '../../assets/log-outsair.svg'
import {
  useWindowWidth
} from '@react-hook/window-size'


export default function Menu() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const width = useWindowWidth()
  
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
        <LeftContent >
          <img src={logo} alt="Home" />

          {/* <CaixaPesquisa /> */}
        </LeftContent>


        <OpenMenu onClick={() => setIsOpen(!isOpen)}>
          <img src={list_bold} alt="Open Menu" />
        </OpenMenu>
        

        {
          (width > 810 || isOpen) &&
          (
            <ButtonsContainer>
              <PagesContainer>
                {
                  !!auth.user ?
                    (
                      <>
                        <PageButton callback={() => navigate('/')}>
                          Home
                        </PageButton>
                        <PageButton callback={() => navigate('/criarevento')}>
                          criar evento
                        </PageButton>
                        <PageButton callback={() => navigate('/inscricoes')}>
                          inscrições
                        </PageButton>
                      </>
                    ) :
                    (
                      null
                    )
                }
              </PagesContainer>

              <AuthContent>

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
              </AuthContent>
            </ButtonsContainer>
          )
        }
      </Container>
    );
  }