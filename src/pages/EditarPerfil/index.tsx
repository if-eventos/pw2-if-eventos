import { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Main, Container, TitleConfig, Profile, AvatarProfile, InfoUser, Form, Botoes, BotaoCancelar, BotaoSalvar } from './StyledComponents';
import { api } from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaUpdate, UserSchemaUpdateType } from '../../utils/patchValidation';
import { EditUploader } from '../../components/EditUploader';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



export default function EditarPerfil() {
    const auth = useContext(AuthContext); // Acessando o contexto de autenticação
    const [image, setImage] = useState<File | undefined>(undefined); // Para manipular a imagem de perfil
    const navigate = useNavigate();

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

    

    let callCount = 0;
    async function handleUpdate(data: UserSchemaUpdateType) {

        console.log('URL base:', api.getUri());
        console.log('Palestrantes:', auth);


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
                toast.success('Perfil atualizado!');
                if (auth.user?.id !== undefined) {
                    auth.setUser({
                        ...auth.user,
                        name: data.name || '',
                        email: data.email || '',
                        telefone: data.telefone || '',
                        image: image ? URL.createObjectURL(image) : auth.user?.image || '',
                        id: auth.user.id,  // Certifique-se de que o id está definido
                    });
                }
                
                
                

                console.log('Perfil atualizado com sucesso!');
                // Aqui você pode adicionar uma notificação de sucesso ou redirecionar o usuário
            } else {
                console.error('Erro ao atualizar perfil:', response.status);
                toast.error('Erro ao atualizar'); 
            }
        } catch (error) {
            console.error("Erro ao atualizar perfil:", error);

        }
        callCount++;
        console.log(`handleUpdate foi chamada ${callCount} vezes`);
    }

    function handleCancel() {
        navigate('/'); 
    }


    return (

        <Main style={{ overflowX: 'hidden' }}>
            <motion.div initial={{x: 1000}} animate={{x: 0}} exit={{x: window.innerWidth}} style={{width: '100%'}}>
                <Container>
                    {/* Título da página */}
                    
                    <TitleConfig>Configurações</TitleConfig>
                    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
                    <Profile>
                        {/* Perfil e ícone de editar foto */}
                        <AvatarProfile>
                            <img src={`${api.getUri()}${auth.user?.image}`} alt={'foto perfil'} style={{ height: '70px', borderRadius: '50%', width: '70px'}} />
                            <EditUploader image={image} setImage={setImage} />
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
                            <input type='text' {...register("telefone")} style={{ marginLeft: '19px' }} />
                            {errors.telefone && <span>{errors.telefone.message}</span>}
                        </label>
                        
                        <Botoes>
                            <BotaoCancelar type="button" onClick={handleCancel}>Cancelar</BotaoCancelar>
                            <BotaoSalvar type="submit">Salvar</BotaoSalvar>
                        </Botoes>
                    </Form>

                </Container>
            </motion.div>
        </Main>
    );
}
