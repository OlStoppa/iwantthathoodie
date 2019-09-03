import React from 'react'
import Image from '../components/image'
import Social from '../components/social'

const FooterInner = () => {
    return (
        <div className="footer-content">
            <Social/>
            <div className="footer-middle">
            <div className="footer-links">
                <ul>
                    <li>SHIPPING</li>
                    <li>RETURNS</li>
                    <li>CONTACT</li>
                    <li>ABOUT US</li>
                </ul>
            </div>
            <div className="paypal-image">
                <Image filename="paypal.png" />
            </div>
            
            </div>
            <div>
                © 2019 thishoodie.com
            </div>
            
            
        </div>
    )
}

export default FooterInner