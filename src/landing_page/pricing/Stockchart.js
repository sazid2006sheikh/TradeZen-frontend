import React, { useEffect, useState } from "react";


function StockChart(){


const [candles,setCandles] = useState([

{open:24500,close:24700,high:24800,low:24300,vol:50},
{open:24700,close:24600,high:24900,low:24500,vol:70},
{open:24600,close:25000,high:25200,low:24400,vol:60},
{open:25000,close:24200,high:25100,low:24000,vol:90},
{open:24200,close:24600,high:24700,low:23900,vol:40},

]);


const [mouse,setMouse] = useState(null);

const [price,setPrice] = useState(23366.70);





// LIVE CANDLE GENERATION

useEffect(()=>{


const timer=setInterval(()=>{


setCandles(prev=>{


let last=prev[prev.length-1];


let open=last.close;


let close=open + Math.floor(Math.random()*400-200);


setPrice(close);


let high=Math.max(open,close)+150;

let low=Math.min(open,close)-150;



return [

...prev.slice(-10),

{

open,

close,

high,

low,

vol:Math.random()*100+40

}

];


});


},1000);



return()=>clearInterval(timer);



},[]);








const scale=(v)=>{

return 320-(v-23000)/10;

}










return(

<div

style={{

height:"520px",

background:"#05070a",

borderRadius:"25px",

padding:"20px",

position:"relative",

overflow:"hidden",

boxShadow:"0 25px 80px rgba(0,0,0,.3)"

}}

>







{/* TOP BAR */}



<div

style={{

color:"#d1d5db",

fontSize:"14px"

}}

>


<div className="d-flex gap-3 flex-wrap">


<b>

Nifty 50 Index · 1D · NSE

</b>



<span style={{color:"#ef4444"}}>

O 23,478.95

</span>



<span style={{color:"#10b981"}}>

H 23,516.35

</span>




<span>

L 23,282.65

</span>




<span

style={{

color:
price>24500?
"#10b981":
"#ef4444"

}}

>

C {price.toFixed(2)}

</span>


</div>







{/* BUY SELL */}


<div className="d-flex gap-3 mt-3">


<div

style={{

border:"1px solid #ef4444",

borderRadius:"8px",

padding:"6px 25px",

color:"#ef4444",

textAlign:"center"

}}

>

{(price-2).toFixed(2)}

<br/>

SELL


</div>





<div

style={{

border:"1px solid #2563eb",

borderRadius:"8px",

padding:"6px 25px",

color:"#2563eb",

textAlign:"center"

}}

>


{(price+2).toFixed(2)}

<br/>

BUY


</div>


</div>


</div>












{/* CHART */}

<svg

width="100%"

height="390"

onMouseMove={(e)=>{


let box=e.currentTarget.getBoundingClientRect();


setMouse({

x:e.clientX-box.left,

y:e.clientY-box.top

});


}}


onMouseLeave={()=>setMouse(null)}

>





{/* GRID */}



{

[50,120,190,260,330].map(y=>(


<line

key={y}

x1="0"

x2="100%"

y1={y}

y2={y}

stroke="#1f2937"

/>


))

}







{/* PRICE SCALE */}



{

[26000,25200,24400,23600,22800].map((p,i)=>(


<text

key={i}

x="90%"

y={50+i*65}

fill="#9ca3af"

fontSize="13"

>

{p.toLocaleString()}


</text>


))

}










{/* CROSS HAIR */}


{

mouse &&

<>


<line

x1={mouse.x}

x2={mouse.x}

y1="0"

y2="380"

stroke="#9ca3af"

strokeDasharray="5"

/>



<line

x1="0"

x2="100%"

y1={mouse.y}

y2={mouse.y}

stroke="#9ca3af"

strokeDasharray="5"

/>





<rect

x="83%"

y={mouse.y-15}

width="100"

height="25"

rx="5"

fill="#2563eb"

/>




<text

x="85%"

y={mouse.y+2}

fill="white"

fontSize="12"

>

{price.toFixed(2)}

</text>


</>


}









{/* CANDLES */}


{

candles.map((c,i)=>{


let green=c.close>c.open;


let x=50+i*50;


let top=scale(Math.max(c.open,c.close));


let bottom=scale(Math.min(c.open,c.close));



return(

<g key={i}>


<line

x1={x}

x2={x}

y1={scale(c.high)}

y2={scale(c.low)}

stroke={
green?
"#00b894":
"#ff4757"
}

/>





<rect

x={x-10}

y={top}

width="20"

height={bottom-top || 5}

fill={
green?
"#00b894":
"#ff4757"
}

/>





{/* VOLUME */}

<rect

x={x-10}

y={360-c.vol}

width="20"

height={c.vol}

fill={
green?
"#064e3b":
"#7f1d1d"
}

/>



</g>


)


})


}









{/* TIME */}

{

["09:15","11:00","13:30","15:30"].map((t,i)=>(


<text

key={i}

x={80+i*130}

y="380"

fill="#777"

fontSize="12"

>

{t}


</text>


))


}




</svg>


</div>


);


}


export default StockChart;