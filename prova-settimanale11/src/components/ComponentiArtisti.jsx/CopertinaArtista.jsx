import React from 'react'
import BarraNavigazione from '../BarraNavigazione'

export default function CopertinaArtista() {
  return (
    <div className="card bg-dark text-white border border-0">
    <img
      className="card-img bannerimg cardSizing container-fluid px-0"
      id="bannerArtist"
      src="assets/imgs/main/image-20-Banner.jpg"
      alt="Card image"
    />
    <div className="card-img-overlay">
      <BarraNavigazione/>
      <div className="custom-mt">
        <div className="col d-flex">
          <i className="bi bi-patch-check-fill text-primary" />
          <p className="px-2">Artista verificato</p>
        </div>
        <h1 className="card-title" id="artistName">
          Yellowcard
        </h1>
        <p className="mt-3" id="fansArtist">
          3.400.200 ascoltatori mensili
        </p>
      </div>
    </div>
  </div>
  )
}
