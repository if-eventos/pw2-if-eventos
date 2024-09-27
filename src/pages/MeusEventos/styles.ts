import styled from 'styled-components';

export const EventosContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
  gap: 20px; 
  margin: 20px; 
`;

// EventoWrapper
export const EventoWrapper = styled.div`
  flex: 1 1 calc(33.333% - 40px); 
  box-sizing: border-box; 
  max-width: 33.333%; 
  min-width: 300px; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

// Botão estilizado
export const Botao = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px; 
  margin-left: auto; 
  margin-right: auto; 

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
