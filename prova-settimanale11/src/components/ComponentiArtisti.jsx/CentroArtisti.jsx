import React, { useEffect, useState} from 'react';
import BarraNavigazione from '../BarraNavigazione';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getArtistaInfo, getArtistaTracks } from '../../slice/chiamataArtistaSlice';
import CopertinaArtista from './CopertinaArtista';
/* import CopertinaAlbum from './CopertinaAlbum';
import IconeRiproduzione from './IconeRiproduzione';
import DatiTracce from './DatiTracce';
import ListaTracce from './ListaTracce'; */


export default function CentroArtisti() {

  const [id, setId] = useState(useParams());
  const dispatch = useDispatch();
  const infoArtista = useSelector(state => state.chiamataArtista.info);
  const tracce =  useSelector(state => state.chiamataArtista.tracce);
  const loading = useSelector(state => state.chiamataAlbum.loading);
  const error = useSelector(state => state.chiamataAlbum.error);
  const successo = useSelector(state=>state.chiamataArtista.successo);

  useEffect(() => {
    dispatch(getArtistaInfo(id));
  }, [id])

useEffect(()=>{
  if (successo[0]) {
    dispatch(getArtistaTracks(infoArtista.tracklist))
  }
  console.log(infoArtista);
},[infoArtista])

useEffect(()=>{
  console.log(tracce);
},[tracce])
  




  return (
    <div className="centroFelipe text-white rounded px-0 colonnaPrincipale">
   <CopertinaArtista/>
    <div className="col mt-2 p-2 mb-4 d-flex align-items-center">
      <div className="d-flex px-2 mb-2">
        <i className="bi bi-play-circle-fill text-success p-2 fs-1" />
      </div>
      <div className="">
        <button className="btn btn-outline-light px-3 py-1 mb-2 fs-6">
          FOLLOWING
        </button>
        <i className="bi bi-three-dots p-2 " />
      </div>
    </div>
    <div className="row container-fluid">
      <div className="col-xl-12 col-lg-12 infoList mb-3">
        <h4 className="px-3">Popolari</h4>
        <div className="container bg-transparent pt-3 listaPrincipale">
          {"{"}/*{" "}
          {/* <ul class="list-group mt-4 bg-transparent" id="parentUl"> */} */
          {"}"}
          {"{"}/*{" "}
          <li className="list-group-item d-flex align-items-center bg-transparent">
            <span className="mr-5 px-3 text-lightgray">1</span>
            <img
              src="assets/imgs/main/image-1.jpg"
              alt="Song 1"
              className="rounded"
              style={{ width: 50, height: 50, objectFit: "cover" }}
            />
            <div className="ml-3 text-white d-flex ">
              <div className="font-weight-bold d-flex  mb-0 ">
                <p className="px-4 mt-3">Canzone</p>
              </div>
              <div className="px-5 d-none d-md-block">
                <p className="px-4 mt-3 text-lightgray ">5.954.200</p>
              </div>
              <div className="px-5 d-none d-xl-block">
                <p className="px-4 mt-3 text-lightgray">3:30</p>{" "}
              </div>
            </div>
          </li>{" "}
          */{"}"}
          {"{"}/* {/* </ul> */} */{"}"}
        </div>
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
        <div className="longCard visibile d-flex justify-content-between"></div>
      </div>
    </div>
  </div>
  
  )
}
