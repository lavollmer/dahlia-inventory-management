import { useState, useEffect } from 'react'
import axios from 'axios';
import "../App.css"

function DahliaForm() {
  // useState for date input
  const [formData, setFormData] = useState({
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
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (formData) {
      setFormData(formData);
    }
  }, [formData]);

  const handleChange = (e) => {
    // we are updating state by copying the old data, and setting it to the new value input by end user
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // preventing page refresh
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/inventory/${editingId}`, formData);
        alert('Item updated successfully!');
        setIsEditing(false);
        setEditingId(null);
      } else {
        const res = await axios.post('http://localhost:5000/inventory', formData);
        console.log('New item added:', res.data);
        alert('New item added!');
      }

      setFormData({
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
      });

    } catch (err) {
      console.error(err);
      alert('Error!');
    }

  }

  return (
    <>
      <div className='dahlia-form'>
        <div className='dahlia-instructions-form'>
          <h2>Add a New Dahlia to the Inventory</h2>
          <p>Use the form below to add a new dahlia variety to your flower inventory database. Include details like name, color, bloom size, and quantity.</p>
        </div>
        <form className='dahlia-form-details' onSubmit={handleSubmit}>
          <label>
            Dahlia Variety Name:
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Variety:
            <input type="text" name="variety" value={formData.variety} onChange={handleChange} />
          </label>
          <label for="color">
            Color:
            <select id="color" name="color" value={formData.color} onChange={handleChange} >
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
            </select>
            {/* <input type="text" name="color" value={formData.color} onChange={handleChange} /> */}
          </label>
          <label>
            Bloom Size:
            <input type="text" name="bloom_size" value={formData.bloom_size} onChange={handleChange} />
          </label>
          <label for="status">
            Status:
            <select id="status" name="status" value={formData.status} onChange={handleChange}>
              <option value="planted">Planted</option>
              <option value="stored">Stored</option>
            </select>
            {/* <input type="text" name="status" value={formData.status} onChange={handleChange} /> */}
          </label>
          <label>
            Container ID:
            <input type="text" name="container_id" value={formData.container_id} onChange={handleChange} />
          </label>
          <label>
            Storage Location:
            <input type="text" name="storage" value={formData.storage} onChange={handleChange} />
          </label>
          <label>
            Purchase Source:
            <input type="text" name="purchase_source" value={formData.purchase_source} onChange={handleChange} />
          </label>
          <label>
            Purchase Year:
            <input type="date" name="purchase_year" value={formData.purchase_year} onChange={handleChange} />
          </label>
          <label>
            Number of Tubers:
            <input type="text" name="number_of_tubers" value={formData.number_of_tubers} onChange={handleChange} />
          </label>
          <label>
            Condition:
            <input type="text" name="condition" value={formData.condition} onChange={handleChange} />
          </label>
          <button type="submit">
            Add Item
          </button>
        </form>
      </div>
    </>
  )
}

export default DahliaForm