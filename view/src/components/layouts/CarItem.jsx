import styles from './css/CarItem.module.css'

import { FaPlus, FaWindowMinimize   } from "react-icons/fa6";

import MiniNumberInput from './MiniNumberInput'

function CarItem() {


    return (
        <div className={styles.carItem}>
            <div className={styles.start}>
                <img src="https://picsum.photos/100/100/?random=8" alt="foto do produto" />
                <h1>Titulo do produto</h1>
            </div>

            <div className={styles.prices}>
                <p>Preço por unidade: <span>2</span> </p>
                <p>Preço total: <span>10</span></p>
            </div>


            <div className={styles.quantity}>
                <FaPlus />
                <MiniNumberInput />
                <FaWindowMinimize className={styles.correcao} />
            </div>


        </div>
    )
}


export default CarItem