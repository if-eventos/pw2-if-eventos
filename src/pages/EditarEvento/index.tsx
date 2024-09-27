import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/axios';
import { HeaderContainer, SectionContainer, SectionTitle, Botao } from './styles';

const EditarEvento: React.FC = () => {
    const { eventoId } = useParams(); 
    // const { eventoId } = useParams<{ eventoId: string }>(); // Obtendo o ID do evento a ser editado
    const navigate = useNavigate(); // Para redirecionar após a edição
    const [evento, setEvento] = useState<any>(null); // Estado para armazenar os dados do evento
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data_hora, setDataHora] = useState('');
    const [local_ou_link, setlocal_ou_link] = useState('');
    const [categoria, setCategoria] = useState('');
    const [image, setImage] = useState<File | undefined>(undefined); // Para manipular a imagem de perfil


    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await api.get(`/api/v1/evento/todos/${eventoId}`);
                const eventoData = response.data.evento;
                setEvento(eventoData);
                setNome(eventoData.nome);
                setDescricao(eventoData.descricao);
                setDataHora(eventoData.data_hora);
                setlocal_ou_link(eventoData.local_ou_link);
            } catch (error) {
                console.error("Erro ao buscar evento:", error);
            }
        };

        fetchEvento();
    }, [eventoId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevenir o comportamento padrão do formulário

        try {
            const updatedEvento = { nome, descricao, data_hora, local_ou_link };
            console.log(eventoId)
            //const id = Number(eventoId)
            await api.patch(`/api/v1/evento/atualize/${eventoId}`, updatedEvento);
            alert("Evento atualizado com sucesso!");
            navigate('/meus-eventos'); // Redirecionar após a atualização
        } catch (error) {
            console.error("Erro ao atualizar evento:", error);
        }
    };

    // if (!evento) {
    //     return <div>Carregando...</div>; // Exibir carregando enquanto os dados estão sendo buscados
    // }

    return (
        <div>
            <HeaderContainer>
                <h1>Editar Evento</h1>
            </HeaderContainer>
            <SectionContainer>
                <form onSubmit={handleSubmit}>
                    {/* <img src={`${api.getUri()}${evento.image}`} alt={evento.nome} /> */}

                    <SectionTitle>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </SectionTitle>

                    <SectionTitle>
                        <label>Descrição:</label>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </SectionTitle>

                    <SectionTitle>
                        <label>Data e Hora:</label>
                        <input
                            type="datetime-local"
                            value={data_hora}
                            onChange={(e) => setDataHora(e.target.value)}
                            required
                        />
                    </SectionTitle>

                    <SectionTitle>
                        <label>URL do Site Oficial:</label>
                        <input
                            type="url"
                            value={local_ou_link}
                            onChange={(e) => setlocal_ou_link(e.target.value)}
                        />
                    </SectionTitle>

                    <Botao type="submit">Salvar Alterações</Botao>
                </form>
            </SectionContainer>
        </div>
    );
};

export default EditarEvento;
