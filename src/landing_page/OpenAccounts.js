import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (

    <section

      style={{

        minHeight:"500px",

        background:
        "radial-gradient(circle at top right,#08214a 0%,#020409 35%,#000 100%)",

        display:"flex",
        alignItems:"center",
        justifyContent:"center",

        overflow:"hidden",

        position:"relative"

      }}

    >
      {/* Glow Effect */}

      <div

        style={{

          position:"absolute",

          width:"350px",
          height:"350px",

          border:"1px solid rgba(0,119,255,.25)",

          borderRadius:"50%",

          right:"-120px",
          top:"50px",

          filter:"blur(2px)"

        }}

      />






      <div

        className="container text-center"

        style={{

          position:"relative",

          zIndex:2,

          padding:"60px 20px"

        }}

      >



        <h1

          style={{

            color:"#f5f7ff",

            fontSize:"clamp(2.5rem,6vw,5rem)",

            fontWeight:"400",

            letterSpacing:"-3px",

            marginBottom:"20px"

          }}

        >


          Open a TradeZen Account, NOW


        </h1>






        <p

          style={{

            color:"#8b93a7",

            fontSize:"20px",

            maxWidth:"650px",

            margin:"0 auto 50px",

            lineHeight:"1.7"

          }}

        >


          Modern platforms and smart trading tools.  
          Start your investing journey and grow with us.


        </p>


        <Link

          to="/signup"

          className="btn"


          style={{

            background:"#1d2433",

            color:"white",


            padding:"18px 45px",


            borderRadius:"50px",


            fontSize:"18px",

            fontWeight:"600",


            boxShadow:
            "0 0 40px rgba(0,119,255,.25)",


            border:"1px solid rgba(255,255,255,.08)",


            transition:".3s"


          }}

        >


          Create Account


        </Link>

      </div>

    </section>

  );
}


export default OpenAccount;