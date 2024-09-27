import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const SectionContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const SectionTitle = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    resize: vertical; /* Permite redimensionar apenas na vertical */
  }
`;

export const Botao = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  width: 100%; // Botão ocupa toda a largura do contêiner

  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3; // Muda a cor ao passar o mouse
  }
`;
