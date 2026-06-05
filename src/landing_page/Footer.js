import React from 'react';

function Footer() {
    return ( 
        <footer  className='border mt-5 p-5 pb-0' style={{backgroundColor:'#f8f9fa'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/logo.svg' alt='logo' style={{width:'50%'}} />
                        <p> © 2025 TradeZen Ltd.<br/>All rights reserved.</p>
                    </div>
                    <div className='col' style={{lineHeight:'30px'}}>
                        <p >Company</p>
                        <a href='' style={{ textDecoration: 'none', color:'dimgray' }}>About</a>
                        <br />
                        <a href=''  style={{ textDecoration: 'none', color:'dimgray' }}>Products</a>
                        <br />
                        <a href='' style={{ textDecoration: 'none', color:'dimgray' }}>Pricing</a>
                        <br />
                        <a href='' style={{ textDecoration: 'none', color:'dimgray' }}>Awards</a>
                        <br />
                        <a href='' style={{ textDecoration: 'none', color:'dimgray'}}>Education</a>
                        <br />
                        <a href='' style={{ textDecoration: 'none', color:'dimgray' }}>TradeZen.tech</a>
                        <br />
                        <a href=''style={{ textDecoration: 'none', color:'dimgray' }}>Statistics</a>
                    </div>

                    <div className='col' style={{lineHeight:'30px'}}>
                        <p>Support</p>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>Contact</a>
                        <br/>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>Support portal</a>
                        <br/>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>Zen-Connect blog</a>
                        <br/>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>List of charges</a>
                        <br/>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>Downloads & resources</a>
                        <br/>
                    </div>
                    <div className='col' style={{lineHeight:'30px'}}>
                        <p>Account</p>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>Open an account</a>
                        <br/>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }} >Fund transfer</a>
                        <br/>
                        <a href='' className='text-muted' style={{ textDecoration: 'none' }}>45 day challenge</a>
                        <br/>
                    </div>
                </div>

                <div className='mt-5 text-muted' style={{fontSize:'12px'}}>
                    <p>TradeZen Financial Services: Member of NSE & BSE – SEBI Registration No.: 12IP5A3HO-IO-4A7 | Depository services through TradeZen Securities Pvt. Ltd. – SEBI Registration No.: A3S8F93-N-ID7 | Commodity Trading through TradeZen Commodities Pvt. Ltd. MCX: ABC653 – SEBI Registration No.: 0967VHJN-0A7
                    Registered Address: TradeZen Financial Services, India.
                    For any complaints regarding securities broking, please write to complaint@TradeZen.com, and for DP-related queries, contact TradeZen@hotmail.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Prevent unauthorized transactions in your account. Keep your mobile number and email ID updated with your stock broker to receive transaction alerts directly from the exchange at the end of the trading day. This is issued in the interest of investors.

                    KYC is a one-time process while dealing in the securities market. Once completed through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.), you do not need to repeat the process when engaging with another intermediary.

                    Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Simply provide your bank account number and sign the IPO application form to authorize your bank for payment in case of allotment. If the allotment is not made, the funds will remain in your bank account.

                    As a business, TradeZen does not provide stock tips and has not authorized anyone to trade on behalf of others. If you encounter anyone claiming to represent TradeZen and offering such services, please report it immediately.</p>
                </div>
                
            </div>
            <div className="d-flex justify-content-center align-items-center bg-light border-top py-2 px-4 position-relative">
                <p className="mb-0 text-muted">Made with ❤️ by Sazid Sheikh</p>
                <div className="position-absolute end-0 d-flex gap-4 fs-5">
                    <a href="https://www.linkedin.com/in/sazid-sheikh-258714283/" target="_blank" className="text-dark social-icon">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/sazid2006sheikh/" target="_blank" className="text-dark social-icon">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/yoursazidd/" target="_blank" className="text-dark social-icon">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </footer>
     );
}

export default Footer;