import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

interface Evento {
  id: number;
  nome: string;
  descricao: string;
  data_hora: string;
  local_ou_link: string;
}

const MeusEventos: React.FC = () => {
  const { user } = useAuth();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventos = async () => {
      if (user) {
        try {
          const response = await api.get(`/api/v1/evento/user/${user.id}`); 
          setEventos(response.data.eventos);
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

  const handleEdit = (id: number) => {
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
            <button onClick={() => handleEdit(evento.id)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeusEventos;
