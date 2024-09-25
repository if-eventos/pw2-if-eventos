// styles.ts
import styled from 'styled-components';

export const SectionContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;


export const HeaderContainer = styled.body`
  display: flex ;
  position: relative;
  width: 100%;
  color:white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    background-image: url('');
  }

  @media (max-width: 480px) {
    padding: 1px;
    background-image: url('');
  }

  

`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px; /* Ajuste a altura conforme necessário */

  
`;


export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const SectionTitle = styled.h2`
font-size: 30px;
margin: 20px 0;
margin-left: 80px;
`;

export const Botao = styled.button`
  cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translate(10px, 20px);
    }

`;
