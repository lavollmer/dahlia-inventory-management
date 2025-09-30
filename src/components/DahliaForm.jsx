import { useState } from 'react'
import "../App.css"

function DahliaForm() {

  return (
    <>
    <div className='dahlia-form'>
      <h1>Dahlia Form</h1>
      <form className='dahlia-form-details'>
        <label>
          Dahlia Variety Name:
          <input></input>
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