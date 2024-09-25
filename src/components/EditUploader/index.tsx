import { FaEdit } from 'react-icons/fa'; // Importando o ícone de edição

type Props = {
    image: File | undefined
    setImage: (image: File | undefined) => void
}

export function EditUploader({ image, setImage }: Props) {

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    return (
        <div style={{ position: 'relative', width: '20px', height: '20px' }}>
            <label htmlFor="image-banner" style={{ cursor: 'pointer' }}>
                {/* Exibição da imagem ou do fundo padrão */}
                {image ? (
                    <img 
                        src={URL.createObjectURL(image)} 
                        alt="event-banner" 
                        style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }} 
                    />
                ) : (
                    <div 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            borderRadius: '20%', 
                            alignItems: 'center',
                            textAlign: 'center',
                            cursor: 'pointer',
                            padding: '2px',
                            marginTop: '60px',
                            marginRight: '100px'
                            
                        }}
                    >
                        <FaEdit style={{ fontSize: '24px', color: '#000000' }} /> {/* Ícone dentro do círculo */}
                    </div>
                )}
            </label>      

            <input type="file" name="image-banner" id="image-banner" hidden={true} onChange={handleImage} />
        </div>
    );
}
