
import React from 'react'
import Logo from '../Logo'
import Header from '../Header'
import Nav from '../Nav'
import Main from '../Main'
import Footer from '../Footer'


const Layout = ({children}) =>{
    return(
        <div className='app'>
            <Logo />
            <Header />
            <Nav />
            <div className='container mx-auto'>
                {children}                    
            </div>            
            
            <Footer />

        </div>
    )
}


export default Layout