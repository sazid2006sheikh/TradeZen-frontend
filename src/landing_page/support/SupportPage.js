import React from "react";

import Hero from "./Hero";
import RaiseTicket from "./CreateTicket";


function SupportPage(){


return(

<div

style={{

height:"100vh",

overflow:"hidden"

}}

>


<div

style={{

height:"100%",

overflowY:"scroll",

overflowX:"hidden",

scrollBehavior:"smooth",

scrollbarWidth:"none"

}}

>


<Hero/>


<RaiseTicket/>


</div>



</div>


)

}


export default SupportPage;