import Rating from "./Rating"

import styles from './css/Card.module.css'


function Card({id, image, name, rating, price, spaceClass}) {
    
    return (
        <div className={`${styles.cardSpace} ${spaceClass}`}>
            <div className={styles.card}>
                <img src={image} alt="Imagem do produto" />
                <p className={styles.title}>{name}</p>
                <Rating rating={rating} />
                <h2>R$: {price}</h2>
            </div>

        </div>
    )
}

export default Card