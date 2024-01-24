import React, { useEffect, useState} from 'react';
import BarraNavigazione from '../BarraNavigazione';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumTracks } from '../../slice/chiamataAlbumSlice';
import CopertinaAlbum from './CopertinaAlbum';
import IconeRiproduzione from './IconeRiproduzione';
import DatiTracce from './DatiTracce';
import ListaTracce from './ListaTracce';

export default function CentroAlbum() {

  const [id, setId] = useState(useParams());
  const dispatch = useDispatch();
  const chiamataAlbum = useSelector(state => state.chiamataAlbum.chiamataAlbum);
  const loading = useSelector(state => state.chiamataAlbum.loading);
  const error = useSelector(state => state.chiamataAlbum.error);

  useEffect(() => {
    dispatch(getAlbumTracks(id));
  }, [id])

  useEffect(()=>{
    console.log(chiamataAlbum);
  },[chiamataAlbum])


  return (
    <div className="centroAnna centroFelipe text-white rounded px-0 ">
     <CopertinaAlbum/>
      <IconeRiproduzione/>
      <div className="row container-fluid">
        <div className="col-xl-12 col-lg-12 infoList mb-3">
         <DatiTracce/>
         <ListaTracce/>
          <div className="container bg-transparent d-none listaNascosta">

          </div>
        </div>
        <hr className="hrAlbum" />
        
        <div className="pt-5 px-4">
          <h4>Discografia</h4>
          <div className="btnDisco py-3">
            <button>Album</button>
            <button>Singoli ed EP</button>
          </div>
          <div className="longCard d-flex justify-content-between"></div>
        </div>
      </div>
    </div>
  )
}
