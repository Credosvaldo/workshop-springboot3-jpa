function Card({id, image, name, rating, price}) {
    
    return (
        <div>
            <img src={image} alt="Imagem do produto" />
            <p>{name}</p>
            <div>
                <p> {rating.value} </p>
                <p>  </p>
            </div>
            <h1>R$: {price}</h1>
        </div>
    )
}

export default Card