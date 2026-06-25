import React from "react";

function RaiseTicket() {

  const tickets = [
    {
      icon: "⚠︎",
      title: "Trading Issue",
      desc: "Get instant support for orders, charts, positions and portfolio related problems.",
      color: "#3b82f6"
    },

    {
      icon: "ⓘ",
      title: "Payment Issue",
      desc: "Resolve deposits, withdrawals and transaction related queries securely.",
      color: "#22c55e"
    },

    {
      icon: "🔒︎",
      title: "Account Security",
      desc: "Manage login issues, verification, profile and security settings.",
      color: "#ef4444"
    }
  ];


  return (

    <section

    style={{

    height:"100vh",

    padding:"100px 0",

    background:
    "linear-gradient(135deg,#ffffff,#eff6ff)",

    position:"relative",

    zIndex:"10",

    borderRadius:"50px 50px 0 0",

    boxShadow:
    "0 -50px 120px rgba(0,0,0,.35)"

    }}

    >


      <div className="container">


        {/* Heading */}

        <div className="text-center mb-5">

          <span
            style={{
              background:"#dbeafe",
              color:"#2563eb",
              padding:"8px 20px",
              borderRadius:"30px",
              fontWeight:"600"
            }}
          >
            Support Center
          </span>


          <h1
            className="mt-4"
            style={{
              fontWeight:"900",
              fontSize:"45px",
              color:"#020617"
            }}
          >

            Raise a Ticket

          </h1>


          <p
            style={{
              color:"#64748b",
              fontSize:"18px"
            }}
          >

          Select your issue category and our experts will assist you.

          </p>


        </div>






        {/* Cards */}

        <div className="row g-4">


        {


        tickets.map((item,index)=>(


          <div 
            className="col-md-4"
            key={index}
          >



          <div

          className="ticket-card"


          style={{

            height:"100%",
            padding:"40px",

            borderRadius:"28px",


            background:
            "rgba(255,255,255,.75)",


            backdropFilter:"blur(20px)",


            border:
            "1px solid rgba(255,255,255,.8)",


            boxShadow:
            "0 25px 80px rgba(15,23,42,.10)",


            transition:
            "all .35s ease",


            cursor:"pointer"


          }}


          >




          <div

          style={{

            width:"75px",
            height:"75px",

            display:"flex",
            alignItems:"center",
            justifyContent:"center",

            borderRadius:"22px",

            background:item.color,

            color:"#fff",

            fontSize:"35px",

            boxShadow:
            `0 15px 40px ${item.color}55`

          }}

          >

          {item.icon}

          </div>






          <h3

          className="mt-4"


          style={{

            fontWeight:"800",

            color:"#0f172a"


          }}

          >


          {item.title}


          </h3>






          <p

          style={{

            color:"#64748b",

            lineHeight:"1.7"

          }}

          >


          {item.desc}


          </p>







          <button


          style={{


            marginTop:"20px",

            border:"none",

            padding:"12px 28px",


            borderRadius:"50px",


            background:
            "#2563eb",


            color:"#fff",

            fontWeight:"700",


            boxShadow:
            "0 10px 25px rgba(37,99,235,.3)"


          }}


          >

          Create Ticket →

          </button>





          </div>



          </div>


        ))


        }


        </div>



      </div>




      <style>

      {`

      .ticket-card:hover{

        transform:translateY(-15px) scale(1.02);

        box-shadow:
        0 35px 100px rgba(15,23,42,.18)!important;

      }

      `}

      </style>



    </section>

  )

}



export default RaiseTicket;