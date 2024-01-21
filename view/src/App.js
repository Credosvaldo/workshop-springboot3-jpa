import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './colors.css'

import Header from "./components/layouts/Header"
import Main from "./components/layouts/Main"
import Footer from "./components/layouts/Footer"
import SearchBar from "./components/layouts/SearchBar"


function App() {

  return (

    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>

  )
}

export default App