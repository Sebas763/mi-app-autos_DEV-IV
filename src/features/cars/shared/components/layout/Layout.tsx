import React from 'react'

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