import React, { useContext, useEffect, useState } from 'react';
import { Main, Container, TitleConfig, Profile, AvatarProfile, ImgAvatar, InfoUser, Form, Botoes, BotaoCancelar, BotaoSalvar } from './StyledComponents';
import { api } from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';

interface User{
    name: string;
    email: string;
}

export default function EditarPerfil(){
    const auth = useContext(AuthContext); // Acessando o contexto de autenticação

    return (
        <Main>
            <Container>
                {/* Título da página */}
                <TitleConfig>Configurações</TitleConfig>

                <Profile>
                    {/* Perfil e ícone de editar foto */}
                    <AvatarProfile>
                        <img src={`${api.getUri()}${auth.user?.image}`} alt={'foto perfil'} style={{height:'70px',borderRadius: '50%', width: '70px'}} />
                        <button style={{cursor: "pointer"}}><img src="icone-editar.png" alt="Editar" style={{ position: 'absolute', bottom: '0', right: '0', width: '20px', height: '20px' , color: 'white'}} /></button>
                    </AvatarProfile>

                    {/* Informações do usuário */}
                    <InfoUser>
                        <p><strong>{`${auth.user?.name}`}</strong></p>
                        <p>{`${auth.user?.email}`}</p>
                    </InfoUser>
                </Profile>

                {/* Formulário para alterar informações do usuário */}
                <Form>
                    <label>
                        Nome
                        <input type='text' value={auth.user?.name} style={{ marginLeft: '36px' }} />
                    </label>
                    <label>
                        Email
                        <input type="email" value={auth.user?.email} style={{ marginLeft: '36px' }} />   
                    </label>    
                    <label>
                        Telefone
                        <input type="tel" value={auth.user?.telefone} />
                    </label>
                </Form>

                {/* Botões para cancelar e salvar alterações */}
                <Botoes>
                    <BotaoCancelar>Cancelar</BotaoCancelar>
                    <BotaoSalvar>Salvar Alterações</BotaoSalvar>
                </Botoes>
            </Container>
        </Main>
    )
}
