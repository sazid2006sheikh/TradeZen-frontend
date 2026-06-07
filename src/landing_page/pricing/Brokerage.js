import React from "react";

function Brokerage() {


  const charges = [

    {
      title:"Equity Delivery",
      price:"₹0",
      desc:"Lifetime free investing",
      glow:"#00ff99"
    },


    {
      title:"Intraday Trading",
      price:"₹20",
      desc:"Per executed order",
      glow:"#0d6efd"
    },


    {
      title:"F&O Trading",
      price:"₹20",
      desc:"Flat brokerage",
      glow:"#ffcc00"
    }

  ];



  return (

    <>


    <style>
      {`

      @keyframes move {

        0%{
          transform:translateY(0)
        }

        50%{
          transform:translateY(-12px)
        }

        100%{
          transform:translateY(0)
        }

      }


      .broker-card:hover{

        transform:translateY(-15px);

        border-color:#00ff99;

      }


      .broker-card{

        transition:.4s;

      }

      `}
    </style>






    <section


      style={{

        minHeight:"90vh",

        background:"#000",

        color:"white",

        padding:"100px 0",

        position:"relative",

        overflow:"hidden"

      }}

    >



      {/* background glow */}

      <div

      style={{

        width:"400px",

        height:"400px",

        background:"#00ff99",

        position:"absolute",

        left:"-150px",

        top:"200px",

        filter:"blur(180px)",

        opacity:.25

      }}

      />








      <div className="container">



        {/* Heading */}

        <div className="text-center mb-5">


          <span

          style={{

            color:"#00ff99",

            letterSpacing:"3px"

          }}

          >

            BROKERAGE MODEL

          </span>





          <h1

          style={{

            fontSize:"clamp(2.5rem,6vw,5rem)",

            marginTop:"20px",

            fontWeight:"700"

          }}

          >

            Transparent Charges.
            <br/>

            Zero Surprises.


          </h1>




          <p

          style={{

            color:"#9ca3af",

            fontSize:"18px"

          }}

          >

            Designed for traders who hate hidden fees.

          </p>


        </div>








        {/* Cards */}

        <div className="row g-4">



          {

          charges.map((item,index)=>(


          <div

          className="col-md-4"

          key={index}

          >


            <div


            className="broker-card"


            style={{

              background:"rgba(255,255,255,.05)",

              border:"1px solid rgba(255,255,255,.1)",

              borderRadius:"30px",

              padding:"40px",

              height:"100%",

              backdropFilter:"blur(20px)",

              boxShadow:
              `0 0 60px ${item.glow}30`

            }}


            >



              <p

              style={{

                color:item.glow

              }}

              >

              {item.title}

              </p>






              <h1

              style={{

                fontSize:"70px"

              }}

              >

                {item.price}


              </h1>




              <p

              style={{

                color:"#9ca3af"

              }}

              >

                {item.desc}

              </p>






            </div>


          </div>


          ))

          }



        </div>









        {/* Calculator */}

        <div

        className="mt-5"


        style={{

          background:
          "linear-gradient(135deg,rgba(13,110,253,.15),rgba(0,255,150,.1))",


          border:"1px solid rgba(255,255,255,.1)",


          borderRadius:"30px",


          padding:"40px",


          backdropFilter:"blur(20px)"


        }}

        >


          <div className="row align-items-center">



            <div className="col-md-6">


              <h2>

                Brokerage Simulator

              </h2>



              <p

              style={{

                color:"#9ca3af"

              }}

              >

                ₹50,000 trade value calculation


              </p>


            </div>







            <div className="col-md-6">


              <div className="d-flex justify-content-between">


                <span>
                Market Profit
                </span>



                <b style={{color:"#00ff99"}}>
                  +₹8,450
                </b>


              </div>



              <hr/>





              <div className="d-flex justify-content-between">


                <span>
                Brokerage
                </span>



                <b>
                ₹20
                </b>


              </div>





              <hr/>





              <div className="d-flex justify-content-between">


                <span>
                You Keep
                </span>



                <h3 style={{color:"#00ff99"}}>

                ₹8,430

                </h3>


              </div>


            </div>


          </div>


        </div>



      </div>


    </section>



    </>

  );


}


export default Brokerage;