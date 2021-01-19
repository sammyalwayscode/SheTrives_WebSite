import React from 'react'
import sidePixOne from "../PI/Image/longthreee.png"

function HomeCont2() {
  return (
    <div style={{
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "flex-end"
    }}>
      <div style={{
        width: "1270px",
        // backgroundColor: "red",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          width: "593px",
          display: "flex",
          flexWrap: "wrap",
          // backgroundColor: "pink",
          justifyContent: "space-between"
        }} >

          {/* No One */}
          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Total Packages<br /> Delivered</p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#49aaaf" }}>200,000 +</p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#49aaaf" }}>Delivered Packages</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>Our expert talent team ensures we source the right talent at the right time.</p>
            <hr />
          </div>


          {/* Two */}




          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Total Girls <br /> Satisfied</p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#df1995" }}>100%</p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#df1995" }}>Satisfied Girls</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>We have so grown to an extent that every girl we've met are just so satisfied.</p>
            <hr />
          </div>


          {/* three */}


          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Our years of<br /> expirence</p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#98be24" }}>96</p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#98be24" }}>Years of Expirence</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>We are just so expirenced that we just seems to meet the exact need of every girl child met</p>
            {/* <hr /> */}
          </div>


          {/* four  */}



          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>How far<br />We've Gone </p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#fbae30" }}> 70 + </p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#fbae30" }}>Countries Covered</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>We have extended our generocity past the shores of Ajegunle and Nigeria</p>
            {/* <hr /> */}
          </div>




        </div>
        <img src={sidePixOne} alt="" />
      </div>
    </div>
  )
}

export default HomeCont2
