import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-4'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first 𝚊𝚕𝚠𝚊𝚢𝚜</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust 𝚃𝚛𝚊𝚍𝚎𝚉𝚎𝚗 with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>𝙽𝚘 𝚂𝚙𝚊𝚖 or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>𝚃𝚑𝚎 𝚃𝚛𝚊𝚍𝚎𝚉𝚎𝚗 𝙼𝚎𝚝𝚊𝚟𝚎𝚛𝚜𝚎</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with 𝙼𝚘𝚗𝚎𝚢</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 p-4'>
                    <img src='media/images/ecosystem.png'style={{width:'100%'}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:'none'}} >Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <a href='' style={{textDecoration:'none'}}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;