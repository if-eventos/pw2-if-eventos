import React, { useEffect, useState } from 'react';
import { HeaderContainer, CardContainer, CardImage, CardContent, CardTitle, CardInfo, GridContainer, SectionTitle } from './styles';
import { api } from '../../api/axios';

import { AiFillCalendar, AiFillFileText } from 'react-icons/ai';


interface Event {
  id: number;
  nome: string;
  descricao: string;
  image: string;
  data_hora: string;
  categoria: string;
}


const Home: React.FC = () => {
  const [eventos, setEventos] = useState<Event[]>([]);

  const getEvento = async () => {
    try {
      const response = await api.get('/api/v1/evento/todos');
      console.log('Dados da API:', response.data); // Verifique os dados no console
      if (Array.isArray(response.data.evento)) {
        setEventos(response.data.evento); // Acesse a chave correta
      } else {
        console.error('A resposta não contém um array chamado evento:', response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };
  

  useEffect(() => {
    getEvento();
  }, []); // Chama a função apenas uma vez quando o componente é montado

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

      <SectionTitle>Próximos Eventos</SectionTitle>
      {eventos.length > 0 ? (
        <GridContainer>
          {eventos
          .map(event => (
            <CardContainer key={event.id}>
              <CardImage src={`${api.getUri()}${event.image}`} alt={event.nome} />
              <CardContent>
                <CardTitle>{event.nome}</CardTitle>
                <CardInfo>
                  <AiFillCalendar /> {new Date(event.data_hora).toLocaleDateString()} <br />
                  <AiFillFileText /> {event.descricao}
                </CardInfo>
              </CardContent>
            </CardContainer>
          ))}
        </GridContainer>
      ) : (
        <p>Nenhum evento disponível</p>
      )}


      <SectionTitle>ADS</SectionTitle>
      {eventos.length > 0 ? (
        <GridContainer>
          {eventos
          .filter(event => event.categoria ==="ads")
          .map(event => (
            <CardContainer key={event.id}>
              <CardImage src={`${api.getUri()}${event.image}`} alt={event.nome} />
              <CardContent>
                <CardTitle>{event.nome}</CardTitle>
                <CardInfo>
                  📆 {new Date(event.data_hora).toLocaleDateString()} <br />
                  📝 {event.descricao}
                </CardInfo>
              </CardContent>
            </CardContainer>
          ))}
        </GridContainer>
      ) : (
        <p>Nenhum evento disponível</p>
      )}

<SectionTitle>Matemática</SectionTitle>
      {eventos.length > 0 ? (
        <GridContainer>
          {eventos
          .filter(event => event.categoria ==="matematica")
          .map(event => (
            <CardContainer key={event.id}>
              <CardImage src={`${api.getUri()}${event.image}`} alt={event.nome} />
              <CardContent>
                <CardTitle>{event.nome}</CardTitle>
                <CardInfo>
                  📅 {new Date(event.data_hora).toLocaleDateString()} <br />
                  📝 {event.descricao}
                </CardInfo>
              </CardContent>
            </CardContainer>
          ))}
        </GridContainer>
      ) : (
        <p>Nenhum evento disponível</p>
      )}










    </div>
  );
};

export default Home;
