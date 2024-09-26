import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../api/axios';

// Definindo a interface para os dados do evento
interface Evento {
  id: number;
  nome: string;
  descricao: string;
  data_hora: string;
  local_ou_link: string; // Certifique-se de que isso corresponde ao seu modelo
}

const MeusEventos: React.FC = () => {
  const { user } = useAuth(); // Pega o usuário autenticado
  const [eventos, setEventos] = useState<Evento[]>([]); // Define que o estado é uma lista de eventos

  useEffect(() => {
    const fetchEventos = async () => {
      if (user) {
        try {
          // Ajustar para garantir que a URL está correta
          const response = await api.get(`/api/v1/evento/user/${user.id}`); 
          setEventos(response.data.eventos); // Ajustar para usar a estrutura correta da resposta
        } catch (error) {
          console.error("Erro ao buscar eventos:", error);
        }
      }
    };

    fetchEventos();
  }, [user]);

  if (!eventos.length) {
    return <div>Você ainda não criou nenhum evento.</div>;
  }

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeusEventos;
