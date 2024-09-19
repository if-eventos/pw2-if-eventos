import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
  background-image: url('./Design.svg');  /* Caminho relativo para a imagem */
  background-position: center;
  margin-top: 40px;
  overflow: hidden;
`;



export const Container = styled.div`
  background-color: white;
  max-width: 800px;
  width: 600px;
  max-height: 650px;
  height: 650px;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TitleConfig = styled.h4`
  color: white;
  background-color: #4F5D7C;
  padding: 15px;
  max-height: 59px;
  max-width: 800px;
  border-radius: 6px 6px 0px 0px;
  margin-bottom: 40px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const AvatarProfile = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;


export const ImgAvatar = styled.img`
  border-radius: 10%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  background-color: white;
`;

export const InfoUser = styled.div`
  margin-left: 10px;
  text-align: left;
`;

export const Form = styled.div`
  margin-left: 100px;
  margin-bottom: 80px;

  label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 50%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    box-sizing: border-box;
    background-color: #fafafa;
    margin-left: 20px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const BotaoCancelar = styled.button`
  background-color: #ffffff;
  color: #ff0019;
  border: 1px solid #ff0019;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 26%;
`;

export const BotaoSalvar = styled.button`
  background-color: #4F5D7C;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 26%;
`;
