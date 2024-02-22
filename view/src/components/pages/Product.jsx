import styles from './css/Product.module.css'

import Rating from "../layouts/Rating";
import Button from "../layouts/Button";
import LinkButton from '../layouts/LinkButton'

function Product() {

    const ratingTest = {
        value: 4.7,
        review: 1451
    }

    function buy() {
        console.log("So falando mesmo")
    }

    function addToTheCar() {

    }

    return (
        <div className={styles.product}>
            <div>
                <img src="https://picsum.photos/500/500/?random=8" alt="Foto do produto" />
            </div>

            <div className={styles.info}>
                <h1>Titulo</h1>
                <Rating rating={ratingTest} />

                <div>
                    <h2>Sobre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi sunt, reprehenderit praesentium laborum animi nobis quisquam, deleniti doloribus consectetur eaque dolores dolorum vitae aliquid reiciendis quis sapiente a architecto.</p>
                </div>

                <h2>R$ 2000</h2>

                <div className="d-flex justify-content-between">
                    <LinkButton action={buy} kind={'positive'} text={'Comprar'} to={'/'} />
                    <Button action={addToTheCar} kind={'negative'} name={'Adicionar ao Carrinho'} type={'button'} />
                </div>

            </div>

        </div>
    )
}

export default Product;