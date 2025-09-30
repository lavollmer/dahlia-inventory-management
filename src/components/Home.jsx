import React from 'react'
import "../App.css"
import Navigation from "./Navigation"

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
                    INSTRUCTIONS
                </div>
            </div>
        </>
    )
}

export default Home