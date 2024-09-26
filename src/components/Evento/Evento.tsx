import { CardContainer, CardImage, CardContent, CardTitle, CardInfo } from './styles';
import { AiFillCalendar, AiFillFileText } from 'react-icons/ai';
import { api } from '../../api/axios';
import { useNavigate } from 'react-router-dom';


interface Event {
    id: number;
    nome: string;
    descricao: string;
    image: string;
    data_hora: string;
    categoria: string;
}
interface Props {
    event: Event
}


export function Evento({event}:Props) {
    const navigate = useNavigate();

    const handleEventoClick = (id: number) =>{
        navigate(`/detalhes-evento/${id}`);
    }

    return (
        <CardContainer key={event.id} onClick={() => handleEventoClick(event.id)}>
            <CardImage src={`${api.getUri()}${event.image}`} alt={event.nome} />
            <CardContent>
                <CardTitle>{event.nome}</CardTitle>
                <CardInfo>
                    <AiFillCalendar /> {new Date(event.data_hora).toLocaleDateString()} <br />
                    <AiFillFileText /> {event.descricao}
                </CardInfo>
            </CardContent>
        </CardContainer>
    )
}