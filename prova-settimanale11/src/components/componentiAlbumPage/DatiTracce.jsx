import React from 'react'

export default function DatiTracce() {
  return (
    <div className="row rigaAlbum mx-2">
    <div className="col-1">#</div>
    <div className="col-5">Titolo</div>
    <div className="col-1" />
    <div className="col-3 riproduzioni d-flex flex-row-reverse pe-4">Riproduzioni</div>
    <div className="col-2 d-flex flex-row-reverse pe-4">
      <i className="bi bi-clock " />
    </div>
  </div>
  )
}
