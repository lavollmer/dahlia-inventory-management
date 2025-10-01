import React from 'react'
import "../App.css"
import Navigation from "./Navigation"
import DahliaForm from "./DahliaForm"
import Footer from "./Footer"

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='navigation-bar'>
                    <div className='logo'>
                        Dahlia Management System
                    </div>
                    <div>
                        <Navigation />
                    </div>
                </div>
                <div>
                    <DahliaForm />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home