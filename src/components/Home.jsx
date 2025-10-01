import { useState } from 'react'
import "../App.css"
import Footer from "./Footer"
import Header from './Header'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { TbCircleNumber1Filled } from "react-icons/tb";

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    const handleButtonClick = (e) => {
        navigate('/adddahlia')
    }

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
                    <button onClick={handleButtonClick}>
                        <FaPlus />
                        Add a Dahlia
                    </button>
                </div>
                <div>
                    <h1>How to Use</h1>
                    <div className='how-to-use'>
                        <div className='title-use'>
                            <TbCircleNumber1Filled />
                            <h2>Add Your Dahlias</h2>
                        </div>
                        <div className='instructions'>
                            <h3>Click "Add New Dahlia" above or in the Database section. Fill in the dahlia's name, color, type, quantity, and location. You can also add bloom size and notes for detailed tracking.</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home