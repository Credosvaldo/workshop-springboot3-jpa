import styles from './css/Button.module.css'

function Button({name, kind, type, action}) {


    return (
        <div>
            <button onClick={action} type={type} className={`${styles.button} ${styles[kind]}`}>{name}</button>
        </div>
    )
}

export default Button