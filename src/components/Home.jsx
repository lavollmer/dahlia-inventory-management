import React from 'react'
import "../App.css"
import Navigation from "./Navigation"

const Home = () => {
    return (
        <>
            <div>
                <div className='navigation-bar'>
                    <div>
                        LOGO
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