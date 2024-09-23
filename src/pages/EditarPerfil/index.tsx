import React, { useContext, useState, useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Main, Container, TitleConfig, Profile, AvatarProfile, InfoUser, Form, Botoes, BotaoCancelar, BotaoSalvar } from './StyledComponents';
import { api } from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaUpdate, UserSchemaUpdateType } from '../../utils/patchValidation';
import { ImageUploader } from '../../components/ImageUploader';

type FormValues = {
    name?: string ;
    email?: string;
    telefone?: string;
};



export default function EditarPerfil() {
    const auth = useContext(AuthContext); // Acessando o contexto de autenticação
    const [image, setImage] = useState<File | undefined>(undefined); // Para manipular a imagem de perfil
    const [cont, setCont] = useState(0);

    const { 
        register, 
        handleSubmit, 
        setValue, 
        formState: { errors } 
    } = useForm<UserSchemaUpdateType>({
        resolver: zodResolver(UserSchemaUpdate),  // Validação com Zod para atualização
    });

    // Preencher os campos com dados do usuário ao montar o componente
    useEffect(() => {
        if (auth.user) {
            setValue("name", auth.user.name);
            setValue("email", auth.user.email);
            setValue("telefone", auth.user.telefone || '');
        }
    }, [auth.user, setValue]);

    // Função para enviar os dados do formulário

    const onSubmit: SubmitHandler<FormValues> = data => {
        setCont(prevCont => prevCont + 1);
        console.log('Formulário submetido');
        console.log('Dados:', data);
        console.log(`handleSubmit foi chamado ${cont + 1} vezes`);
    };

    console.log(`Componente renderizado ${cont} vezes`);

    let callCount = 0;
    async function handleUpdate(data: UserSchemaUpdateType) { // Corrigido o tipo aqui

        


        console.log('está entrando o handleUpdate')
        const requestBody = new FormData();
        requestBody.append('name', data.name || '');
        requestBody.append('email', data.email || '');
        requestBody.append('telefone', data.telefone || '');
        console.log(data.name)

        if (image) {
            requestBody.append('image', image);
        }

        try {
            const response = await api.patch(`/api/v1/user/atualizarUser`, requestBody, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.status === 200) {
                console.log('Perfil atualizado com sucesso!');
                // Aqui você pode adicionar uma notificação de sucesso ou redirecionar o usuário
            } else {
                console.error('Erro ao atualizar perfil:', response.status);
            }
        } catch (error) {
            console.error("Erro ao atualizar perfil:", error);

        }
        callCount++;
        console.log(`handleUpdate foi chamada ${callCount} vezes`);
    }

    

    return (
        <Main>
            <Container>
                {/* Título da página */}
                <TitleConfig>Configurações</TitleConfig>

                <Profile>
                    {/* Perfil e ícone de editar foto */}
                    <AvatarProfile>
                        <img src={`${api.getUri()}${auth.user?.image}`} alt={'foto perfil'} style={{ height: '70px', borderRadius: '50%', width: '70px' }} />
                        <button style={{ cursor: "pointer" }}>
                            <img src="icone-editar.png" alt="Editar" style={{ position: 'absolute', bottom: '0', right: '0', width: '20px', height: '20px', color: 'white' }} />
                        </button>
                    </AvatarProfile>

                    {/* Informações do usuário */}
                    <InfoUser>
                        <p><strong>{`${auth.user?.name}`}</strong></p>
                        <p>{`${auth.user?.email}`}</p>
                    </InfoUser>
                </Profile>

                {/* Formulário para alterar informações do usuário */}
                <Form onSubmit={handleSubmit(handleUpdate)}>
                    <label>
                        Nome
                        <input type='text' {...register("name")} style={{ marginLeft: '36px' }} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </label>
                    <label>
                        Email
                        <input type='email' {...register("email")} style={{ marginLeft: '36px' }} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </label>
                    <label>
                        Telefone
                        <input type='text' {...register("telefone")} style={{ marginLeft: '36px' }} />
                        {errors.telefone && <span>{errors.telefone.message}</span>}
                    </label>
                    <ImageUploader image={image} setImage={setImage} />
                    <Botoes>
                        <BotaoCancelar type="button">Cancelar</BotaoCancelar>
                        <BotaoSalvar type="submit">Salvar</BotaoSalvar>
                    </Botoes>
                </Form>

            </Container>
        </Main>
    );
}
