import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Owl from "../slider/owlcarousel/Owl";
import Klinik from "../klinik/Klinik.js";
import Social from "../iletisim/Social";

import TopluHizmet from "../topluhizmet/TopluHizmet.js";

function Home() {
  return (
    <div>
      <div className="row">
        <Klinik />
      </div>

      <hr />
      <div className="row">
        <TopluHizmet />
      </div>

      <hr />
      <div
       
        style={{ margin: "auto", display: "block", justifyContent: "center" }}
      >
        <Social />
      </div>
      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            color: "#E59026",
            fontFamily: "sans-serif",
          }}
        >
          Hizmetlerimiz
        </h2>
        <Owl />
      </div>

      <hr />
      <div className="row m-2">
        <div
          className="col-lg-6 col-md-6 col-sm-6 col-12"
          style={{ marginTop: "2.5rem" }}
        >
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12763.416476154647!2d30.703794!3d36.893838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2958a6926cf88549%3A0xd34d698391e21bd4!2sLavinya%20Golden%20Antalya!5e0!3m2!1str!2str!4v1678278213486!5m2!1str!2str"
            className="googleharita"
            style={{
              width: "100%",
              height: "45rem",
              frameBorder: "0",
              allowFullScreen: "",
              referrerpolicy: "no-referrer-when-downgrade",
              ariaHidden: "false",
              tabIndex: "0",
              border: "2px #E59026 solid",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {" "}
          </iframe>
        </div>

        <div
          className="col-lg-6 col-md-6 col-sm-6 col-12"
          style={{ marginTop: "2.5rem" }}
        >
          <NedenBercislina />
        </div>
      </div>
    </div>
  );
}

export default Home;
