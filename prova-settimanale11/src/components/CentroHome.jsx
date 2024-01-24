import React from 'react'
import Canzonciona from './Canzonciona'
import Playlist from './Playlist'
import BarraNavigazione from './BarraNavigazione';
import { parole, sottoArray } from '../api/api'
import MettiRiga from './MettiRiga';

console.log(parole);

export default function CentroHome() {

  let paroleRandom = sottoArray(parole, 3)
  console.log(paroleRandom);

  return (
    <div className="centroLeo overflow-auto">
      <div className="container finestrona">
        <BarraNavigazione />
        <Canzonciona />
        <Playlist />
        {paroleRandom.map((ele,index)=><MettiRiga key={ele} nRiga={index} parola={ele} />)}
        
        {/* <div className="longCard artisti d-flex flex-wrap justify-content-between"></div>
        <div className="longCard artistiMobile justify-content-between carousel-container"></div>
       
        <div className="longCard2 album carousel-container longCard d-flex flex-wrap justify-content-between"></div>
      
        <div className="longCard3 longCard d-flex flex-wrap justify-content-between"></div> */}
      </div>
    </div>

  )
}
