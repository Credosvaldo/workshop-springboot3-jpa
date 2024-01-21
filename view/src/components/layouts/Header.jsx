import logo from '../../img/logo.png'

import { FaUser, FaCartShopping, FaHeart } from 'react-icons/fa6'

import SearchBar from './SearchBar'

function Header() {

    return (
        <div>
            <div className="d-flex justify-content-between px-5 align-items-center bg-color-1">
                <img className='logo' src={logo} alt="Logo" />


                <SearchBar></SearchBar>


                <div className='text-white d-flex'>
                    <h1 className='mx-2'> <FaCartShopping ></FaCartShopping> </h1>
                    <h1 className='mx-2'> <FaHeart></FaHeart> </h1>
                    <h1 className='mx-2'> <FaUser></FaUser> </h1>
                </div>

            </div>

            <div className='d-flex bg-color-2 justify-content-between p-2 text-white fw-bold'>
                <div>Categoria 1</div>
                <div>Categoria 2</div>
                <div>Categoria 3</div>
                <div>Categoria 4</div>
                <div>Categoria 5</div>
                <div>Categoria 6</div>
                <div>Categoria 7</div>
            </div>
        </div>
    )
}

export default Header