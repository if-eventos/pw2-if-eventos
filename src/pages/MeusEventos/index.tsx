import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../api/axios';
import { Botao } from './styles';
import { useNavigate } from 'react-router-dom'; 

// Definindo a interface para os dados do evento
interface Evento {
  id: number;
  nome: string;
  descricao: string;
  data_hora: string;
  local_ou_link: string;
  longitude: string;
  latitude: string;
  createBy: number;
  categoria: string;
  image: string;
}

const MeusEventos: React.FC = () => {
  const { user } = useAuth(); // Pega o usuário autenticado
  const [eventos, setEventos] = useState<Evento[]>([]); // Define que o estado é uma lista de eventos
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado de erro
  const navigate = useNavigate(); 


  useEffect(() => {
    const fetchEventos = async () => {
      if (user) {
        try {
          const response = await api.get(`/api/v1/evento/teste/${user.id}`);
          if (response.data && response.data.eventos) {
            const eventos = response.data.eventos as Evento[]
            console.log(eventos); // Log para verificação
            setEventos(eventos);
          }
        } catch (error) {
          console.error("Erro ao buscar eventos:", error);
        }
      }
    };
  
    fetchEventos();
  }, [user]);
  

  // Exibe uma mensagem de erro se ocorrer algum problema na requisição
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe um placeholder de carregamento enquanto os dados estão sendo buscados
  // if (loading) {
  //   return <div>Carregando seus eventos...</div>;
  // }

  // Se não houver eventos, mostrar uma mensagem apropriada
  // if (!eventos.length) {
  //   return <div>Você ainda não criou nenhum evento.</div>;
  // }

  const handleEditEvent = (id: Number) => {
    navigate(`/editar-evento/${id}`); 
  };
  return (
    <div>
      <h1>Meus Eventos</h1>
      <div className="eventos-container">
        {eventos.map(evento => (
          <div key={evento.id} className="evento-card">
            <h2>{evento.nome}</h2>
            <p>{evento.descricao}</p>
            <p>{new Date(evento.data_hora).toLocaleString()}</p>
            <a href={evento.local_ou_link} target="_blank" rel="noopener noreferrer">Site Oficial</a>
            <Botao onClick={() => handleEditEvent(evento.id)}>Editar Evento</Botao>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeusEventos;
