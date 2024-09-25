import styled from "styled-components"



export const Container = styled.div`
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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