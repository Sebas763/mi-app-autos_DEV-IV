import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "../../../../../styles/layout/Layout.css"

const Layout = () => {
  return (
    <>
    <Navbar/>

    <main>
      <Outlet/>
    </main>

    <Footer/>
    </>
  )
}

export default Layout