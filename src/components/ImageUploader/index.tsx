
type Props = {
    image: File | undefined
    setImage: (image:File| undefined) => void
}


export function ImageUploader({ image, setImage }:Props) {

    function handleImage(e:React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setImage(e.target.files[0])
        }
    }

    return (
        <div>
            <label htmlFor="image-banner" style={{width: 'fit-content', height: 'fit-content'}}>

                { 
                    image ?
                    (
                        <img src={ URL.createObjectURL(image) } 
                            alt="event-banner" 
                            style={{maxWidth: '200px', maxHeight: '200px', cursor: 'pointer'}}/>
                    ) 
                    : 
                    (
                        <div style={{width: '200px', height: '50px', backgroundColor: '#D4DCFF', cursor: 'pointer'}}>
                            Selecione uma imagem
                        </div>
                    )
                }
            </label>
            <input type="file" name="image-banner" id="image-banner" hidden={true}
                onChange={handleImage} />
        </div>
    )
}