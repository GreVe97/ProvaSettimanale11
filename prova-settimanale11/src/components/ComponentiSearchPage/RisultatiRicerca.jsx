import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MettiRisultatoBrani from "./MettiRisultatoBrani";
import MettiCardAlbum from "../MettiCardAlbum";
import MettiAlbumRisultati from "./MettiAlbumRisultati";

function albumRisultato(tracks) {
  let giàPresenti = [];
  let album = [];
  tracks.forEach((ele) => {
    if (!giàPresenti.includes(ele.album.id)) {
      giàPresenti.push(ele.album.id);
      album.push(ele);
    }
  });
  return album;
}

export default function RisultatiRicerca() {
  const navigate = useNavigate();
  let risultatiRicerca = useSelector(
    (state) => state.chiamataSearch.chiamataSearch
  );
  let successo = useSelector((state) => state.chiamataSearch.successo);
  console.log(risultatiRicerca);

  return (
    <>
   
      {risultatiRicerca.length && (
        <>
          <div className="container risultatiRicerca row mt-2">
            <div className="col-6">
              <h3>Risultato più rilevante</h3>
              <div
                className="cardRisRil rounded-2 p-3 manina text-align-center"
                onClick={() =>
                  navigate("/artist/" + risultatiRicerca[0].artist.id)
                }
              >
                <img
                  className="rounded-circle w-25"
                  id="imgPiuRelevante"
                  src={risultatiRicerca[0].artist.picture_big}
                />
                <div>
                  <p className="h2 d-block manina" id="nomePiuRelevante">
                    {risultatiRicerca[0].artist.name}
                  </p>
                  <p className="h6">artista</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h3>Brani</h3>
              <div className="row mb-1" id="ulBraniParent">
                {risultatiRicerca
                  .slice(0, 5)
                  .map((ele) => (
                    <MettiRisultatoBrani key={ele.id} traccia={ele} />
                  ))}
              </div>
            </div>
          </div>
          <div className="container  row mt-2 " >
            <div className="col-12 mb-2 ml-4">
              <h3>
                <p >Album Risultati</p>
              </h3>
            </div>
            
              {albumRisultato(risultatiRicerca).map((ele) => (
                <MettiAlbumRisultati key={ele.id} traccia={ele} />
              ))}
         
          </div>
        </>
      )}
    </>
  );
}
