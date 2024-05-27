import lupa from '../../assets/Vectorlupa.svg'

export default function CaixaPesquisa() {
    return (
      <div>
        <img src={lupa} alt="buscar" />
        <input type="text" placeholder='Pesquisar Eventos'/>
      </div>
    );
  }