import styles from './css/CardPedido.module.css'

function CardPedido() {

    return (
        <div className={styles.cardPedido}>
            <div>
                <img src="https://picsum.photos/100/100/?random=9" alt="foto do produto pedido" />
            </div>

            <div>
                <h1>Titulo</h1>
                <h2>R$ 2.000</h2>
                <h2>Order Status</h2>
            </div>
        </div>
    )
}

export default CardPedido