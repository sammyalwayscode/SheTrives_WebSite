import React from 'react'
// import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
import "./NavContact.css"
import AjMap from "../PI/Image/mapp.png"

function NavContact() {
  return (
    <div>
      {/* <Header /> */}
      <div className="generalContact">
        <div className="generalContactWithHold">
          <div className="contactText">
            <p style={{ fontSize: "50px" }}>Our Location</p>
            <p style={{ fontSize: "20px" }} >No 4 Barista Ahmed Street Off Mechanic Bus Stop Orige Ajegunle-Apapa Lagos </p>
            <p style={{ fontSize: "30px" }}>Hours</p>
            <a style={{ fontSize: "20px" }}>Monday-Saturday: 8am-5pm</a>
          </div>
          <img src={AjMap} alt="" className="mapCont" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default NavContact
