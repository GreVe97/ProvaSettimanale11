import React, { useEffect, useState } from "react";
import BarraNavigazione from "../BarraNavigazione";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getArtistaInfo,
  getArtistaTracks,
} from "../../slice/chiamataArtistaSlice";
import CopertinaArtista from "./CopertinaArtista";
import IconeRiproduzione from "../componentiAlbumPage/IconeRiproduzione";
import ListaTracceArtista from "./ListaTracceArtista";
import DatiTracce from "../componentiAlbumPage/DatiTracce";
import MettiCardAlbum from "../MettiCardAlbum";
/* import CopertinaAlbum from './CopertinaAlbum';
import IconeRiproduzione from './IconeRiproduzione';
import DatiTracce from './DatiTracce';
import ListaTracce from './ListaTracce'; */

function rigaAlbumArtista(tracks) {
  let giàPresenti = [];

  let rigaAlbumArtista = [];
  tracks.forEach((ele) => {
    if (!giàPresenti.includes(ele.album.title)) {
      giàPresenti.push(ele.album.title);
      rigaAlbumArtista.push(ele);
    }
  });
  return rigaAlbumArtista;
}

export default function CentroArtisti() {
  const [id, setId] = useState(useParams());
  const dispatch = useDispatch();
  const infoArtista = useSelector((state) => state.chiamataArtista.info);
  const tracce = useSelector((state) => state.chiamataArtista.tracce);
  const loading = useSelector((state) => state.chiamataAlbum.loading);
  const error = useSelector((state) => state.chiamataAlbum.error);
  const successo = useSelector((state) => state.chiamataArtista.successo);

  useEffect(() => {
    dispatch(getArtistaInfo(id));
  }, [id]);

  useEffect(() => {
    if (successo[0]) {
      dispatch(getArtistaTracks(infoArtista.tracklist));
    }
    console.log(infoArtista);
  }, [infoArtista]);

  useEffect(() => {
    console.log(tracce);
  }, [tracce]);

  return (
    <div className="centroFelipe text-white rounded px-0 colonnaPrincipale">
      <CopertinaArtista />
      <IconeRiproduzione />
      <div className="row container-fluid">
        <div className="col-xl-12 col-lg-12 infoList mb-3">
          <h4 className="px-3">Popolari</h4>
          <DatiTracce />
          <ListaTracceArtista />
          <div className="container bg-transparent d-none listaNascosta"></div>
          <div className="container">
            <p className=" ps-3 piccoloFont py-2 mostraListaNascosta">
              Visualizza altro
            </p>
          </div>
        </div>
        <div className="col-xxl-4 destraInt d-block px-4 cardLaterale"></div>
        <div className="pt-5 px-4">
          <h4 className="mostraAltro">Discografia</h4>
          <div className="btnDisco py-3">
            <button>Uscite popolari</button>
            <button>Album</button>
            <button>Singoli ed EP</button>
          </div>
          <div className="longCard visibile d-flex justify-content-between flex-wrap">
            {rigaAlbumArtista(tracce).map((ele) => (
            <MettiCardAlbum key={ele.id} traccia={ele} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
