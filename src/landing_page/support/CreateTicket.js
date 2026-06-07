import React from "react";


function RaiseTicket(){


const tickets=[


{
icon:"📈",
title:"Trading Issue",
desc:"Orders, charts, positions and portfolio support."
},


{
icon:"💳",
title:"Payment Issue",
desc:"Deposits, withdrawals and transaction help."
},


{
icon:"🔐",
title:"Account Security",
desc:"Login, verification and profile settings."
}


];



return(

<section

style={{

padding:"100px 0",

background:"#fff"

}}

>


<div className="container">


<div className="text-center mb-5">


<h1

style={{

fontWeight:"800",

color:"#0f172a"

}}

>

Raise a Ticket

</h1>


<p

style={{

color:"#64748b"

}}

>

Choose your issue and our specialists will connect with you.

</p>


</div>









<div className="row g-4">


{


tickets.map((item,index)=>(


<div

className="col-md-4"

key={index}

>


<div

style={{

height:"100%",

padding:"35px",

borderRadius:"25px",

background:"#f8fafc",

boxShadow:
"0 20px 60px rgba(0,0,0,.06)",

transition:".3s"

}}

>



<div

style={{

fontSize:"40px"

}}

>

{item.icon}

</div>





<h3 className="mt-4">

{item.title}

</h3>




<p

style={{

color:"#64748b"

}}

>

{item.desc}

</p>





<button

className="btn btn-outline-primary rounded-pill px-4"

>

Create Ticket

</button>



</div>



</div>


))


}



</div>


</div>



</section>


)


}



export default RaiseTicket;