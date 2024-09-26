import styled from "styled-components"



export const ErrorMessage = styled.div`
    color: red;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    width: 20vw;
    height: 15px;

    margin-top: 3px;
    margin-bottom: 8px;

    @media (max-width: 810px) {
        width: 50vw;
    }

    @media (max-width: 480px) {
        width: 80vw;
    }
`

