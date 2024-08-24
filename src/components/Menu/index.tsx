import CaixaPesquisa from '../CaixaPesquisa';
import AuthButton from '../AuthButton';
import logo from '../../assets/IF_logo_BLUElogo-if-eventos.svg';
import styles from './Menu.module.css';


export default function Menu() {
    return (
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <img src={logo} alt="Home" />

          <CaixaPesquisa />
        </div>


        <div className={styles.rightMenu}>
          <AuthButton type='login' >
            Login
          </AuthButton>
          <AuthButton type='cadastrar'>
            Cadastre-se
          </AuthButton>
        </div>
      </div>
    );
  }