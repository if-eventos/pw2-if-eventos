// styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #2f4b7c;
  padding: 30px;
  color: white;
  text-align: center;
  h1 {
    margin: 0;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 250px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  margin-left:100px
`;

export const CardImage = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin-left: 5px;
  padding: 3px;
`;

export const CardInfo = styled.div`
  font-size: 12px;
  color: gray;
  margin-left: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 3%;
  padding: 10px;
  margin : 20px;
  `;

export const SectionTitle = styled.h2`
  font-size: 30px;
  margin: 20px 0;
  margin-left: 80px;
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Botao = styled.button`
  cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translate(10px, 20px);
    }

`;