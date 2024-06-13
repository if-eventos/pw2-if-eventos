import styles from './Button.module.css'


type Props = {
    name: string,
    color: string,
    backgroundColor: string
}


export default function Button({name, color, backgroundColor }:Props) {
    return (
        <button 
        className={styles.button}
        style={{color: color, backgroundColor: backgroundColor}}
        >
            {name}
        </button>
    )
}

