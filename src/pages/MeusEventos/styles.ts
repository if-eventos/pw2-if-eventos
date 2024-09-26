import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  margin: 20px 0;
  color: #2f4b7c;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  h3 {
    color: #2f4b7c;
    margin-bottom: 10px;
  }
`;

export const EventDetails = styled.div`
  p {
    margin: 5px 0;
    font-size: 14px;
  }
  strong {
    color: #555;
  }
`;
