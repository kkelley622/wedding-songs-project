import React, { useState, useEffect } from "react";
import Navbar from "./navigation/Navbar";
import Home from "./static/Home";
import WantedSongs from "./songs/WantedSongs";
import NewSong from "./songs/NewSong";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { baseUrl } from "../Global";

const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(baseUrl + "/songs");
      const data = await response.json();
      setSongs(data)
    }
    fetchSongs();
  }, [setSongs])
  
  const handleSubmit = async (event, songObj) => {
    event.preventDefault();
    const response = await fetch(baseUrl + "/songs",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(songObj)
    });
    const data = await response.json();
    setSongs([...songs, data])
  }
  
  const handleUpdateSong = (updatedSong) => {
    const updatedSongs = songs.map((song) => song.id === updatedSong.id ? updatedSong : song);
    setSongs(updatedSongs);
  }
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<WantedSongs songs= { songs } handleUpdateSong={handleUpdateSong}/>} />
        <Route path="/songs/add" element={<NewSong handleSubmit={handleSubmit}/>} />
      </Routes>
    </Router>
  );
}

export default App;
