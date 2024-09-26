import styled from "styled-components"



export const Container = styled.div`
    row-gap: 50px;

    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 200px;
`

export const FormStyled = styled.form`
    /* row-gap: 20px; */
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCategoria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


    width: 20vw;

    @media (max-width: 810px) {
        width: 50vw;
    }

    @media (max-width: 480px) {
        width: 80vw;
    }

`

export const LabelCategoria = styled.label`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
`

export const Categoria = styled.select`
    width: 130px;
    height: 30px;
`