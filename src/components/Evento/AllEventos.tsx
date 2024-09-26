// src/components/Eventos.tsx
import React, { useEffect, useState } from 'react';
import { GridContainer } from './styles';
import { api } from '../../api/axios';
import { Evento } from './Evento';

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
            <Evento event={event} key={event.id}/>
          ))}
        </GridContainer>
      ) : (
        <p>Nenhum evento disponível</p>
      )}
    </div>
  );
};

export default AllEventos;
