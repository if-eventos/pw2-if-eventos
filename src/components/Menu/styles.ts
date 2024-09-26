import styled from "styled-components";

export const Container = styled.div`
    /* background-color: aqua; */
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px black;

    background-color: #FFF;

    @media (max-width: 810px) {
      flex-flow: row wrap;
      height: max-content;
    }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 89px;

  @media (max-width: 810px) {
    padding-left: 0px;
  }
`;

export const AuthContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 34px;

  @media (max-width: 810px) {
    width: 100%;
    padding-right: 0px;

    border-top: solid 1px #51367C;
  }
`;


export const OpenMenu = styled.div`

  display: none;

  @media (max-width: 810px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 64px;

    cursor: pointer;
  }
`;



export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: max-content;
  height: max-content;

  /* cursor: pointer; */


  @media (max-width: 810px) {
    width: 100%;
    flex-direction: column;
  }
`;


export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: max-content;
  height: max-content;

  cursor: pointer;


  @media (max-width: 810px) {
    width: 100%;
    background-color: bisque;
    flex-direction: column;
    align-items: start;
  }
`;