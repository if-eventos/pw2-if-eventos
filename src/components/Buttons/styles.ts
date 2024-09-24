import styled from 'styled-components';

export const ButtonStyled = styled.button<{$type?: string; }>`

    color: ${props => props.$type === 'login' ? 'white' : '#51367C' };
    background-color: ${props => props.$type === 'login' ? '#51367C' : 'white'};

    width: 107px;
    height: 35px;
    margin: 0px 7px;
    border-radius: 8px;
    border: solid 2px #51367C;
    cursor: pointer;
    font-weight: bolder;
    transition: 0.1s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const PageButtonStyled = styled.button`

    color: #51367C;
    background-color: white;

    width: 107px;
    height: 35px;
    margin: 0px 7px;

    border: none;
    border-bottom: solid 2px #51367C;

    cursor: pointer;
    font-weight: bolder;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {

        margin: 0px;
        width: 100%;
        text-align: left;
        padding-left: 20px;
    }
`


export const LoginButtonStyled = styled.button`
    color: white;
    background-color: #51367C;

    width: 107px;
    height: 35px;
    margin: 0px 7px;
    border-radius: 8px;
    border: solid 2px #51367C;
    cursor: pointer;
    font-weight: bolder;
    transition: 0.1s;

    &:hover {
        transform: scale(1.1);
    }
`

export const CadastroButtonStyled = styled.button`
    color: #51367C;
    background-color: white;

    width: 107px;
    height: 35px;
    margin: 0px 7px;
    border-radius: 8px;
    border: solid 2px #51367C;
    cursor: pointer;
    font-weight: bolder;
    transition: 0.1s;

    &:hover {
        transform: scale(1.1);
    }
`

export const SairButtonStyled = styled.button`
    color: #EA1919;
    background-color: transparent;

    cursor: pointer;

    width: 83px;
    height: 35px;

    border: none;
    border-bottom: solid 3px transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
        border-bottom: solid 3px #EA1919;
        transform: scale(1.1);
    }
`