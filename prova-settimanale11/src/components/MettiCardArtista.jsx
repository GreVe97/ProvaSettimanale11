import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function MettiCardArtista({traccia}) {

  const navigate = useNavigate();
  
  return (
    <div className="card" style={{ width: "22%" }} onClick={()=>navigate(`/artist/${traccia.artist.id}`)}>
  <a className="">
    <img
      src={traccia.artist.picture_medium}
      className="card-img-top rounded-circle"
      alt="..."
    />
  </a>
  <div className="card-body pb-1">
    <p className="card-title text-truncate">
      <a href="#" className="text-decoration-none text-white">
        {traccia.artist.name}
      </a>
    </p>
    <p className="card-text">Artist</p>
    <button className="playHoverLongCard position-absolute">
      <i className="bi bi-play-fill" />
    </button>
  </div>
</div>

  )
}
