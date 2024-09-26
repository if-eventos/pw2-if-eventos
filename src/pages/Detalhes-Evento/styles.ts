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
  }
`;

// Header
export const HeaderContainer = styled.header`
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 250px;
  }

  @media (max-width: 480px) {
    max-height: 180px;
  }
`;

export const Date = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 15px;
  text-align: left;
  margin-left: 135px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 10px;
  }

`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 10px;
  text-align: left;
  margin-left: 135px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-left: 10px;
  }

`;

export const Title2 = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 60px;
  text-align: left;
  margin-left: 135px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const globalContainer = styled.div`
  max-width:70%;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

// Event Details
export const EventContainer = styled.section`
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  color: #505050;
  line-height: 1.5;
  max-width: 70%;
  text-align: justify;
  margin-left: 140px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 20px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 10px;
    max-width: 95%;
  }
  
`;

export const TitleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    width: 75px;
    text-align: center;
    margin-right: 10px;
    
  }

  @media (max-width: 480px) {
    font-size:12px;
    padding: 10px;
    margin: 10px;

  }

`;

// Location
export const LocationContainer = styled.section`
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
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
