import { useState, useEffect } from 'react'
import axios from 'axios';
import "../App.css"

function EditDahliaForm() {
    const emptyForm = {
        _id: '',
        name: '',
        variety: '',
        color: '',
        status: '',
        bloom_size: '',
        container_id: '',
        storage: '',
        purchase_source: '',
        purchase_year: '',
        number_of_tubers: '',
        condition: '',
    };

    const [formData, setFormData] = useState(emptyForm);

    const handleChange = (e) => {
        // we are updating state by copying the old data, and setting it to the new value input by end user
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clone the form data to avoid mutating state directly
        const formToSend = { ...formData };

        console.log("Form data being sent:", formToSend);

        // Remove _id if not in edit mode
        if (!formToSend._id) {
            delete formToSend._id;
        }

        // Required fields validation
        const requiredFields = ['name', 'variety', 'bloom_size', 'color', 'status'];
        const missingFields = requiredFields.filter(field => !formToSend[field]?.trim());

        if (missingFields.length > 0) {
            alert(`Please fill out all required fields: ${missingFields.join(', ')}`);
            return;
        }

        try {
            await axios.put(`http://localhost:5000/inventory/${editingId}`, formToSend);
            alert('Item updated successfully!');
            setFormData(emptyForm);

        } catch (err) {
            console.error("Submission error:", err);
            const message = err?.response?.data?.message || 'Unknown error occurred.';
            alert(`Error submitting form: ${message}`);
        }
    };


    return (
        <>
            <div className='dahlia-form'>
                <div className='dahlia-instructions-form'>
                    <h2>Edit Dahlia Information</h2>
                </div>
                <form className='dahlia-form-details' onSubmit={handleSubmit}>
                    <label>
                        Dahlia Variety Name:
                        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Variety:
                        <select id="variety" name="variety" value={formData.variety} onChange={handleChange}>
                            <option value="">Please select a variety</option>
                            <option value="decorative_formal">Formal Decorative</option>
                            <option value="decorative_informal">Informal Decorative</option>
                            <option value="cactus_straight">Straight Cactus</option>
                            <option value="cactus_incurved">Incurved Cactus</option>
                            <option value="cactus_semi">Semi-Cactus</option>
                            <option value="ball">Ball</option>
                            <option value="pompon">Pompon</option>
                            <option value="anemone">Anemone-Flowered</option>
                            <option value="collarette">Collarette</option>
                            <option value="peony">Peony-Flowered</option>
                            <option value="single">Single</option>
                            <option value="waterlily">Waterlily</option>
                            <option value="stellar">Stellar</option>
                            <option value="orchid">Orchid</option>
                            <option value="novelty">Novelty</option>
                        </select>
                    </label>
                    <label htmlFor="color">
                        Color:
                        <select id="color" name="color" value={formData.color} onChange={handleChange} >
                            <option value="">Select a color</option>
                            <option value="bi-color">Bi-color</option>
                            <option value="burgundy">Burgundy</option>
                            <option value="cream">Cream</option>
                            <option value="lavender">Lavender</option>
                            <option value="orange">Orange</option>
                            <option value="peach">Peach</option>
                            <option value="pink">Pink</option>
                            <option value="purple">Purple</option>
                            <option value="red">Red</option>
                            <option value="salmon">Salmon</option>
                            <option value="speckled">Speckled</option>
                            <option value="striped">Striped</option>
                            <option value="white">White</option>
                            <option value="yellow">Yellow</option>
                        </select>
                    </label>
                    <label>
                        Bloom Size:
                        <select name="bloom_size" value={formData.bloom_size} onChange={handleChange}>
                            <option value="">Select bloom size</option>
                            <option value="giant">Giant (&gt;10 inches)</option>
                            <option value="large">Large (8-10 inches)</option>
                            <option value="medium">Medium (6-8 inches)</option>
                            <option value="small">Small (4-6 inches)</option>
                            <option value="miniature">Miniature (&lt;4 inches)</option>
                        </select>
                    </label>
                    <label htmlFor="status">
                        Status:
                        <select id="status" name="status" value={formData.status} onChange={handleChange}>
                            <option value="">Select a status</option>
                            <option value="available">Available</option>
                            <option value="damaged">Damaged</option>
                            <option value="harvested">Harvested</option>
                            <option value="ordered">Ordered</option>
                            <option value="planted">Planted</option>
                            <option value="reserved">Reserved</option>
                            <option value="sold">Sold</option>
                            <option value="stored">Stored</option>
                        </select>
                    </label>
                    <label>
                        Container ID:
                        <input type="text" name="container_id" value={formData.container_id} onChange={handleChange} />
                    </label>
                    <label>
                        Storage Location:
                        <select name="storage" value={formData.storage} onChange={handleChange}>
                            <option value="">Select storage location</option>
                            <option value="basement">Basement</option>
                            <option value="garage">Garage</option>
                        </select>
                    </label>
                    <label>
                        Purchase Source:
                        <input type="text" name="purchase_source" value={formData.purchase_source} onChange={handleChange} />
                    </label>
                    <label>
                        Purchase Year:
                        <input
                            type="date"
                            name="purchase_year"
                            placeholder='e.g. 2025'
                            min="1990"
                            max={new Date().getFullYear()}
                            value={formData.purchase_year}
                            onChange={handleChange} />
                    </label>
                    <label>
                        Number of Tubers:
                        <input type="text" name="number_of_tubers" value={formData.number_of_tubers} onChange={handleChange} />
                    </label>
                    <label>
                        Condition:
                        <select name="condition" value={formData.condition} onChange={handleChange}>
                            <option value="">Select condition</option>
                            <option value="new">New</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                            <option value="poor">Poor</option>
                            <option value="damaged">Damaged</option>
                        </select>
                    </label>
                    <button type="submit">
                        Update Item
                    </button>
                </form>
            </div>
        </>
    )
}

export default EditDahliaForm