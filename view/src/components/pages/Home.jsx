import Card from "../layouts/Card";

function Home() {

    const ratingTest = {
        value: 4,
        review: 1546
    }

    return (
        <div className="p-5">
            <div id="carouselExampleIndicators" className="carousel slide mb-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/1200/350/?random=1" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1200/350/?random=2" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1200/350/?random=3" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row">
                <div className="d-flex  col-9 row">
                    <Card id={1} image={'https://picsum.photos/300/300/?random=4'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                    <Card id={1} image={'https://picsum.photos/300/300/?random=5'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                    <Card id={1} image={'https://picsum.photos/300/300/?random=6'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                    <Card id={1} image={'https://picsum.photos/300/300/?random=7'} name={"Card 1"} price={2000} rating={ratingTest} spaceClass={`col-lg-4 col-md-6`} />
                </div>

                <div className="col-3 ">
                    a
                </div>
            </div>

        </div>
    )
}

export default Home;