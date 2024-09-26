// styles.ts
import styled from 'styled-components';

export const SectionContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const HeaderContainer = styled.div`
  background-color: #2f4b7c;
  padding: 30px;
  color: white;
  max-height: 150px;
  text-align: center;
  h1 {
    margin: 0;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const SectionTitle = styled.h2`
font-size: 30px;
margin: 20px 0;
margin-left: 80px;
`;

export const Botao = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  position: absolute;
  bottom: 20px;
  right: 30px;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;