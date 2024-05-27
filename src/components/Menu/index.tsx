import CaixaPesquisa from '../CaixaPesquisa';
import logo from '../../assets/IF_logo_BLUElogo-if-eventos.svg';


export default function Menu() {
    return (
      <div>
        <img src={logo} alt="Home" />

        <CaixaPesquisa />

        <button>Login</button>
        <button>Cadastre-se</button>
      </div>
    );
  }