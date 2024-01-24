import React from 'react'

export default function Canzonciona() {
  return (
    <>
     <div id="canzonciona" className="card big-card mb-3 canzonciona">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-3  foto">
              <img
                src=""
                className="img-fluid rounded-start imgBC ps-3 "
                alt="..."
              />
            </div>
            <div className="pt-3 pb-3 testoBC">
              <div className="d-flex testoUp justify-content-between pe-2 pb-0">
                <p className="card-text2">Album</p>
                <p className="ms-auto">NASCONDI ANNUNCI</p>
              </div>
              <div className=" lh-0 pt-0">
                <h1 className="card-title pt-0 fw-bold truncate-text" />
                <p className="card-text1" />
              </div>
              <div className="bottoniUp mt-2">
                <button className="playBC">Play</button>
                <button className="">Salva</button>
                <i className="bi bi-three-dots" />
              </div>
            </div>
          </div>
        </div>
        </>
  )
}
