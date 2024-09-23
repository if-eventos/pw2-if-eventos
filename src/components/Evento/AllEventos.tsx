// src/components/Eventos.tsx
import React, { useEffect, useState } from 'react';
import { CardContainer, CardImage, CardContent, CardTitle, CardInfo, GridContainer } from './styles';
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

const AllEventos: React.FC = () => {
  const [eventos, setEventos] = useState<Event[]>([]);

  const getEvento = async () => {
    try {
      const response = await api.get('/api/v1/evento/todos');
      if (Array.isArray(response.data.evento)) {
        setEventos(response.data.evento);
      } else {
        console.error('A resposta não contém um array chamado evento:', response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  useEffect(() => {
    getEvento();
  }, []);

  return (
    <div>
      {eventos.length > 0 ? (
        <GridContainer>
          {eventos.map(event => (
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
    </div>
  );
};

export default AllEventos;
