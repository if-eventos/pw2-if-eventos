// src/App.tsx
import { useContext, useEffect, useState } from 'react';
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
import { AuthContext } from '../../context/AuthContext';



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
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [participando, setParticipando] = useState(false);
  const auth = useContext(AuthContext);

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

  useEffect(() => {
    // Verifica se o usuário já está participando do evento ao montar o componente
    const verificarParticipacao = async () => {
      try {
        const response = await api.get(`/api/v1/ouvinte/readAll/${id}`);
        const users = response.data['user'];

        // Verifica se o usuário logado está na lista de participantes
        if (Array.isArray(users)) {
          setParticipantes(users);
          const userId = auth.user?.id
          const isParticipando = users.some((user) => user.id === userId);
          setParticipando(isParticipando);  // Atualiza o estado de participação
        }
      } catch (error) {
        console.error('Erro ao verificar participação:', error);
      }
    };

    verificarParticipacao();
  }, [id]);






  if (!evento) {
    return <div>Carregando detalhes do evento...</div>;
  }

  const participarDoEvento = async () => {
    try {

      // Adiciona o usuario no evento desejado
      await api.post(`/api/v1/ouvinte/adicionar/${id}`);

      // Atualiza a lista de participantes depois do cara clicar em participar do evento
      const response = await api.get(`/api/v1/ouvinte/readAll/${id}`);
      const users = response.data['user'];

      //Aqui ele vai verificar se o array é de fato um array/matriz :D
      if (Array.isArray(users)) {
        setParticipantes(users);
        console.log('Participantes após inscrição:', users);
      } else {
        console.error('error:', response.data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const sairDoEvento = async () => {
    try {
      await api.delete(`/api/v1/ouvinte/deletar/${id}`); // Assume que essa rota remove o ouvinte

      // Atualiza a lista de participantes após o usuário sair
      const response = await api.get(`/api/v1/ouvinte/readAll/${id}`);
      const users = response.data['user'];

      if (Array.isArray(users)) {
        setParticipantes(users);
        setParticipando(true);  // Atualiza o estado de participação
      }
    } catch (error) {
      console.error('Erro ao sair do evento:', error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Image src={`${api.getUri()}${evento.image}`} alt={evento.nome} />
        <Date>{evento.data_hora}</Date>
        <TitleButtonContainer>
          <Title>{evento.nome}</Title>
          {participando ? (
              <JoinButton onClick={sairDoEvento}>Sair</JoinButton>
            ) : (
              <JoinButton onClick={participarDoEvento}>Participar</JoinButton>
            )}
          
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
