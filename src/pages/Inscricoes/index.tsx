import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { GridContainer } from "../../components/Evento/styles";
import { Evento } from "../../components/Evento/Evento";
import { Titulo } from "../../components/Titulo";
import { 
  NenhumEvento,
  ContainerTitulo 
} from "./styles.ts"

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
          <>
            <ContainerTitulo>
                <Titulo>
                  Suas inscrições:
                </Titulo>
            </ContainerTitulo>
            <GridContainer>
                {inscricoes
                .map(event => (
                  <Evento event={event} key={event.id}/>
                ))}
            </GridContainer>
          </>
        ) 
        :
        (
          <NenhumEvento>
            <Titulo>
              Você não se inscreveu em nenhum evento.
            </Titulo>
          </NenhumEvento>
        )
    )
}
