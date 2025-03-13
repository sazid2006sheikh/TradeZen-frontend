import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center' >
                <img src='media/images/laptop.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>
                𝐈𝐧𝐯𝐞𝐬𝐭 𝐢𝐧 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠
                </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more. . .</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%', margin:'0 auto'}}>Register now</button>
            </div>

            
        </div>
     );
}

export default Hero;