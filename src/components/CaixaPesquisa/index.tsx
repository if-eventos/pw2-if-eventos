import { useState } from 'react';
import lupa from '../../assets/Vectorlupa.svg';
import styles from "./CaixaPesquisa.module.css";

export default function CaixaPesquisa() {

  const [focus, setFocus] = useState(false);
  const [text, setText] = useState("");

  function inputFocus() {
    setFocus(true)
  }

  function inputBlur() {
    setFocus(false)
  }

  function handleText(text:string) {
    setText(text)
  }


  return (
    <div className={`
      ${styles.container}
      ${ focus ? styles.containerOnFocus : null }
    `}>
      <img src={lupa} alt="buscar" className='lupaImage' />
      <input
        onFocus={inputFocus}
        onBlur={inputBlur}
        type="text" 
        value={text}
        onChange={(e) => handleText(e.target.value)}
        placeholder='Pesquisar Eventos' 
        className={styles.searchInput}
      />
    </div>
  );
  }