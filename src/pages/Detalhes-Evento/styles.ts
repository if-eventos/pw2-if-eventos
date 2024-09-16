// src/AppStyles.ts
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
  }
`;

// Header
export const HeaderContainer = styled.header`
  align-items: center;
  margin-bottom: 20px;
  witdh: 100%;
  max-width: 1580px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Date = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 15px;
  text-align: left;
  margin-left: 135px

`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 10px;
  text-align: left;
  margin-left: 135px
`;

export const Title2 = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 60px;
  text-align: left;
  margin-left: 135px
`;

export const globalContainer = styled.div`
  max-witdh:70%
`;

// Event Details
export const EventContainer = styled.section`
  margin: 20px 0;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  max-width: 70%;
  text-align: justify;
  margin-left: 140px
  
`;

export const TitleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0; /* Espaçamento opcional */
`;

export const JoinButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 140px;


  &:hover {
    background-color: #218838;
  }
`;

// Location
export const LocationContainer = styled.section`
  margin: 20px 0;
  text-align: center;
`;

export const MapImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
`;

// Speakers
export const SpeakersContainer = styled.section`
  margin: 40px 0;
  text-align: center;
`;

export const SpeakerList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const SpeakerCard = styled.div`
  text-align: center;
`;

export const SpeakerImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const SpeakerName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
