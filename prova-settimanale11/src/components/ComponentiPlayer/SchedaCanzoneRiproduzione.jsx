import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SchedaCanzoneRiproduzione() {
  const navigate = useNavigate();

  const canzone = useSelector((state) => state.inRiproduzione.inRiproduzione);
  const play = useSelector((state) => state.inRiproduzione.play);

  return (
    <div className="col-md-3 col-3 d-none d-md-flex">
      <div className="playerImg d-flex align-content-center justify-content-center">
        <img
          className="playerImg manina"
          src={
            canzone.album
              ? canzone.album.cover_medium
              : "https://m.media-amazon.com/images/I/71S1upa9iCL._UF1000,1000_QL80_.jpg"
          }
          alt=""
          onClick={() => {
            if (canzone.album) {
              navigate("/album/" + canzone.album.id);
            }
          }}
        />
      </div>
      <div className="playerNowText ms-3 text-white d-flex flex-column justify-content-center">
        <a
          className="playerNowSong text-decoration-none text-white fw-bold manina"
          onClick={() => {
            if (canzone.album) {
              navigate("/album/" + canzone.album.id);
            }
          }}
        >
          <span className="titoletto">
            {canzone.album ? canzone.title : "Another Brick In The Wall"}
          </span>
        </a>
        <a className="playerNowArtist text-decoration-none manina" onClick={()=>{if(canzone.album){navigate('/artist/' + canzone.artist.id)}}}>
          <span className="">
            {canzone.album ? canzone.artist.name : "Pink Floyd"}
          </span>
        </a>
      </div>
      <a className="d-flex align-items-center cuoricino">
        <i className="bi bi-heart"></i>
      </a>
    </div>
  );
}
