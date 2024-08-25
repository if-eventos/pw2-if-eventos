import styles from './editar-perfil.module.css'

export default function EditarPerfil() {
    return (
        <main>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* Titutlo da página */}
                    <h4 className={styles.titleconfig}>Configurações</h4>

                    <div className={styles.profile}>
                            {/* Perfil e icon de editar foto */}
                        <div className={styles.avatarProfile}>
                            <img src="sua-imagem.png" className={styles.imgAvatar} alt="Foto de perfil" ></img>
                            <img src="icone-editar.png" alt="Ee" className='iconEdit'></img>
                        </div>

                        {/* Informações do usuário */}
                        <div className={styles.infoUser}>
                            <p><strong>Thalyson Rian Mendes da Silva</strong></p>
                            <p>Thalyson@gmail.com</p>
                        </div>
                    </div>

                    {/* Formulário para alterar informações do usuário */}
                    <div className={styles.form}>
                        <label>
                            Nome
                            <input style={{marginLeft: '36px'}} type='text' value="Thalyson Rian Mendes da Silva" />
                        </label>
                        <label>
                            Email
                            <input style={{marginLeft: '36px'}} type="email" value="Thalyson@gmail.com" />   
                        </label>    
                        <label>
                            Telefone
                            <input type="telefone" value="(83)998675926" />
                        </label>
                    </div>

                    {/* Botoes para cancelar e salvar alterações*/}
                    <div className={styles.botoes}>
                        <button className={styles.botaoCancelar}> Cancelar </button>
                        <button className={styles.botaoSalvar}> Salvar Alterações</button>
                    </div>
                </div>
            </div>
        </main>
    )
}