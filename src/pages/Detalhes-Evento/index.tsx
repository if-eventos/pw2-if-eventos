// src/App.tsx
import { useEffect, useState } from 'react';
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
  Title2,
  TitleButtonContainer,
} from './styles';
import { api } from '../../api/axios';
import { useParams } from 'react-router-dom';

interface Palestrante {
  id: number;
  name: string;
  image: string;
}

interface Event {
  id: number;
  nome: string;
  descricao: string;
  image: string;
  data_hora: string;
  categoria: string;
}

export default function DetalhesEvento() {
  const { id } = useParams(); 
  const [palestrantes, setPalestrantes] = useState<Palestrante[]>([]);
  const [evento, setEvento] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        // Buscar detalhes do evento
        const response = await api.get(`/api/v1/evento/todos/${id}`);
        setEvento(response.data.evento);

        // Buscar palestrantes do evento
        const responsePalestra = await api.get(`/api/v1/palestrante/readAll/${id}`);
        setPalestrantes(responsePalestra.data.palestrantes || []); // Garante um array vazio se não houver palestrantes

        console.log('URL base:', api.getUri());
        console.log('Palestrantes:', responsePalestra.data.palestrantes);
        
      } catch (error) {
        console.error("Erro ao buscar o evento ou palestrantes:", error);
      }
    };

    if (id) {
      fetchEvento();
    }
  }, [id]);

  if (!evento) {
    return <div>Carregando detalhes do evento...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Image src={`${api.getUri()}${evento.image}`} alt={evento.nome} />
        <Date>{evento.data_hora}</Date>
        <TitleButtonContainer>
          <Title>{evento.nome}</Title>
          <JoinButton>Participar</JoinButton>
        </TitleButtonContainer>
        <Title2>Sobre o Evento</Title2>
      </HeaderContainer>

      <EventContainer>
        <Description>{evento.descricao}</Description>
      </EventContainer>

      <LocationContainer>
        <h2 style={{ marginTop: '50px', marginBottom: '30px' }}>Localização</h2>
        <MapImage src="../public/OIP.jfif" alt="Localização do evento" />
        <p style={{ margin: '10px' }}>Rua: R. Concretizador Manoel Nicos Bozena, 71-5 - Mangabeira</p>
      </LocationContainer>

      <SpeakersContainer>
        <h2>Palestrantes</h2>
        <SpeakerList>
          {palestrantes.length > 0 ? (
            palestrantes.map((palestrante) => (
              <div key={palestrante.id}>
                {/* Aqui exibimos a imagem e nome do palestrante */}
                <img
                  src={`${api.getUri()}${palestrante.image}`}
                  alt={`Foto de ${palestrante.name}`}
                  style={{ width: '200px', height: '150px' }}
                />

                <p>{palestrante.name}</p>
              </div>
            ))
          ) : (
            <p>Nenhum palestrante disponível</p>
          )}
        </SpeakerList>
      </SpeakersContainer>
    </>
  );
}
