import React from 'react'
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcDiscover } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return (
        <div className='footer_Container'>
            <div className="linkContainergroup">
                <div className="LinkContainer">
                    <ul>
                        <h4>Hello Fresh</h4>
                        <a href="/"><li>Student</li></a>
                        <a href="/"><li>Blog</li></a>
                        <a href="/"><li>Recipes</li></a>
                        <a href="/"><li>Hero Discounts</li></a>
                        <a href="/"><li>Recipes Directory</li></a>
                        <a href="/"><li>California Supply Chain</li></a>
                        <a href="/"> <li>Delivery Options</li></a>
                        <a href="/"> <li>Act</li></a>
                    </ul>
                </div>
                <div className="LinkContainer">
                    <ul>
                        <h4>Our Company</h4>
                        <a href="/"><li>Hello Fresh Group</li></a>
                        <a href="/"><li>Sustainable group</li></a>
                        <a href="/"><li>Career</li></a>
                        <a href="/"><li>Press</li></a>
                    </ul>
                </div>
                <div className="LinkContainer">
                    <ul>
                        <h4>Work with Us</h4>
                        <a href="/"><li>Partners</li></a>
                        <a href="/"><li>Affiliates</li></a>
                        <a href="/"><li>Influencers</li></a>
                    </ul>
                </div>
                <div className="LinkContainer">
                    <ul>
                        <h4>Contact us</h4>
                        <a href="/"><li>Help Center and FAQ</li></a>
                        <a href="/"><li>Partnership Enquiries</li></a>
                        <a href="/"><li>Corporate Sales</li></a>
                        <a href="/"><li>Hero Discounts</li></a>
                        <a href="/"><li>Do not sell or share my <br /> personal information</li></a>

                    </ul>
                </div>
                <div className="Payment_Container">
                    <h4>Payment Method</h4>
                    <div className="payment_logo_Container" >
                        <SiVisa />
                        <FaCcMastercard />
                        <FaCcDiscover />
                        <FaPaypal />
                    </div>
                </div>
                <div className="App_Container">
                    <h4>Download our app</h4>
                    <div className="Store_img_Container">
                        <h3>Manage your deliveries from anywhere, anytime.</h3>
                        <div className="AppleStore">
                            <img src="/images/AppS.png" alt="" />
                        </div>
                        <div className='PlayStore'>
                            <img src="/images/PlayS.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="Company_Detal">
                <div className="Detail_Container">
                    <ul>
                        <h5>© HelloFresh 2024</h5>
                        <a href="/"> <li>Terms and Conditions</li></a>
                        <a href="/"> <li>Privacy</li></a>
                        <a href="/"><li>Accesiblity</li></a>
                    </ul>
                </div>
                <div className="socialMedia_Container">
                    <div className="Logo_Cont">
                        <FaInstagram />
                        <FaXTwitter />
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
