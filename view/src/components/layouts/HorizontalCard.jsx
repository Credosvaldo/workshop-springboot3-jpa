import styles from './css/HorizontalCard.module.css'
import Rating from './Rating'

function HorizontalCard({ id, image, name, rating, price, spaceClass }) {

    return (
        <div className={`${styles.card} d-flex`}>
            <div className='col-3'>
                <img src={image} alt="Imagem do produto" />
            </div>

            <div className={`col-9 ${styles.textBox}`}>
                <p className={styles.title}>{name}</p>
                <h6>R$: {price}</h6>
                <Rating rating={rating} />
            </div>

        </div>
    )
}

export default HorizontalCard