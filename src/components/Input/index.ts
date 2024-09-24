import styled from "styled-components"


export const InputStyled = styled.input<{ $iconPath: string }>`
    height: 40px;
    width: 20vw;

    padding-left: 40px;
    background: url(${props => props.$iconPath}) no-repeat left;
    background-position: 15px 10px; 
    background-size: 20px;

    background-color: #D4DCFF;

    border: solid 0px;
    border-radius: 8px;

    font-size: medium;

    @media (max-width: 810px) {
        width: 50vw;
    }

    @media (max-width: 480px) {
        width: 80vw;
    }
`