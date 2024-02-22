import CardPedido from "../layouts/CardPedido";

function Order() {

    return (
        <div >
            <h1 className="text-center mt-5 mb-4">Meus Pedidos</h1>

            <div>
                <CardPedido />
                <CardPedido />
                <CardPedido />
            </div>
        </div>
    )
}

export default Order;