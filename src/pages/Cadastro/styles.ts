import styled from "styled-components"



export const Container = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    padding-top: 20px;
    padding-bottom: 100px;
`


export const FormStyled = styled.form`
    row-gap: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Aviso = styled.div`
    width: 250px;
    
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    margin-top: 20px;
`

export const Text = styled.p`
    font-weight: bold;
    font-size: small;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`


export const TextAreaMinicurriculo = styled.textarea`
    width: 20vw;
    height: 100px;
    resize: none;

    &::placeholder {
        background-color: #D4DCFF;
    }

    @media (max-width: 810px) {
        width: 50vw;
        height: 125px;
    }

    @media (max-width: 480px) {
        width: 80vw;
        height: 130px;
    }
`

export const SouPalestrante = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 20px;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const CheckPalestrante = styled.input`
    width: 20px;
    height: 20px;

    cursor: pointer;

    accent-color: #87A2FF;
`

export const LabelPalestrante = styled.label`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
`