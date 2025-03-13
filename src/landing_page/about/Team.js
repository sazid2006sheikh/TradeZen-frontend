import React from 'react';

function Team() {
    return ( 
        <div className='container '>
            <div className='row '>
                <h1 className='fs-2 text-center'>𝐖𝐎𝐑𝐊𝐒𝐏𝐀𝐂𝐄</h1>
            </div>
            <div className='row border-top ' style={{lineHeight: '1.8',backgroundColor: '#1b2631'}}>
                <div className='col-6 text-center p-4 pb-2 '>
                    <img src='media/images/sazidsheikh.png'alt='Sazid Sheikh' style={{borderRadius:'100%',width:'80%'}}></img>
                    <h4 className='mt-3' style={{color:'white'}}>Sazid Sheikh</h4>
                    <h5 style={{color:'#AFB1B4',fontSize:'15px'}}>Founder, CEO</h5>
                </div>

                <div className='col-6 p-5 mt-3' style={{color: '#AFB1B2',fontSize: '14px'}}>
                    <p className='fs-6'>Sazid Sheikh bootstrapped and founded TradeZen to eliminate the challenges traders face in the stock market. Today, TradeZen is transforming the landscape of online trading.</p>
                    <br/>
                    <p className='fs-6'>He is passionate about technology and finance, constantly innovating to enhance trading experiences.</p>
                    <br/>
                    <p>Exploring new tech is his zen.</p>
                    <br/>
                    <p style={{color:'#ffffff'}}>Connect on -
                        <a href='/' style={{textDecoration:'none'}}> Homepage</a> / 
                        <a href='https://github.com/sazid2006sheikh/' style={{textDecoration:'none'}}> GitHub  </a> / <a href='https://www.linkedin.com/in/sazid-sheikh-258714283/' style={{textDecoration:'none'}}>LinkedIn</a>
                    </p>
                </div>
            </div>
            <div className='row '>
                <h1 className='fs-2 text-center'>𝐓𝐄𝐀𝐌</h1>
            </div>
            <div className='row' style={{lineHeight: '1.8',backgroundColor: '#1b2631', color: '#AFB1B4'}}>
                <div className="col-md-4 mb-4 mt-5 text-center">
                    <img style={{ borderRadius: "100%", width: '70%' }} src="media/images/example.jpg" />
                    <div className="mt-4">
                        <h3 className="text-m font-bold"  style={{color:'white'}}>Dr Stark</h3>
                        <p>Co-Founder</p>
                    </div>
                </div>

                <div className="col-md-4 mb-4 mt-5 text-center">
                    <img style={{ borderRadius: "100%", width: '70%' }} src="media/images/example.jpg" />
                    <div className="mt-4">
                        <h3 className="text-xl font-bold" style={{color: 'white'}}>Dr Wattson</h3>
                        <p>CTO</p>
                    </div>
                </div>

                <div className="col-md-4 mb-4 mt-5 text-center">
                    <img style={{ borderRadius: "100%", width: '70%' }} src="media/images/example.jpg" />
                    <div className="mt-4">
                        <h3 className="text-xl font-bold" style={{color: 'white'}}>Joy Neo</h3>
                        <p>COO</p>
                    </div>
                </div>

                <div className="col-md-4 mb-4 mt-5 text-center">
                    <img style={{ borderRadius: "100%", width: '70%' }} src="media/images/example.jpg" />
                    <div className="mt-4">
                        <h3 className="text-xl font-bold" style={{color: 'white'}}>Sachin Kohli</h3>
                        <p>CCO</p>
                    </div>
                </div>
                <div className=" col-md-4 mb-4 mt-5 text-center">
                <img
                    style={{borderRadius: "100%",width:'70%'}} src="media/images/example.jpg" />
                    <div className="mt-4 ">
                        <h3 className="text-xl font-bold" style={{color: 'white'}}>Nikhil choudhary</h3>
                        <p>Director</p>
                       
                    </div>
                </div>
                <div className="col-md-4 mb-4 mt-5 text-center">
                <img
                    style={{borderRadius: "100%",width:'70%'}} src="media/images/example.jpg" />
                    <div className="mt-4 ">
                        <h3 className="text-xl font-bold" style={{color: 'white'}}>Ankit K.</h3>
                        <p>Chief of Education</p>
                        
                    </div>
                </div>
                
            </div>

        </div>
       
    );
}

export default Team;