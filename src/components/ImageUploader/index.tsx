import no_image_event from "../../assets/no_image_event.png"
import { 
    BannerUploaderStyled,
    LabelStyled
 } from "./styles"

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
            <LabelStyled htmlFor="image-banner">
                <BannerUploaderStyled 
                    src={ image? URL.createObjectURL(image) : no_image_event } 
                    alt="event-banner" />
            </LabelStyled>

            <input type="file" name="image-banner" id="image-banner" hidden={true}
                onChange={handleImage} />
        </div>
    )
}