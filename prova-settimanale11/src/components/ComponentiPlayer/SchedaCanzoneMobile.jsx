import React from "react";

export default function SchedaCanzoneMobile() {
  return (
    <div className="col-6 d-md-none d-flex">
      <div className="playerImg d-flex align-content-center justify-content-center">
        <img
          className="playerImg"
          src="https://m.media-amazon.com/images/I/71S1upa9iCL._UF1000,1000_QL80_.jpg"
          alt=""
        />
      </div>
      <div className="playerNowText ms-3 text-white d-flex flex-column justify-content-center">
        <a className="playerNowSong text-decoration-none text-white fw-bold">
          <span className="titoletto">Another Brick In The Wall</span>
        </a>
        <a className="playerNowArtist text-decoration-none">
          <span className="">Pink Floyd</span>
        </a>
      </div>
    </div>
  );
}
