import styles from './css/MiniNumberInput.module.css'

function MiniNumberInput() {

    return (
        <div>
            <input className={styles.miniNumberInput} type="number" />
        </div>
    )
}

export default MiniNumberInput