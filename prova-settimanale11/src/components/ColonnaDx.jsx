import React from 'react'

export default function ColonnaDx() {
  return (
    <div className="colonnaDestra col-md-2 px-2 d-none d-md-block rounded-4">
  <div className="attività d-flex justify-content-around w-100 mt-3 px-2 mb-5">
    <p className="h6 me-auto">Attività amici</p>
    <div>
      <a >
        <i className="bi bi-person-plus" />
      </a>
      <a >
        <i className="bi bi-x-lg" />
      </a>
    </div>
  </div>
  <div className="container amici p-0 pe-2"></div>
</div>

  )
}
