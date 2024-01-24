import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage'
import Homepage from './pages/Homepage';
import ArtistPage from './pages/ArtistPage';
import Albumpage from './pages/Albumpage';
import Searchpage from './pages/Searchpage';
import ColonnaDx from './components/ColonnaDx'
import ColonnaSx from './components/ColonnaSx'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid contenitore">
          <div className="row riga d-flex justify-content-between">
            <ColonnaSx />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/artist/:id" element={<ArtistPage />} />
              <Route path="/album/:id" element={<Albumpage />} />
              <Route path="/search" element={<Searchpage />} />
              <Route path="*" element={< NotFoundPage />} />
            </Routes>
            <ColonnaDx />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;



