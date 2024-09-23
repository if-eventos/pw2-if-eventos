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
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import sair from '../../assets/log-outsair.svg'


export default function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);


  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  
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
          width > 810 || !!isOpen ?
          (
            <ButtonsContainer>
              <PagesContainer>
                {
                  !!auth.user ?
                    (
                      <>
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
          :
          (
            null
          )
        }
      </Container>
    );
  }