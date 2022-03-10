import React, { useState } from 'react';
import { Person } from '../models/people';

interface IProps {
  onAdd: (person: Person) => void
}

const AddPerson: React.FC<IProps> = ({ onAdd }) => {

  const [input, setInput] = useState({
    name : "",
    age : "",
    img : "",
    note : ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleClick = (): void => {
    if (!input.name || !input.age) {
      alert('Please add a task')
      return
    }

    onAdd({ 
      name: input.name, 
      age: parseInt(input.age), 
      img: input.img,
      note: input.note
    })

    setInput({
      name: "",
      age: "",
      img: "",
      note: ""
    })
  }

  return (
    <div className='AddToList'>
        <input 
            type="text"
            placeholder='name'
            className='AddToList-input'
            value={input.name}
            onChange={handleChange}
            name='name'
         />
         <input 
            type="number"
            placeholder='age'
            className='AddToList-input'
            value={input.age}
            onChange={handleChange}
            name='age'
         />
         <input 
            type="text"
            placeholder='image URL'
            className='AddToList-input'
            value={input.img}
            onChange={handleChange}
            name='img'
         />
         <textarea 
            placeholder='notes'
            className='AddToList-input'
            value={input.note}
            onChange={handleChange}
            name='note'
         />
         <button
            className="AddToList-btn"
            onClick={handleClick}
         >
           Add to list
         </button>
    </div>
  )
}

export default AddPerson