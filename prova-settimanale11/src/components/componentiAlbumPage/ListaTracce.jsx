import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ListaTracce() {
    const chiamataAlbum = useSelector(state => state.chiamataAlbum.chiamataAlbum);
    const successo = useSelector(state =>state.chiamataAlbum.successo)
    useEffect(()=>{
        console.log(chiamataAlbum);

    },[chiamataAlbum])

  return (
    <>
    <div className="container bg-transparent pt-3 listaPrincipale">
        {successo && chiamataAlbum.tracks.data.map((ele,index)=>
            <div className="row mb-3" key={ele.id}>
            <div className="col-1 text-end ms-3 d-flex align-items-center justify-content-end play">
              <span className="indice me-4">
                {index+1}
              </span>
            </div>
            <div className="col-1 ps-0 pe-2 me-4">
              <img
                src={ele.album.cover_small}
                alt="Song ${i + 1}"
                className="rounded"
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            </div>
            <div className="col-5 truncate-text d-flex align-items-center px-0">
              <span className="truncate-text mb-0 title">
                {ele.title}
              </span>
            </div>
            <div className="col-3 d-flex align-items-center colAscolti">
              <span className="ascolti">
                {ele.rank.toLocaleString('it-IT')}
              </span>
            </div>
            <div className="col-md-1 col-3 d-flex align-items-center justify-content-center">
              <span className="durata text-center">
                { Math.floor(ele.duration/ 60)}:{ele.duration%60}
              </span>
            </div>
          </div>
          )}
    </div>
    </>
  )
}
