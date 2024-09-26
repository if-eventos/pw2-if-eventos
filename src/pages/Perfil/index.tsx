import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { HeaderContainer, SectionContainer, SectionTitle, Botao } from './styles';
import { api } from '../../api/axios';
import { useAuth } from '../../hooks/useAuth';

interface ProfileData {
  id: number;
  name: string;
  email: string;
  telefone: string;
  image: string; 
  minicurriculo?: string; 
  urlsite?: string; 
  curriculo_redesocial?: string; 
  ehPalestrante: number; 
}

const Perfil: React.FC = () => {
  const { user } = useAuth(); 
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const response = await api.get(`/api/v1/user/${user.id}`);
          setProfileData(response.data.user); 
        } catch (error) {
          console.error("Erro ao buscar dados do perfil:", error);
        }
      }
    };

    fetchProfileData();
  }, [user]);

  if (!profileData) {
    return <div>Carregando...</div>;
  }

  const imageUrl = `http://localhost:3000${profileData.image}`;

  const handleEditProfile = () => {
    navigate('/editar-perfil'); 
  };

  return (
    <div>
      <HeaderContainer>
        <h1>Perfil do Usuário</h1>
      </HeaderContainer>
      <SectionContainer>
        <img 
          src={imageUrl} 
          alt="Foto de perfil" 
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/100"; 
          }} 
          style={{height: '100px', marginLeft: '80px', borderRadius: '10%' }} 
        />
        
        <SectionTitle>
          <strong>Nome:</strong> {profileData.name}
        </SectionTitle>

        <SectionTitle>
          <strong>Email:</strong> {profileData.email}
        </SectionTitle>

        <SectionTitle>
          <strong>Telefone:</strong> {profileData.telefone}
        </SectionTitle>

        {profileData.minicurriculo && (
          <SectionTitle>
            <strong>Mini Currículo:</strong> {profileData.minicurriculo}
          </SectionTitle>
        )}

        {profileData.urlsite && (
          <SectionTitle>
            <strong>Website:</strong> <a href={profileData.urlsite} target="_blank" rel="noopener noreferrer">{profileData.urlsite}</a>
          </SectionTitle>
        )}

        {profileData.curriculo_redesocial && (
          <SectionTitle>
            <strong>Currículo nas Redes Sociais:</strong> <a href={profileData.curriculo_redesocial} target="_blank" rel="noopener noreferrer">{profileData.curriculo_redesocial}</a>
          </SectionTitle>
        )}

          <Botao onClick={handleEditProfile}>Editar Perfil</Botao>
      </SectionContainer>
    </div>
  );
};

export default Perfil;
