import Header from './Header'
import Database from './Database'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Footer from './Footer'
import "../App.css"
import SearchBar from './SearchBar';

const DatabasePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    const handleButtonClick = (e) => {
        navigate('/adddahlia')
    }

    return (
        <>
            <div>
                <Header />
                <div className='database-page'>
                    <div>
                        <h1>Dahlia Inventory Analytics</h1>
                    </div>
                    <div className='database-features'>
                        <div>
                            <h1>Quick Add Dahlia</h1>
                            <button onClick={handleButtonClick}>
                                <FaPlus size="1em" />
                                Add New Dahlia
                            </button>
                        </div>
                        {/* <div>
                            <h1>Search</h1>
                            <SearchBar />
                        </div> */}
                    </div>
                    <div>
                        <Database />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DatabasePage