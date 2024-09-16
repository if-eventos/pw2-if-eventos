// src/App.tsx
import React from 'react';
import {
  GlobalStyle,
  HeaderContainer,
  Image,
  Date,
  Title,
  EventContainer,
  Description,
  JoinButton,
  LocationContainer,
  MapImage,
  SpeakersContainer,
  SpeakerList,
  SpeakerCard,
  SpeakerImage,
  SpeakerName,
  Title2,
  TitleButtonContainer,
  globalContainer,
} from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Image src="/events.png" alt="Banner" />
        <Date>Terça-feira, 19 de junho</Date>
        <TitleButtonContainer>
          <Title>Introdução à área de exatas</Title>
          <JoinButton>Participar</JoinButton>
        </TitleButtonContainer>
        <Title2>Sobre o Evento</Title2> 
      </HeaderContainer>

      <EventContainer>
        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. NullaLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
            quis sem at nibh elementum imperdiet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </p>
        </Description>
        
      </EventContainer>

      <LocationContainer>
        <h2>Localização</h2>
        <MapImage src="OIP.jfif" alt="Localização do evento" />
        <p>Rua: R. Concretizador Manoel Nicos Bozena, 71-5 - Mangabeira</p>
      </LocationContainer>

      <SpeakersContainer>
        <h2>Palestrantes</h2>
        <SpeakerList>
          <SpeakerCard>
            <SpeakerImage src="speaker1.jpg" alt="Pedro Neto" />
            <SpeakerName>Pedro Neto</SpeakerName>
          </SpeakerCard>
          <SpeakerCard>
            <SpeakerImage src="speaker2.jpg" alt="Jhonatan Lira" />
            <SpeakerName>Jhonatan Lira</SpeakerName>
          </SpeakerCard>
          <SpeakerCard>
            <SpeakerImage src="speaker3.jpg" alt="Fábio Nogueira" />
            <SpeakerName>Fábio Nogueira</SpeakerName>
          </SpeakerCard>
        </SpeakerList>
      </SpeakersContainer>
    </>
  );
};

export default App;
