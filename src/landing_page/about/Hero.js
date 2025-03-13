import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mb-5 mt-5 '>
                <h1 className='fs-2 text-center'>Revolutionizing Trading,<br/> Pioneering the future with Technology.</h1>
            </div>
            <div className='row p-4 mt-5 border-top' style={{lineHeight: '1.8',backgroundColor: '#1b2631'}}>
               <div className='col-6 p-5' style={{color: '#a6acaf',fontSize: '15px'}}>

                    <p> We launched TradeZen on the 15th of March, 2025, aiming to dismantle the barriers that traders and investors in India face, particularly in terms of cost, support, and technology. Our name, TradeZen, reflects our mission to create a seamless trading experience.</p>

                    <p>Today, leveraging our innovative pricing strategies and proprietary technology, we have become one of India's leading stock trading platforms.</p>

                    <p> With over 1 crore clients and millions of orders processed daily, TradeZen plays a pivotal role in shaping India's retail trading landscape, contributing to more than 15% of the country's total retail trading volumes.</p>

               </div>

               <div className='col-6 p-5' style={{color: '#a6acaf',fontSize: '15px'}}>

                    <p> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p><a href='' style={{textDecoration:'none'}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='' style={{textDecoration:'none'}}>blog</a> or see what the media is saying <a href='' style={{textDecoration:'none'}}>about us.</a></p>

               </div>
            </div>
        </div>
        
     );
}

export default Hero;