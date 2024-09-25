import React from 'react';
import { HeaderContainer, SectionTitle, SectionContainer, ImageContainer, BackgroundImage} from './styles';
import AllEventos from '../../components/Evento/AllEventos';
import EventosCategoria from '../../components/Evento/EventsCategoria';


const Home: React.FC = () => {

  return (
    <div>
      
      <HeaderContainer>
        <ImageContainer><img src="./backHome.png" alt="" width={'100%'} height={'180px'} /></ImageContainer>
        <h1 style={{position: 'absolute', top: '10px', textAlign: 'center', marginLeft: '10%', padding: '10px'}}>Navegue pelos melhores eventos acadêmicos!</h1>
        <p style={{position: 'absolute', top: '80px', textAlign: 'center', marginLeft: '10%', width: '60%'}}>
          Viaje pelos Eventos Acadêmicos mais significativos do momento! De conferências internacionais
          a simpósios locais, mergulhe em um oceano de descobertas, debates e inovações que estão
          moldando o futuro da academia.
        </p>
      </HeaderContainer>


      <SectionTitle>Destaques</SectionTitle>
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
