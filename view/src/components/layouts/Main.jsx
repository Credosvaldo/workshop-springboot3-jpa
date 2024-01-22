import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from '../pages/Home'
import Order from '../pages/Order'
import Product from '../pages/Product'
import Search from '../pages/Search'
import User from '../pages/User'
import Confirm from '../pages/Confirm'


function Main() {

    return (
        <div className='bg-primary vh-100'>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/order' Component={Order} />
                <Route path='/product/{id}' Component={Product} />
                <Route path='/search' Component={Search} />
                <Route path='/user' Component={User} />
                <Route path='/confirm' Component={Confirm} />
            </Routes>

        </div>
    )
}

export default Main