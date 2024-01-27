import {FaStar, FaRegStarHalfStroke, FaRegStar} from 'react-icons/fa6'

function Stars({ratingValue}) {

    ratingValue = Math.round(ratingValue * 2) / 2
    const starsArray = []

    while(starsArray.length < ratingValue - 0.5) {
        starsArray.push(
            ( <FaStar/> )
        )
    }

    if(ratingValue % 1 == 0.5) {
        starsArray.push(
            ( <FaRegStarHalfStroke /> )
        )
    }

    while(starsArray.length < 5) {
        starsArray.push(
            ( <FaRegStar /> )
        )
    }

    return (
        <div className='text-warning'>
            {starsArray}
        </div>
    )
}

export default Stars