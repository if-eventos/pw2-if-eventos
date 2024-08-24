import CaixaPesquisa from '../CaixaPesquisa';
import AuthButton from '../AuthButton';
import logo from '../../assets/IF_logo_BLUElogo-if-eventos.svg';
import { 
  AuthMenu,
  LeftMenu,
  Container } from './styles';


export default function Menu() {
    return (
      <Container>
        <LeftMenu >
          <img src={logo} alt="Home" />

          <CaixaPesquisa />
        </LeftMenu>

        <AuthMenu>
          <AuthButton type='login' >
            Login
          </AuthButton>
          <AuthButton type='cadastrar'>
            Cadastre-se
          </AuthButton>
        </AuthMenu>
      </Container>
    );
  }