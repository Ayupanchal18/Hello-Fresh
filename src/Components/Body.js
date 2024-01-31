import React from 'react'
import './Body.css'

function Body() {
    return (
        <div className='Body_Container'>
            {/* HeroSection Area */}
            <div className="HeroSectionImg">
                <a href="/">
                    <img src="/images/heroSection.png" alt="heroSection" />
                </a>
            </div>
            {/* ***feature Section Area*** */}
            <div className="quality_Container_main_Box">
                <div className="heading_Text">
                    <h3>Why HelloFresh?</h3>
                </div>
                <div className="quality_Container">
                    <div className="container_Box">
                        <div className="feature_ind_Box">
                            <div className="img-Div">
                                <img src="/images/f1.png" alt="" />
                            </div>
                            <div className="feature-disc">
                                <h4>No skimpin on the chicken!</h4>
                                <h5>Or steak, or fish, or plant protein.</h5>
                            </div>
                        </div>
                        <div className="feature_ind_Box">
                            <div className="img-Div">
                                <img src="/images/f2.png" alt="" />
                            </div>
                            <div className="feature-disc">
                                <h4>No commitment whatsoever</h4>
                                <h5>Skipping weeks or cancelling is super easy.</h5>
                            </div>
                        </div>
                        <div className="feature_ind_Box">
                            <div className="img-Div">
                                <img src="/images/f3.png" alt="" />
                            </div>
                            <div className="feature-disc">
                                <h4>The most 5-star reviews</h4>
                                <h5>Our huge recipe selection wows week after week.</h5>
                            </div>
                        </div>
                        <div className="feature_ind_Box">
                            <div className="img-Div">
                                <img src="/images/f4.png" alt="" />
                            </div>
                            <div className="feature-disc">
                                <h4>Fresh and affordable</h4>
                                <h5>Chef-created deliciousness from $9.99 per meal.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="getOffer_Btn">
                        <button>Get Offer</button>
                    </div>
                </div>
            </div>
            {/* ***Offer Section Area*** */}
            <div className="offer-Section_Container">
                <div className="Offer_Box">
                    <div className="div_Right_offer">
                        <img src="/images/offerBox.avif" alt="" />
                    </div>
                    <div className="div_left_offer">
                        <h2>What is inside each box?</h2>
                        <h5>✓ Easy-to-follow recipes with clear nutritional info</h5>
                        <h5>✓ High-quality ingredients sourced straight from the farm</h5>
                        <h5>✓ Convenient meal kits that fit perfectly in the fridge</h5>
                        <h5>✓ A fun cooking experience that makes you feel unstoppable</h5>
                        <a href="/"><h5 >✓ Innovative packaging designed to reduce waste</h5></a>
                    </div>
                </div>
            </div>
            {/* Recipe Menu Section Area */}
            <div className="recipe_Main_Container">
                <div className="recipeSec_Container">
                    <div className="recipe_Heading">
                        <h3>Over 45+ fresh recipes every week</h3>
                        <p>Easy meals designed by professional chefs and nutritionists</p>
                    </div>
                    <div className="recipe_Boxes_Container">
                        <div className="recipe-Box">
                            <img src="/images/r1.avif" alt="" />
                            <div className="recipe_Box_Desc">
                                <h3>VEGGIES</h3>
                                <h4>& plant Based food.</h4>
                            </div>
                        </div>
                        <div className="recipe-Box">
                            <img src="/images/r2.avif" alt="" />
                            <div className="recipe_Box_Desc">
                                <h3>FAMILY FRIENDLY</h3>
                                <h4>KID TESTED RECIPE</h4>
                            </div>
                        </div>
                        <div className="recipe-Box">
                            <img src="/images/r3.avif" alt="" />
                            <div className="recipe_Box_Desc">
                                <h3>FIT WHOLESOME</h3>
                                <h4>FOR A B'D LIFE</h4>
                            </div>
                        </div>
                        <div className="recipe-Box">
                            <img src="/images/r4.avif" alt="" />
                            <div className="recipe_Box_Desc">
                                <h3>QUICK &EASY</h3>
                                <h4>FOR BUSY WORKING</h4>
                            </div>
                        </div>

                    </div>
                    <div className="view_MenuBox ">
                        <button>View our menus</button>
                    </div>
                </div>
            </div>
            {/* Hello Fresh Pics Section Area */}
            <div className="Hello_Pics_Container">
                <div className="Hello_Pics_Container_Sec">
                    <div className="Hello_PicsHeading">
                        <h2>Cook it. Love it. Tag it #HelloFreshPics</h2>
                        <p>Follow us on Instagram @hellofresh</p>
                    </div>
                    <div className="hello_picsBoxes_Grp">
                        <div className="hello_Pics_box">
                            <img src="/images/p1.avif" alt="" />
                            <div className="hello_box_desc">
                                <h4>bdanielle1285</h4>
                                <p>My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!</p>
                            </div>
                        </div>
                        <div className="hello_Pics_box">
                            <img src="/images/p2.avif" alt="" />
                            <div className="hello_box_desc">
                                <h4>lilpepthekelpie</h4>
                                <p>I’m helping out 🧑🏽‍🍳 #masterchef #bestboy</p>
                            </div>
                        </div>
                        <div className="hello_Pics_box">
                            <img src="/images/p3.avif" alt="" />
                            <div className="hello_box_desc">
                                <h4>mandi14eid</h4>
                                <p>Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!</p>
                            </div>
                        </div>
                        <div className="hello_Pics_box">
                            <img src="/images/p4.avif" alt="" />
                            <div className="hello_box_desc">
                                <h4>our_lovely_stride</h4>
                                <p>We had a cooking class me working as a team and I can’t wait for our weekly cooking class 🙌🏻😁</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Get Offer Sec Section area */}
            <div className="sec_offer_Div">
                <div className="photo_OfferSection">
                    <img src="/images/so2.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Body
