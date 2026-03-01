import "./App.css";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setwatchlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("moviesFromWatchlist");
    if (stored) {
      setwatchlist(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moviesFromWatchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleAddtoWatchList = (movieObj) => {
    const newWatchlist = [...watchlist, movieObj];
    setwatchlist(newWatchlist);
  };

  const handleRemoveFromWatchList = (movieObj) => {
    const filteredWatchlist = watchlist.filter(
      (movie) => movie.id !== movieObj.id
    );
    setwatchlist(filteredWatchlist);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
            />
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchlist={watchlist}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              setwatchlist={setwatchlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
