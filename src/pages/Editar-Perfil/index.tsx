import React from 'react';
import { Main, Container, TitleConfig, Profile, AvatarProfile, ImgAvatar, InfoUser, Form, Botoes, BotaoCancelar, BotaoSalvar } from './StyledComponents';

export default function EditarPerfil() {
    return (
        <Main>
            <Container>
                {/* Título da página */}
                <TitleConfig>Configurações</TitleConfig>

                <Profile>
                    {/* Perfil e ícone de editar foto */}
                    <AvatarProfile>
                        <img src="foto.jpg" alt="Foto de perfil" style={{height:'70px',borderRadius: '40px'}} />
                        <img src="icone-editar.png" alt="Editar" style={{ position: 'absolute', bottom: '0', right: '0', width: '20px', height: '20px' }} />
                    </AvatarProfile>

                    {/* Informações do usuário */}
                    <InfoUser>
                        <p><strong>Thalyson Rian Mendes da Silva</strong></p>
                        <p>Thalyson@gmail.com</p>
                    </InfoUser>
                </Profile>

                {/* Formulário para alterar informações do usuário */}
                <Form>
                    <label>
                        Nome
                        <input type='text' value="Thalyson Rian Mendes da Silva" style={{ marginLeft: '36px' }} />
                    </label>
                    <label>
                        Email
                        <input type="email" value="Thalyson@gmail.com" style={{ marginLeft: '36px' }} />   
                    </label>    
                    <label>
                        Telefone
                        <input type="tel" value="(83)998675926" />
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
