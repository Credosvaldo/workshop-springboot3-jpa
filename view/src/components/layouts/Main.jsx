import styles from './css/Main.module.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Order from '../pages/Order'
import Product from '../pages/Product'
import Search from '../pages/Search'
import User from '../pages/User'
import Confirm from '../pages/Confirm'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


function Main() {

    return (
        <main className={`container ${styles.main}`}>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/order' Component={Order} />
                <Route path='/product/{id}' Component={Product} />
                <Route path='/search' Component={Search} />
                <Route path='/user' Component={User} />
                <Route path='/confirm' Component={Confirm} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={Signup} />
            </Routes>

        </main>
    )
}

export default Main