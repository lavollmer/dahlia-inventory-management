import Header from './Header'
import Database from './Database'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Footer from './Footer'
import "../App.css"

const DatabasePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    const handleButtonClick = (e) => {
        navigate('/adddahlia')
    }

    return (
        <div>
            <Header />
            <div className='database-features'>
                <div>
                    <h1>Quick Add Dahlia</h1>
                    <button onClick={handleButtonClick}>
                        <FaPlus size="1em" />
                        Add New Dahlia
                    </button>
                </div>
                <div>
                    <h1>Search</h1>
                </div>
            </div>
            <div>
                <Database />
            </div>
            <Footer />
        </div>
    )
}

export default DatabasePage