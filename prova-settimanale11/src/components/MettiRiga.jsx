import React from 'react'
import MettiCardArtista from './MettiCardArtista';
import { useDispatch, useSelector } from 'react-redux';
import { getTracks } from '../slice/rigaSlice';
import { useEffect } from 'react';
import { sottoArray } from '../api/api';
import MettiCardAlbum from './MettiCardAlbum';

const titoloRiga = ["Artisti belli", "Album Belli", "Album Bellissimi"]

function rigaArtist(tracks) {
  let giàPresenti = [];
  let rigaArtistMostraAltro = [];
  let rigaArtistHome = [];
  tracks.forEach(ele => {
    if (!giàPresenti.includes(ele.artist.name)) {
      giàPresenti.push(ele.artist.name);
      rigaArtistMostraAltro.push(ele);
      if (rigaArtistHome.length < 4) {
        rigaArtistHome.push(ele);
      }
    }
  });
  return [rigaArtistHome, rigaArtistMostraAltro];
}

function rigaAlbum(tracks) {
  let giàPresenti = [];
  let rigaAlbumMostraAltro = [];
  let rigaAlbumHome = [];
  tracks.forEach(ele => {
    if (!giàPresenti.includes(ele.album.title)) {
      giàPresenti.push(ele.album.title);
      rigaAlbumMostraAltro.push(ele);
      if (rigaAlbumHome.length < 4) {
        rigaAlbumHome.push(ele);
      }
    }
  });
  return [rigaAlbumHome, rigaAlbumMostraAltro];
}


export default function MettiRiga({ nRiga, parola }) {
 
  const riga = useSelector(state => state.riga.riga[nRiga]);
  const loading = useSelector(state => state.riga.loading);
  const error = useSelector(state => state.riga.error);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(parola);
  }, [])

  useEffect(() => {
    if (riga.length==0) {
      dispatch(getTracks([nRiga, parola]));
    }
  }, [riga])

  return (
    <>
      <div className="d-flex mt-4 mostraAltro">
        <h4 className="pe-auto">{titoloRiga[nRiga]}</h4>
        <p className="ms-auto para">VISUALIZZA TUTTO</p>
      </div>
      <div className="longCard artisti d-flex flex-wrap justify-content-between">
        {nRiga == 0
          ? rigaArtist(sottoArray(riga, riga.length))[0].map((ele) => (
            <MettiCardArtista key={ele.id} traccia={ele} />
          ))
          : rigaAlbum(sottoArray(riga, riga.length))[0].map((ele) => (
            <MettiCardAlbum key={ele.id} traccia={ele} />
          ))}
      </div>
    </>
  )
}
