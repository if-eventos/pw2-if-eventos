import CaixaPesquisa from '../CaixaPesquisa';
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
          <button>Login</button>
          <button>Cadastre-se</button>
        </div>
      </div>
    );
  }