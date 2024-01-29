import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import { riproduci } from '../../slice/inRiproduzioneSlice';
import { useNavigate } from 'react-router-dom';
import { aggiungiPreferiti,togliPreferiti } from '../../slice/preferitiSlice';

export default function ListaTracce() {

  let preferiti = useSelector(state => state.preferiti.preferiti)
  const navigate=useNavigate()
  const dispatch = useDispatch();
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
              <span className="indice me-4 manina">
                {index+1}
              </span>
            </div>
            <div className="col-1 ps-0 pe-2 me-4 manina">
              <img
                src={ele.album.cover_small}
                alt="Song ${i + 1}"
                className="rounded"
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            </div>
            <div className="col-5 truncate-text align-items-center px-0">
              <span className="truncate-text mb-0 title manina d-block" onClick={()=>dispatch(riproduci(ele))}>
                {ele.title}
              </span>
             <span className="truncate-text mb-0 title manina" onClick={()=>navigate('/artist/'+ele.artist.id)}>
                {ele.artist.name}
              </span >
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
              <a className="cuoricino manina mb-5">
                    {!preferiti.includes(ele.id) ? (
                      <i class="bi bi-suit-heart"
                        onClick={() => {dispatch(aggiungiPreferiti(ele.id))}}
                      ></i>
                    ) : (
                      <i
                        class="bi bi-heart-fill"
                        onClick={() => dispatch(togliPreferiti(ele.id))}
                      ></i>
                    )}
                  </a>
            </div>
          </div>
          )}
    </div>
    </>
  )
}
