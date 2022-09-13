import React, { useState, useEffect } from 'react'
import SongCard from './SongCard'

const LikeButton = ({ song, handleUpdateSong }) => {
    console.log(song.likes)
    const {id, likes} = song
    const handleLikes = (song) => {
        const updatedSong = {likes: song.likes + 1};
    
        fetch(`http://localhost:3001/songs/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedSong),
        })
          .then((r) => r.json())
          .then(handleUpdateSong);
      }

  return (
    <div>
        <button onClick={handleLikes} id={song.id}>❤️ {song.likes}</button>
    </div>
  )
}

export default LikeButton