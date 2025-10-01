import {useState} from 'react'
import "../App.css"
import Navigation from "./Navigation"
import DahliaForm from "./DahliaForm"
import Database from './Database'
import Footer from "./Footer"

const Home = () => {
    const [formData, setFormData] = useState(null);
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
                    <DahliaForm formData={formData} setFormData={setFormData} />
                </div>
                <div>
                    <Database setFormData={setFormData} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home