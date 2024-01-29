import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MettiCardAlbum({ traccia }) {
  const navigate = useNavigate();
  return (
    <div className="card mb-3" style={{ width: "22%" }} onClick={()=>navigate(`/album/${traccia.album.id}`)}>
      <a className="">
        <img src={traccia.album.cover_medium} className="card-img-top " alt="..." />
      </a>
      <button className="playHoverLongCard position-absolute">
        <i className="bi bi-play-fill" />
      </button>
      <div className="card-body">
        <p className="card-title truncate-text">
          <a href="#" className="text-decoration-none text-white">
            {traccia.album.title}
          </a>
        </p>
        <p className="card-text">
          <a href="#" className="text-decoration-none text-white">
            {traccia.artist.name}
          </a>
        </p>
      </div>
    </div>

  )
}
