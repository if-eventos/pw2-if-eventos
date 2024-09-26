import styled from "styled-components"


export const LabelStyled = styled.label`
    width: fit-content; 
    height: fit-content;

`

export const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`

export const BannerUploaderStyled = styled.img`
    width: 100%;
    max-width: 500px;
    aspect-ratio: 5/2;
    object-fit: cover;

    cursor: pointer;

    border-radius: 8px;

    margin-bottom: 25px;
`


export const ProfilePictureUploaderStyled = styled.img`
    width: 100%;
    max-width: 100px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;

    cursor: pointer;
`