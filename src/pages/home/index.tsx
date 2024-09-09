// Home.tsx
import React from 'react';
import { HeaderContainer, CardContainer, CardImage, CardContent, CardTitle, CardInfo, GridContainer, SectionTitle, CardRow } from './styles';

interface CardProps {
  title: string;
  date: string;
  location: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, date, location, image }) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardInfo>
        📅 {date} <br />
        📍 {location}
      </CardInfo>
    </CardContent>
  </CardContainer>
);

interface CardGridProps {
  title: string;
  cards: Array<{
    title: string;
    date: string;
    location: string;
    image: string;
  }>;
}

const CardGrid: React.FC<CardGridProps> = ({ title, cards }) => (
  <GridContainer>
    <SectionTitle>{title}</SectionTitle>
    <CardRow>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </CardRow>
  </GridContainer>
);

const Header: React.FC = () => (
  <HeaderContainer>
    <h1>Navegue pelos melhores eventos acadêmicos!</h1>
    <p>
      Viaje pelos Eventos Acadêmicos mais significativos do momento! De conferências internacionais
      a simpósios locais, mergulhe em um oceano de descobertas, debates e inovações que estão
      moldando o futuro da academia.
    </p>
  </HeaderContainer>
);

const Home: React.FC = () => {
  const cardsData = [
    { title: 'Semana do marketing', date: 'sábado, 16 maio', location: 'Cajazeiras, PB', image: '/background.png' },
    { title: 'Introdução à área de exatas', date: 'terça-feira, 19 junho', location: 'João Pessoa, PB', image: '/foto.jpg' },
    // Adicione mais cards conforme necessário
  ];

  return (
    <div>
      <Header />
      <CardGrid title="Destaques" cards={cardsData} />
      <CardGrid title="Educação" cards={cardsData} />
      <CardGrid title="Saúde" cards={cardsData} />
    </div>
  );
};

export default Home;
