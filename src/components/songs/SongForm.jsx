
import React, { useState } from 'react';

const SongForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    likes: 0
  })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]:event.target.value})

  }

  const clearForm = (event) => {
    handleSubmit(event, formData)
    setFormData({
      title:"",
      artist:""
    })
    alert("Your Song Was Successfully Added")
  }


  return (
    <form onSubmit={clearForm} style={{display:"flex", flexDirection:"column", width:"300px"}}>
      <label>Title:</label>
        <input 
          type="text" 
          name="title" 
          aria-label="title"
          value={formData.title}
          onChange={handleChange}
          />
      <label>Artist:</label>
        <input 
          type="text" 
          name="artist"
          aria-label="artist"
          value={formData.artist}
          onChange={handleChange}
          />
          <input type="submit"/>
        </form>
  )
}

export default SongForm;




