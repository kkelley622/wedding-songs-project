import React, { useState } from "react"

const LikeButton = ({ song, handleUpdateSong }) => {
    let {id, likes} = song;
    const [updatedLikes, setUpdatedLikes] = useState(song.likes)


    const handleLikes = () => {
      const updatedSong = {likes: updatedLikes + 1}
      setUpdatedLikes(updatedLikes + 1);

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
       
        <button onClick={handleLikes} id={id}>❤️ {updatedLikes}</button>
    </div>
  )
}

export default LikeButton