function SongCard() {
    fetch("http://localhost:3000/songs")
    .then(response => response.json())
    .then(data => {
        <h1>{data}</h1>
    })
}

export default SongCard;