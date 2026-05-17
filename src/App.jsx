import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner /> <Movies />
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
