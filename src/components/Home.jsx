import React from 'react'
import "../App.css"
import Navigation from "./Navigation"

const Home = () => {
    return (
        <>
            <div>
                <div className='navigation-bar'>
                    <div className='logo'>
                        Dahlia Management System
                    </div>
                    <div>
                        <Navigation />
                    </div>
                </div>
                <div>
                    Dahlia Inventory Management
                </div>
            </div>
        </>
    )
}

export default Home