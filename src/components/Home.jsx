import {useState} from 'react'
import "../App.css"
import Navigation from "./Navigation"
import DahliaForm from "./DahliaForm"
import Database from './Database'
import Footer from "./Footer"
import Header from './Header'

const Home = () => {
    const [formData, setFormData] = useState(null);
    return (
        <>
            <div className='home'>
                <Header />
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