import { useState } from 'react'
import "../App.css"

function DahliaForm() {
  // useState for date input
  const [formData, setFormData] = useState ({
    name: '',
    color: '',
    container_id: '',
    storage: '',
    purchase_source: '',
    purchase_year: '',
    number_of_tubers: '',
    condition: '',
  });

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <>
    <div className='dahlia-form'>
      <h1>Dahlia Form</h1>
      <form className='dahlia-form-details' onSubmit={handleSubmit}>
        <label>
          Dahlia Variety Name:
          <input type="text" name="name" value={formData.name} onSubmit={handleChange}/>
        </label>
        <label>
          Color:
          <input type="text" name="color" value={formData.color} onSubmit={handleChange}/>
        </label>
        <label>
          Container ID:
          <input type="text" name="container_id" value={formData.container_id} onSubmit={handleChange}/>
        </label>
        <label>
          Storage Location:
          <input type="text" name="storage" value={formData.storage} onSubmit={handleChange}/>
        </label>
        <label>
          Purchase Source:
          <input type="text" name="purchase_source" value={formData.purchase_source} onSubmit={handleChange}/>
        </label>
        <label>
          Purchase Year:
          <input type="text" name="purchase_year" value={formData.purchase_year} onSubmit={handleChange}/>
        </label>
        <label>
          Number of Tubers:
          <input type="text" name="number_of_tubers" value={formData.number_of_tubers} onSubmit={handleChange}/>
        </label>
        <label>
          Condition:
          <input type="text" name="condition" value={formData.condition} onSubmit={handleChange}/>
        </label>
      </form>
      </div>
    </>
  )
}

export default DahliaForm