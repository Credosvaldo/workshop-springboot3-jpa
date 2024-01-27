import Stars from "./Stars"

import styles from './css/Rating.module.css'

function Rating({rating}) {

    return (
        <div className={styles.rating}>
            <p>{Math.round(rating.value).toFixed(1)}</p>
            <Stars ratingValue={rating.value}/>
            <p>({rating.review})</p>
        </div>
    )
}

export default Rating