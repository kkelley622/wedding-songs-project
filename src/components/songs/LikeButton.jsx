import React from 'react'

const LikeButton = ({ song }) => {
    const buttonClick = () => {
        song.likes = song.likes + 1;
      }
  return (
    <div>
        <button>❤️ {song.likes}</button>
    </div>
  )
}

export default LikeButton