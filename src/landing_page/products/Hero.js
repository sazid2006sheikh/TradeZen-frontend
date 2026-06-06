import React from 'react';

function Hero() {
    return ( 
    <div className="container mt-5">
        <div className='text-center mt-5'>
            <h1>Best in Tech Stack Partnerships</h1>        
            <h3 className='text-muted mt-3 fs-4' >Sleek, modern, and intuitive trading platforms</h3>
            <p> Check out our <a href='/investment-offerings' style={{textDecoration:'none'}}> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
        
    </div>
    );
}

export default Hero;