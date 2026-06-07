import { Link } from "react-router-dom";
import StockChart from "./Stockchart";



function PricingHero(){

    return(

        <section

        style={{

        minHeight:"90vh",

        background:
        "linear-gradient(135deg,#F8FAFC,#EFF6FF)",

        display:"flex",

        alignItems:"center"

        }}

        >
        <div className="container">

                <div className="row align-items-center">

                {/* LEFT */}

                <div className="col-lg-6">



                <span

                style={{

                color:"#2563EB",

                fontWeight:"700",

                letterSpacing:"2px"

                }}

                >

                • OUR PRICING —

                </span>

                <h1
                    style={{
                    fontSize:"clamp(3rem,7vw,5.5rem)",
                    fontWeight:"800",
                    color:"#0F172A",
                    lineHeight:"1"
                    }}
                >
                Trade smarter.
                <br/>
                Pay simpler.
                </h1>

                <p
                    style={{
                    fontSize:"20px",
                    color:"#64748B",
                    margin:"30px 0"
                    }}
                >
                Experience powerful trading tools with
                transparent pricing and zero hidden charges.
                </p>

                <div className="d-flex gap-4 mb-5">

                <div>

                <h2>
                ₹0
                </h2>

                <small>
                Delivery
                </small>

                </div>

        <div>
            <h2> ₹20</h2>
            <small>Orders</small>
        </div>

        <div>
            <h2> 0% </h2>
            <small>Hidden Fees</small>
        </div>

    </div>

        <Link className="btn btn-primary rounded-pill px-5 py-3" to="/signup" >
        Start Trading
        </Link>
    </div>



        {/* RIGHT */}
        <div className="col-lg-6">

        <StockChart/>

        </div>


        </div>
    </div>
    </section>

)}

export default PricingHero;