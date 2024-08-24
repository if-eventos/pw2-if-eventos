import styled from 'styled-components';

export const Button = styled.button<{$type?: string; }>`

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