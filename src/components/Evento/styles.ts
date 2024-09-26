import styled from 'styled-components';

// Estilo do container de cada cartão (evento)
export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 250px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  margin-left: 20%;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-left: 0%;
    max-width: 200px;
    height: 200px;
    max-height: 230px;
  }

  @media (max-width: 480px) {
    height: 200px;
    max-height: 230px;
  }
`;

// Estilo da imagem do cartão
export const CardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;

  @media (max-width: 768px) {
    height: 60%;
  }

  @media (max-width: 480px) {
    height: 55%;
  }
`;

// Estilo do conteúdo do cartão (informações)
export const CardContent = styled.div`
  padding: 10px;
  width: 100%;
`;

// Título do cartão (evento)
export const CardTitle = styled.h3`
  font-size: 16px;
  margin-left: 5px;
  padding: 3px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// Informações adicionais do cartão
export const CardInfo = styled.div`
  font-size: 12px;
  color: gray;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

// Container da grade (layout responsivo)
export const GridContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px;
  margin: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
`;

// Título da seção
export const SectionTitle = styled.h3`
  font-size: 24px;
  margin: 20px 0;
  margin-left: 80px;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 60px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 40px;
  }
`;
