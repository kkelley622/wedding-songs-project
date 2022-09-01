function SongCard() {
    fetch("http://localhost:3000/songs")
    .then(response => response.json())
    .then(data => console.log(data))
}

export default SongCard;