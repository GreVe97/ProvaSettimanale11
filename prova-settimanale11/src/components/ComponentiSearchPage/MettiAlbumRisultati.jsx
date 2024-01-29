import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MettiAlbumRisultati({traccia}) {
  const navigate = useNavigate();
  return (
    <>
    <div className="card d-flex cardPlayl col-3 m-2" style={{ width: "10rem" }}>
  <a className="manina">
    <img
      src={traccia.album.cover_big}
      className="card-img-top"
      alt="..."
      onClick={()=>navigate("/album/"+traccia.album.id)}
    />
  </a>
  <button className="playPCard position-absolute">
    <i className="bi bi-play-fill" />
  </button>
  <div className="card-body ">
    <p className="card-title manina" onClick={()=>navigate("/album/"+traccia.album.id)}>
      {traccia.album.title}
    </p>
    <p className="card-text manina" onClick={()=>navigate("/artist/"+traccia.artist.id)}>
      {traccia.artist.name}
    </p>
  </div>
</div>
</>
  )
}
