import CaixaPesquisa from '../CaixaPesquisa';
import Button from '../Button';
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
          <Button name='Login' color="#51367C" backgroundColor="white" ></Button>
          <Button name='Cadastre-se' color="white" backgroundColor="#51367C"></Button>
        </div>
      </div>
    );
  }