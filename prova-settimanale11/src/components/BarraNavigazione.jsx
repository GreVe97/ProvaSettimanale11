import React from 'react'
import { useNavigate } from "react-router-dom";

export default function BarraNavigazione() {
    const navigate = useNavigate();
  return (
    <div className="d-flex mb-3 bg-transparent">
          <div className="freccette me-3 lefty" onClick={()=>navigate(-1)}>
            <i className="bi bi-chevron-left rounded-circle" />
          </div>
          <div className="freccette righty" onClick={()=>navigate(1)}>
            <i className="bi bi-chevron-right rounded-circle" />
          </div>
          <div className="ms-auto rigaMobile">
            <ul className="d-flex me-auto mb-2 mb-lg-0">
              <li className="nav-item fotoProfilo">
                <img
                  className="rounded-circle"
                  src="https://fortnite-api.com/images/cosmetics/br/character_geniusblob/icon.png"
                  alt=""
                />
              </li>
              <li className="nav-item dropdown-center nomeProfilo">
                <a
                  className="nav-link dropdown-toggle"
                  
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sono Mr. Miguardi
                </a>
                <ul className="dropdown-menu mt-2">
                  <li>
                    <a className="dropdown-item text-white dropMenu">
                      Il mio profilo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white dropMenu" >
                      Impostazioni
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider text-white" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white dropMenu" >
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="bottoniMobile d-sm-none">
              <li className="nav-item">
                <button className="primo">Tutti</button>
              </li>
              <li className="nav-item">
                <button>Musica</button>
              </li>
              <li className="nav-item">
                <button>Poadcast</button>
              </li>
            </ul>
          </div>
        </div>
  )
}
