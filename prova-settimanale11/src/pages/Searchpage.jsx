import React from "react";
import BarraNavigazione from "../components/BarraNavigazione";
import InputForm from "../components/ComponentiSearchPage/InputForm";
import RisultatiRicerca from "../components/ComponentiSearchPage/RisultatiRicerca";

export default function Searchpage() {
  return (
    <div className="col-7 searchPage overflow-auto">
      <div className="p-3 container">
        <BarraNavigazione />
        <InputForm />
        <div className="container filtriRicerca">
          <span className="badge rounded-pill text-bg-dark p-2" id="tutto">
            Tutto
          </span>
          <span className="badge rounded-pill text-bg-dark p-2" id="brani">
            Brani
          </span>
          <span className="badge rounded-pill text-bg-dark p-2" id="artisti">
            Artisti
          </span>
          <span className="badge rounded-pill text-bg-dark p-2" id="playlist">
            Playlist
          </span>
          <span className="badge rounded-pill text-bg-dark p-2" id="profili">
            Profili
          </span>
          <span className="badge rounded-pill text-bg-dark p-2" id="podcast">
            Podcast e show
          </span>
        </div> 
      <RisultatiRicerca/>
  
       
      </div>
    </div>
  );
}
