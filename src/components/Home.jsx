import { useState } from 'react'
import "../App.css"
import DahliaForm from "./DahliaForm"
import Database from './Database'
import Footer from "./Footer"
import Header from './Header'
import { FaPlus } from "react-icons/fa";

const Home = () => {
    const [formData, setFormData] = useState(null);


    return (
        <>
            <div className='home'>
                <Header />
                <div className='splash-page'>
                    <h1>Dahlia Flower Inventory Manager</h1>
                    <p>Track, organize, and manage your dahlia collection with ease. Add new varieties, monitor quantities, and keep detailed records.</p>
                </div>
                <div>
                    <h1>Quick Add Dahlia</h1>
                    <p>Add a new dahlia to your collection right from the home page.</p>
                    <button>
                        Add a Dahlia
                        <FaPlus />
                    </button>
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