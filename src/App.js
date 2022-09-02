import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import WantedSongs from "./components/songs/WantedSongs";
import NewSong from "./components/songs/NewSong";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { baseUrl } from "./Global";

const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(baseUrl + "/songs");
      const data = await response.json();
      setSongs(data);
    }
    fetchSongs();
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<WantedSongs songs= { songs }/>} />
        <Route path="/songs/add" element={<NewSong />} />
      </Routes>
    </Router>
  );
}

export default App;
