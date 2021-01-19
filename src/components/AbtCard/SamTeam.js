import React from 'react'
import AbtCard from './AbtCard'
import osas from '../Team/Image/osa.jpg'
import mBukky from '../Team/Image/team 1.jpg'
import grace from '../Team/Image/team 2.jpg'

function SamTeam() {
  return (
    <div style={{
      height: "530px",
      width: "100vw",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }}>
      <div style={{
        width: "1100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <AbtCard holderImage={mBukky} holderName="Bukola Gbemi" holderPost="Founder She Trives" />
        <AbtCard holderImage={grace} holderName="Grace Olorunda" holderPost="Bride" />
        <AbtCard holderImage={osas} holderName="Osazie Olorunda" holderPost="Flower Girl" />
      </div>
    </div>
  )
}

export default SamTeam
