import Filters from "../layouts/Filters";
import Results from "../layouts/Results";

function Home() {

    return (
        <div className="d-flex pt-5">
            <div>
                <Filters />
            </div>

            <div>
                <Results />
            </div>
        </div>
    )
}

export default Home;