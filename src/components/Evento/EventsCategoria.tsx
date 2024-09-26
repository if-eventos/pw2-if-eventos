// src/components/Eventos.tsx
import React, { useEffect, useState } from 'react';
import { GridContainer, SectionTitle } from './styles';
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

const EventosCategoria: React.FC = () => {
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
            <SectionTitle>Eventos de ADS</SectionTitle>
            {/* Renderiza Eventos de ADS.*/}
            {eventos.length > 0 ? (
                <GridContainer>
                {eventos
                .filter(event => event.categoria ==="ads")
                .map(event => (
                  <Evento event={event} key={event.id}/>
                ))}
                </GridContainer>
            ) : (
                <p>Nenhum evento disponível</p>
            )}

            <SectionTitle>Eventos de Matemática</SectionTitle>
            {/* Renderiza Eventos de MAT.*/}
            {eventos.length > 0 ? (
                <GridContainer>
                {eventos
                .filter(event => event.categoria ==="matematica")
                .map(event => (
                  <Evento event={event} key={event.id}/>
                ))}
                </GridContainer>
            ) : (
                <p>Nenhum evento disponível</p>
            )}

            <SectionTitle>Eventos de Automação</SectionTitle>
            {/* Renderiza Eventos de MAT.*/}
            {eventos.length > 0 ? (
                <GridContainer>
                {eventos
                .filter(event => event.categoria ==="controle-automacao")
                .map(event => (
                  <Evento event={event} key={event.id}/>
                ))}
                </GridContainer>
            ) : (
                <p>Nenhum evento disponível</p>
            )}

            <SectionTitle>Eventos de Engenharia Civil</SectionTitle>
            {/* Renderiza Eventos de MAT.*/}
            {eventos.length > 0 ? (
                <GridContainer>
                {eventos
                .filter(event => event.categoria ==="engenharia-civil")
                .map(event => (
                  <Evento event={event} key={event.id}/>
                ))}
                </GridContainer>
            ) : (
                <p>Nenhum evento disponível</p>
            )}


    </div>
  );
};

export default EventosCategoria;
