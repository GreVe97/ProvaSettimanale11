import React from 'react'
import BarraNavigazione from '../components/BarraNavigazione'

export default function Searchpage() {
  return (
    <div className="col-7 searchPage overflow-auto">
      <div className="p-3 container">
        <BarraNavigazione/>
      <form className="input-group mb-3 w-50 ms-3" id="search">
            <button
              className="btn btn-outline-secondary rounded-start-pill searchInp border border-white btnInput"
              type="button"
              id="button-addon1"
            >
              <i className="bi bi-search" />
            </button>
            <input
              type="search"
              className="form-control rounded-end-pill searchInp text-white"
              placeholder="Cosa vuoi ascoltare?"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </form>
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
        <div className="d-none" id="toShow">
          <div className="container risultatiRicerca row mt-2">
            <div className="col-6">
              <h3>Risultato più rilevante</h3>
              <div className="cardRisRil rounded-2 p-3">
                <img className="rounded-circle w-25" id="imgPiuRelevante" src="" />
                <p className="h2" id="nomePiuRelevante">
                  Rage Against the machine
                </p>
                <p className="h6">artista</p>
              </div>
            </div>
            <div className="col-6">
              <h3>Brani</h3>
              <div className="row mb-1" id="ulBraniParent">
                {/*    <div class="col-3"><img class="w-75" src="assets/imgs/main/image-14.jpg"></div>
          <div class="col-6 pBrani"> <p class="mb-0" >titolo</p>
          <p class="mb-0">artista</p>
          </div>
          <div class="col-3"><p class="pBrani">3.50</p></div>*/}
              </div>
            </div>
          </div>
          <div className="container  row mt-2 " id="longCard">
            <div className="col-12 mb-2 ml-4">
              <h3>
                <p id="risultatoNome">Rage against the machine</p>
              </h3>
            </div>
            {/* <div class="card d-flex cardPlayl col-3" style="width: 18rem;" > */}
            {/* <img src="..." class="card-img-top" alt="...">
  <button class="playPCard position-absolute">
      <i class="bi bi-play-fill"></i>
  </button>
  <div class="card-body">
    <p class="card-title">Card title</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div> */}
          </div>
        </div>
        {/*INSERIRE QUI*/}
        <div className="container">
          <h4>Sfoglia tutto</h4>
        </div>
        <div className=" container row ">
          <div className="col-3 card mb-3 border border-0  divCard  overflow-hidden ">
            <div className="card-body arancio  rounded-2 squareCard overflow-hidden">
              <h5 className="card-title ">Podcast</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-2.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0  divCard  overflow-hidden ">
            <div className="card-body blu  rounded-2 squareCard overflow-hidden ">
              <h5 className="card-title ">Create per te</h5>
              <img
                className="RotateImg rounded-1  ml-auto"
                src="assets/imgs/search/image-4.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0  divCard  overflow-hidden ">
            <div className="card-body fucsia  rounded-2 squareCard overflow-hidden ">
              <h5 className="card-title ">Nuove uscite</h5>
              <img
                className="RotateImg rounded-1  ml-auto"
                src="assets/imgs/search/image-26.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body verde  rounded-2 squareCard  overflow-hidden ">
              <h5 className="card-title ">Pop</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-47.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body arancio1  rounded-2 squareCard  overflow-hidden  ">
              <h5 className="card-title ">Hip hop</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-49.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body arancio  rounded-2 squareCard  overflow-hidden ">
              <h5 className="card-title ">Dance/ Elettronica</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-3.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body fucsia1 rounded-2 squareCard  overflow-hidden ">
              <h5 className="card-title ">Latina</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-5.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body viola  rounded-2 squareCard  overflow-hidden  ">
              <h5 className="card-title">Classifiche</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-14.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body verde  rounded-2 squareCard  overflow-hidden ">
              <h5 className="card-title">Il 2023 in musica</h5>
              <img
                className="RotateImg rounded-1 ml-auto"
                src="assets/imgs/search/image-35.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body blu  rounded-2 squareCard  overflow-hidden ">
              <h5 className="card-title">Il 2023 in podcast</h5>
              <img
                className="RotateImg rounded-1  col-12 ml-auto"
                src="assets/imgs/search/image-15.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
            <div className="card-body arancio1  rounded-2 squareCard  overflow-hidden  ">
              <h5 className="card-title">Merch</h5>
              <img
                className="RotateImg rounded-1 ml-auto "
                src="assets/imgs/search/image-50.jpg"
                alt="img sezione"
              />
            </div>
          </div>
          <div className="col-3 card mb-3 border border-0 overflow-hidden d-flex divCard ">
            <div className="card-body fucsia  rounded-2 squareCard  overflow-hidden ">
              <h5 className="card-title ">Nuove uscite</h5>
              <img
                className="RotateImg rounded-1 ml-auto "
                src="assets/imgs/search/image-39.jpg"
                alt="img sezione"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
