import CarItem from "../layouts/CarItem";
import LinkButton from "../layouts/LinkButton";
import Button from "../layouts/Button";

function Confirm() {

    function buy() {

    }

    function clear() {

    }

    return (
        <div>
            <h1 className="text-center mt-5 mb-4">Carrinho de Compras</h1>

            <div>
                <CarItem />
            </div>

            <div className="d-flex justify-content-around mt-5">
                <LinkButton kind={'positive'} text={'Confirmar Compra'} to={'/order'} action={buy} />
                <Button action={clear} kind={'negative'} name={'Limpar Carrinho'} type={'button'} />
            </div>
        </div>
    )
}

export default Confirm;