import React from 'react';
import { HeaderContainer, SectionTitle, SectionContainer} from './styles';
import AllEventos from '../../components/Evento/AllEventos';
import EventosCategoria from '../../components/Evento/EventsCategoria';


const Home: React.FC = () => {

  return (
    <div>
      <HeaderContainer>
        <h1>Navegue pelos melhores eventos acadêmicos!</h1>
        <p>
          Viaje pelos Eventos Acadêmicos mais significativos do momento! De conferências internacionais
          a simpósios locais, mergulhe em um oceano de descobertas, debates e inovações que estão
          moldando o futuro da academia.
        </p>
      
      </HeaderContainer>
      <SectionContainer>
        {/* rendizar allEventos */}
        <SectionTitle>Próximos Eventos</SectionTitle>
        <AllEventos />

        {/* rendizar Eventos por categoria. */}
        <SectionTitle>Procure os eventos pelas Categorias</SectionTitle>
        <EventosCategoria />
      </SectionContainer>
      
      
    </div>
  );
};

export default Home;
