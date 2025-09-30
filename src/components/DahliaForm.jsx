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
          <input></input>
        </label>
        <label>
          Container ID:
          <input></input>
        </label>
        <label>
          Storage Location:
          <input></input>
        </label>
        <label>
          Purchase Source:
          <input></input>
        </label>
        <label>
          Purchase Year:
          <input></input>
        </label>
        <label>
          Number of Tubers:
          <input></input>
        </label>
        <label>
          Condition:
          <input></input>
        </label>
      </form>
      </div>
    </>
  )
}

export default DahliaForm