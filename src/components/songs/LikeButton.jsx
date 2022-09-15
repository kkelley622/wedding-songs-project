const LikeButton = ({ song, handleUpdateSong }) => {
    const {id, likes} = song;


    const handleLikes = () => {
        console.log(likes)
        const updatedSong = {
          likes: song.likes + 1}
    
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
        <button onClick={handleLikes} id={id}>❤️ {likes}</button>
    </div>
  )
}

export default LikeButton