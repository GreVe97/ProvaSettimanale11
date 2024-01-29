import React from "react";
import { useNavigate } from "react-router-dom";

export default function MettiRisultatoBrani({ traccia }) {
    const navigate= useNavigate()
  return (
   <>
      <div className="col-3">
        <img className="w-75 manina" src={traccia.album.cover_medium} onClick={()=>navigate('/album/'+traccia.album.id)}/>
      </div>
      <div className="col-6 pBrani">
        {" "}
        <p className="mb-0 manina">{traccia.title}</p>
        <p className="mb-0 manina" onClick={()=>navigate('/artist/'+traccia.artist.id)}>{traccia.artist.name}</p>
      </div>
      <div className="col-3">
        <p className="pBrani">{Math.floor(traccia.duration / 60)}:{traccia.duration % 60}</p>
      </div>
   </>
  );
}
