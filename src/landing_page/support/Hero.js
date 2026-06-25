import React,{useState} from "react";


function Hero(){


const [search,setSearch]=useState("");



return(

<section

style={{

height:"100vh",

background:
"linear-gradient(135deg,#020617,#0f172a,#1e3a8a)",

padding:"120px 0",

position:"sticky",

top:"0",

zIndex:"1",

overflow:"hidden"

}}

>



{/* Background Glow */}

<div

style={{

position:"absolute",

width:"350px",

height:"350px",

borderRadius:"50%",

background:"#2563eb",

filter:"blur(150px)",

right:"5%",

top:"20%",

opacity:.5

}}

></div>







<div className="container position-relative">



<div className="row align-items-center">





{/* LEFT SIDE */}

<div className="col-lg-6">



<span

style={{

padding:"10px 22px",

borderRadius:"40px",

background:"rgba(255,255,255,.12)",

color:"#93c5fd",

fontWeight:"700",

letterSpacing:"2px"

}}

>

⚡︎ TRADEZEN SUPPORT

</span>







<h1

style={{

fontSize:"clamp(3rem,7vw,5rem)",

fontWeight:"900",

color:"white",

lineHeight:"1",

marginTop:"30px"

}}

>

Trade Smarter.

<br/>

Support Faster.


</h1>







<p

style={{

fontSize:"20px",

color:"#cbd5e1",

margin:"35px 0",

lineHeight:"1.7"

}}

>

Find solutions for trading issues, manage your account,
and connect with experts instantly.


</p>









{/* Search */}

<div

style={{

background:"rgba(255,255,255,.15)",

border:"1px solid rgba(255,255,255,.25)",

backdropFilter:"blur(20px)",

borderRadius:"60px",

padding:"12px",

display:"flex",

boxShadow:
"0 25px 80px rgba(0,0,0,.25)"

}}

>




<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search orders, stocks, payments..."

style={{

border:"none",

outline:"none",

flex:1,

background:"transparent",

color:"white",

padding:"12px 20px"

}}

/>






<button

style={{

border:"none",

borderRadius:"40px",

padding:"12px 35px",

fontWeight:"700",

background:
"linear-gradient(135deg,#3b82f6,#8b5cf6)",

color:"white"

}}

>

Search →

</button>



</div>






</div>









{/* RIGHT SIDE */}

<div className="col-lg-6 mt-5 mt-lg-0">



<div

className="hero-card"

style={{

background:"rgba(255,255,255,.12)",

backdropFilter:"blur(25px)",

border:"1px solid rgba(255,255,255,.2)",

borderRadius:"35px",

padding:"45px",

boxShadow:
"0 30px 100px rgba(0,0,0,.35)",

transition:".4s"

}}

>





<h4

style={{

color:"white",

fontWeight:"800"

}}

>

 Support Analytics

</h4>



<hr style={{color:"white"}}/>








{

[

["24/7","Market assistance"],
["2 min","Average response time"],
["1M+","Active TradeZen users"]

].map((data,index)=>(



<div

key={index}

style={{

marginTop:"30px",

padding:"20px",

borderRadius:"22px",

background:"rgba(255,255,255,.10)"

}}

>



<h2

style={{

color:"#60a5fa",

fontWeight:"900"

}}

>

{data[0]}

</h2>




<p

style={{

color:"#e2e8f0",

margin:0

}}

>

{data[1]}

</p>




</div>



))


}







</div>



</div>




</div>


</div>






<style>

{`

.hero-card:hover{

transform:
translateY(-15px);

box-shadow:
0 40px 120px rgba(37,99,235,.35)!important;


}


input::placeholder{

color:#cbd5e1;

}

`}

</style>




</section>


)


}


export default Hero;