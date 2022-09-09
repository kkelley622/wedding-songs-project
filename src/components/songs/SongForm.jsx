import React, { useState } from 'react'

const SongForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    artist: ""
  })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  console.log(formData)
  return (
    <form style={{display:"flex", flexDirection:"column", width:"300px"}}>
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
        </form>
  )
}

export default SongForm