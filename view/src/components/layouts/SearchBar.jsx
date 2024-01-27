import {FaMagnifyingGlass } from 'react-icons/fa6'

import styles from './css/SearchBar.module.css'

function SearchBar() {

    return (
        <div className={styles.searchBar}>
            <input className='form-control' placeholder='Buscar produtos' type="text" name="" id="" />
            <button className='bg-color-1 rounded-1 '> <FaMagnifyingGlass></FaMagnifyingGlass> </button>
        </div>
    )
}

export default SearchBar