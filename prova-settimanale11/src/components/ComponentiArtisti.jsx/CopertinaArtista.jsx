import React, { useEffect, useState} from 'react';
import BarraNavigazione from '../BarraNavigazione';
import { useSelector } from 'react-redux';

export default function CopertinaArtista() {
  const infoArtista = useSelector(state => state.chiamataArtista.info);
  const loading = useSelector(state => state.chiamataAlbum.loading);
  const error = useSelector(state => state.chiamataAlbum.error);
  const successo = useSelector(state=>state.chiamataArtista.successo);


  return (
    <div className="card bg-dark text-white border border-0">
    <img
      className="card-img bannerimg cardSizing container-fluid px-0"
      id="bannerArtist"
      src={infoArtista.picture_xl}
      alt="Card image"
    />
    <div className="card-img-overlay">
      <BarraNavigazione/>
      <div className="custom-mt">
        <div className="col d-flex">
          <i className="bi bi-patch-check-fill text-primary" />
          <p className="px-2">Artista verificato</p>
        </div>
        {successo[0] && <> <h1 className="card-title" id="artistName">
          {infoArtista.name}
        </h1>
        <p className="mt-3" id="fansArtist">
          {infoArtista.nb_fan} fan mensili
        </p></>}
      </div>
    </div>
  </div>
  )
}
