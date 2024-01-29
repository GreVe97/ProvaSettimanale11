import React from 'react';
import SchedaCanzoneRiproduzione from './SchedaCanzoneRiproduzione';
import SchedaCanzoneMobile from './SchedaCanzoneMobile';

export default function Player() {
  return (
    <div className="player d-flex pt-2 px-0">
      <div className="playerRow row container-fluid pe-0">
        {/* COL SX, img, nome Artista e nome Canzone in riprod */}
       <SchedaCanzoneRiproduzione/>

        {/* COL CENTER, comandi e progress bar */}
        <div className="d-none d-md-block col-md-6 col-6 text-center d-none d-md-block">
          <div className="playerIcons mt-1">
            <a ><i className="bi bi-shuffle"></i></a>
            <a ><i className="bi bi-skip-backward-fill"></i></a>
            <a  id="playPause"><i className="bi bi-play-circle-fill"></i></a>
            <a ><i className="bi bi-skip-forward-fill"></i></a>
            <a ><i className="bi bi-repeat"></i></a>
          </div>
          <div className="round-time-bar" style={{ '--duration': 100, zIndex: 2000 }} data-style="smooth">
            <div></div>
          </div>
        </div>

        {/* COL DX, iconcine varie e volume */}
        <div className="ms-auto iconsDx d-none col-md-3 col-3 d-md-flex justify-content-end align-items-center">
          <a ><i className="bi bi-mic"></i></a>
          <a ><i className="bi bi-view-list"></i></a>
          <a ><i className="bi bi-music-player"></i></a>
          <a  id="muteButton"><i className="bi bi-volume-up-fill"></i></a>
          <input type="range" className="volume form-range w-25 me-2" id="customRange1" />
          <a ><i className="bi bi-arrows-angle-expand fs-5"></i></a>
        </div>

        {/* MOBILE */}
     <SchedaCanzoneMobile/>

        {/* COL CENTER, comandi e progress bar */}

        {/* COL DX, iconcine varie e volume */}
        <div className="ms-auto d-md-none iconsDx col-md-3 col-3 d-flex justify-content-end align-items-center">
          <a ><i className="bi bi-music-player px-2"></i></a>
          <a  id="playPause"><i className="bi bi-play-circle-fill"></i></a>
        </div>

        <div className="d-md-none col-12 text-center">
          <div className="round-time-bar m-0 container-fluid" style={{ '--duration': 100, zIndex: 2000 }} data-style="smooth">
            <div></div>
          </div>
        </div>

        {/* BARRA SOTTO PLAYER MOBILE */}
        <div className="px-0 pt-2">
          <ul className="firstUl list-unstyled d-flex justify-content-around">
            <li className="pb-4">
              <a  className="text-decoration-none btn d-flex flex-column justify-content-around">
                <i className="bi bi-house-door-fill SizeBtn pb-2"></i>
                <span className="scritta">Home</span>
              </a>
            </li>
            <li className="pb-4">
              <a  className="text-decoration-none btn d-flex flex-column justify-content-center">
                <i className="bi bi-search SizeBtn d-flex justify-content-center pb-2"></i>
                <span className="scritta">Ricerca</span>
              </a>
            </li>
            <li className="pb-4">
              <a  className="text-decoration-none btn d-flex flex-column justify-content-center">
                <i className="bi bi-collection-play SizeBtn pb-2"></i>
                <span className="scritta">La tua libreria</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
