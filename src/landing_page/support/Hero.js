import React,{useState} from "react";


function Hero(){


const [search,setSearch]=useState("");



return(


<section

style={{

background:"linear-gradient(135deg,#f8fafc,#eff6ff)",

padding:"100px 0"

}}

>


<div className="container">


<div className="row align-items-center">



{/* LEFT */}

<div className="col-lg-6">


<span

style={{

color:"#2563eb",

fontWeight:"700",

letterSpacing:"2px"

}}

>

TRADEZEN SUPPORT

</span>





<h1

style={{

fontSize:"clamp(3rem,7vw,5rem)",

fontWeight:"800",

color:"#0f172a",

lineHeight:"1",

marginTop:"20px"

}}

>


Need help with

<br/>

your trading?


</h1>





<p

style={{

fontSize:"20px",

color:"#64748b",

margin:"30px 0"

}}

>


Find answers, learn trading tools,
or connect with our support team anytime.


</p>








{/* SEARCH */}

<div

style={{

background:"white",

borderRadius:"50px",

padding:"12px",

display:"flex",

boxShadow:
"0 20px 60px rgba(37,99,235,.15)"

}}

>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search stocks, orders, account issues..."

style={{

border:"none",

outline:"none",

flex:1,

padding:"10px 20px"

}}


/>



<button

className="btn btn-primary rounded-pill px-4"

>

Search

</button>



</div>





</div>










{/* RIGHT */}

<div className="col-lg-6 mt-5 mt-lg-0">


<div

style={{

background:"white",

borderRadius:"30px",

padding:"35px",

boxShadow:
"0 30px 80px rgba(37,99,235,.15)"

}}

>


<h4>

⚡ Support Performance

</h4>


<hr/>




<h2>

24/7

</h2>

<p>

Market assistance available

</p>



<h2>

2 min

</h2>

<p>

Average response time

</p>




<h2>

1M+

</h2>

<p>

TradeZen community members

</p>




</div>



</div>





</div>


</div>



</section>


)


}



export default Hero;