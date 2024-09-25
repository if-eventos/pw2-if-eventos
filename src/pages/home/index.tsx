import React from 'react';
import { HeaderContainer, SectionTitle, SectionContainer, ImageContainer, BackgroundImage} from './styles';
import AllEventos from '../../components/Evento/AllEventos';
import EventosCategoria from '../../components/Evento/EventsCategoria';


const Home: React.FC = () => {

  return (
    <div>
      
      <HeaderContainer>
        <img src="./backHome.png" alt="" width={'100%'} />
        <h1 style={{position: 'absolute', top: '100px', textAlign: 'center', marginLeft: '10%'}}>Navegue pelos melhores eventos acadêmicos!</h1>
        <p style={{position: 'absolute', top: '170px', textAlign: 'center', marginLeft: '10%'}}>
          Viaje pelos Eventos Acadêmicos mais significativos do momento! De conferências internacionais
          a simpósios locais, mergulhe em um oceano de descobertas, debates e inovações que estão
          moldando o futuro da academia.
        </p>
      </HeaderContainer>

      <SectionContainer>
        {/* rendizar allEventos */}
        <AllEventos />

        {/* rendizar Eventos por categoria. */}
        <SectionTitle>Procure os eventos pelas Categorias</SectionTitle>
        <EventosCategoria />
      </SectionContainer>
      
      
    </div>
  );
};

export default Home;
