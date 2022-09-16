import React from 'react';
import SongForm from './SongForm';

const NewSong = ({ handleSubmit }) => {
  return (
    <div>
      <h1 style={{color: "rgb(20, 90, 50)", margin:"auto"}}>Let's Add to the List 🕺</h1>
      <SongForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default NewSong;