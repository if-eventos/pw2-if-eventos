import styles from './Button.module.css'


type Props = {
    name: string,
    color: string
}


export default function Button({name, color }:Props) {
    return (
        <button 
        className={
            `
            ${styles.button} 
            ${color === "WHITE" ? styles.whiteButton : styles.purpleButton}
            `
            }>
            {name}
        </button>
    )
}

