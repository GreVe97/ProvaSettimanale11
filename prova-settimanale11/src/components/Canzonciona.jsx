import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

export default function Canzonciona() {
  const navigate = useNavigate();
  const canzoni = useSelector((state) => state.riga.riga[ Math.floor(Math.random() * 2)]);
  console.log(canzoni);

  let [nCasuale, setNCasuale] = useState(
    Math.floor(Math.random() * canzoni.length)
  );

  useEffect(() => {
    setNCasuale(Math.floor(Math.random() * canzoni.length));
  }, [canzoni]);
  return (
    <>
      {canzoni.length>0 ? (<><div id="canzonciona" className="card big-card mb-3 canzonciona">
          <div className="row g-0 d-flex align-items-center">
            <div
              className="col-3  foto"
              onClick={() => navigate("/album/" + canzoni[nCasuale].album.id)}
            >
              <img
                src={canzoni[nCasuale].album.cover_xl}
                className="img-fluid rounded-start imgBC ps-3 manina"
                alt="..."
              />
            </div>
            <div className="pt-3 pb-3 testoBC">
              <div className="d-flex testoUp justify-content-between pe-2 pb-0">
                <p
                  className="card-text2 manina"
                  onClick={() =>
                    navigate("/album/" + canzoni[nCasuale].album.id)
                  }
                >
                  Album: {canzoni[nCasuale].album.title}
                </p>
                <p className="ms-auto">NASCONDI ANNUNCI</p>
              </div>
              <div className=" lh-0 pt-0">
                <h1 className="card-title pt-0 fw-bold truncate-text manina">
                  {canzoni[nCasuale].title}
                </h1>
                <p
                  className="card-text1 manina"
                  onClick={() =>
                    navigate("/artist/" + canzoni[nCasuale].artist.id)
                  }
                >
                  {canzoni[nCasuale].artist.name}
                </p>
              </div>
              <div className="bottoniUp mt-2">
                <button className="playBC">Play</button>
                <button className="">Salva</button>
                <i className="bi bi-three-dots" />
              </div>
            </div>
          </div>
        </div></> 
        
      ) : (<div className="d-flex justify-content-center">
      {" "}
      <Spinner animation="border" variant="success" />
    </div>
       
      )}
    </>
  );
}
