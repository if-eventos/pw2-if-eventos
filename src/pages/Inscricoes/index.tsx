import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { CardContainer, CardContent, CardImage, CardInfo, CardTitle, GridContainer } from "../../components/Evento/styles";
import { AiFillCalendar, AiFillFileText } from "react-icons/ai";

interface Event {
    id: number;
    nome: string;
    descricao: string;
    image: string;
    data_hora: string;
    categoria: string;
}


export default function Inscricoes() {
    const [inscricoes, setInscricoes] = useState<Event[]>([])

    const getInscricoes = async () => {
        try {
          const response = await api.get('/api/v1/evento/inscritos/');
          console.log(response.data)
          if (Array.isArray(response.data.eventos)) {
            setInscricoes(response.data.eventos);
          } else {
            console.error('A resposta não contém um array chamado evento:', response.data);
          }
        } catch (error) {
          console.error('Erro ao buscar eventos:', error);
        }
      };
    
      useEffect(() => {
        getInscricoes();
      }, []);




    return (
        inscricoes.length > 0 
        ?
        (
            <div>
                <GridContainer>
                    {inscricoes
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
            </div>
        ) 
        :
        (
            <></>
        )
    )
}