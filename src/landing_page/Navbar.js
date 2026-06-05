import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>

      <style>
        {`
        @keyframes pulse{
          0%{
            box-shadow:0 0 0 0 rgba(13,110,253,.5)
          }

          70%{
            box-shadow:0 0 0 10px rgba(13,110,253,0)
          }

          100%{
            box-shadow:0 0 0 0 rgba(13,110,253,0)
          }
        }
        `}
      </style>


      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background:"rgba(255,255,255,.9)",
          backdropFilter:"blur(15px)",
          boxShadow:"0 5px 25px rgba(0,0,0,.08)"
        }}
      >

        <div className="container p-2">


          <Link className="navbar-brand" to="/">

            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{
                width:"150px"
              }}
            />

          </Link>



          <button

            className="navbar-toggler"

            type="button"

            data-bs-toggle="collapse"

            data-bs-target="#navbarSupportedContent"

            aria-controls="navbarSupportedContent"

            aria-expanded="false"

            aria-label="Toggle navigation"

          >

            <span className="navbar-toggler-icon"></span>

          </button>





          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >


            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">


              <li className="nav-item">

                <Link className="nav-link active" to="/about">

                  About

                </Link>

              </li>



              <li className="nav-item">

                <Link className="nav-link active" to="/products">

                  Product

                </Link>

              </li>




              <li className="nav-item">

                <Link className="nav-link active" to="/pricing">

                  Pricing

                </Link>

              </li>




              <li className="nav-item">

                <Link className="nav-link active" to="/support">

                  Support

                </Link>

              </li>





              <li className="nav-item">


                <Link

                  to="/signup"

                  className="btn btn-primary rounded-pill px-4 ms-lg-3"

                  style={{
                    animation:"pulse 2s infinite"
                  }}

                >

                  Signup

                </Link>


              </li>


            </ul>


          </div>


        </div>


      </nav>


    </>
  );
}


export default Navbar;


/*
Add this in index.css:

body{
  padding-top:75px;
}

*/
