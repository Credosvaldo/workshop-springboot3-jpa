import styles from './css/MostRewidItems.module.css'
import HorizontalCard from './HorizontalCard'

function MostRewidItems() {

    const ratingTest = {
        value: 4,
        review: 1546
    }
    
    return (
        <div className={styles.mostRewidItems}>
            <h3>Most Rewid Items</h3>

            <div>
                <HorizontalCard id={1} image={'https://picsum.photos/300/300/?random=4'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                <HorizontalCard id={1} image={'https://picsum.photos/300/300/?random=5'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                <HorizontalCard id={1} image={'https://picsum.photos/300/300/?random=6'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                <HorizontalCard id={1} image={'https://picsum.photos/300/300/?random=7'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
            </div>
        </div>
    )
}


export default MostRewidItems