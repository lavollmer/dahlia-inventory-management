import { useState } from 'react'
import "../App.css"
import Footer from "./Footer"
import Header from './Header'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { LuDatabase } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    const handleButtonClick = (e) => {
        navigate('/adddahlia')
    }

    return (
        <>
            <div className='home'>
                <div>
                    <Header />
                </div>
                <div className='background-image-splash'>
                    <div className="splash-page">
                        <h1>Simplify Your Dahlia Garden Management</h1>
                        <section aria-labelledby="intro-heading">
                            <p>Easily track, organize, and manage your dahlia flower collection with our intuitive inventory system. Add new varieties, monitor stock levels, and maintain detailed records — all in one place.</p>
                        </section>
                    </div>
                </div>
                <div className='quick-add-dahlia'>
                    <h1>Quick Add Dahlia</h1>
                    <p>Add a new dahlia flower to your collection right from the home page.</p>
                    <button onClick={handleButtonClick}>
                        <FaPlus size="1em" />
                        Add New Dahlia
                    </button>
                </div>
                <div className='how-to-use-box'>
                    <div className='how-to-use'>
                        <h1 className='title-instructions'>How to Use</h1>
                        <div className='title-use'>
                            <TbCircleNumber1Filled size="2em" />
                            <h2>Add Your Dahlias</h2>
                        </div>
                        <div className='instructions'>
                            <h3>Click "Add New Dahlia" above or in the Database section. Fill in the dahlia's name, color, type, quantity, and location. You can also add bloom size and notes for detailed tracking.</h3>
                        </div>
                        <div className='title-use'>
                            <TbCircleNumber2Filled size="2em" />
                            <h2>Browse Your Collection</h2>
                        </div>
                        <div className='instructions'>
                            <h3>Navigate to the Database page to view all your dahlias in an organized table. Use the search bar to quickly find specific varieties by name or color.</h3>
                        </div>
                        <div className='title-use'>
                            <TbCircleNumber3Filled size="2em" />
                            <h2>Manage & Update</h2>
                        </div>
                        <div className='instructions'>
                            <h3>Click the eye icon to view details, the pencil icon to edit information, or the trash icon to remove a dahlia from your inventory. Keep your records accurate and up-to-date.</h3>
                        </div>
                    </div>
                </div>
                <div className='how-to-use-box'>
                    <div className='title-use'>
                        <LuDatabase size="2em" />
                        <h1> View Database</h1>
                    </div>
                    <p>Browse and manage your dahlia collection.</p>
                </div>
                <div className='how-to-use-box'>
                    <div className='title-use'>
                        <FaQuestionCircle size="2em" />
                        <h1>Help & FAQ</h1>
                    </div>
                    <p>Get answers to common questions and learn tips.</p>
                </div>
                <div>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Home