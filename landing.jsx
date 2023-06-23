import React from "react";
import bgimg from './images/bgimg.jpeg';
import './landing.css'
import logo from './images/logo2.png';
import img1 from './images/both.png';
import img2 from './images/dynamic.jpg';
import img3 from './images/process.jpeg';
import img4 from './images/phoneka.jpg';
import img5 from './images/pricing.png';
import img6 from './images/apple.png';
import ved from './vedio/large.mp4';
import gmail from './images/gmail.jpeg';
import insta from './images/insta.png';
// import


const Landing = () => {
    const handleclick = () => {
        window.location.href = "https://www.flipkart.com/search?q=14%20pro&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
    }
    return (
        <>
            <div class='container'>
                <div className="main">
                    <div className="header">
                        {/* <h1 style={{ color: "red" }}>hello</h1>0 */}
                        <div class="navbar">
                            <a href="#">Home</a>
                            <a href="https://www.apple.com/in/iphone-14-pro/?afid=p238%7CsUzEaRoOq-dc_mtid_209254ho67063_pcrid_621810182613_pgrid_142127850698_pexid__&cid=wwa-in-kwgo-iphone-slid---iPhone14Pro-avail-">About</a>
                            <a href="https://support.apple.com/en-in">Services</a>
                            <a href="https://www.apple.com/in/contact/">Contact</a>
                        </div>
                        <div className="name">
                            <img src={logo} id="moblog" ></img>
                            <h1><b>All NEW I PHONE 14</b></h1>


                            <h3>With its sleek design and powerful performance, <br></br>the iPhone 14 is likely to impress users with its<br></br> cutting-edge technology and exceptional user experience.</h3>

                        </div>
                        <div className="iamges">
                            <div class="container6">
                                <div class="box">
                                    <div class="imgBx">
                                        <img src={img1} />
                                    </div>
                                    <div class="content">
                                        <div>
                                            <h2>With both 14 and 14pro </h2>
                                            <p>iPhone 14-

                                                15.40 cm (6.1″)<br></br>iPhone 14 Plus1

                                                16.95 cm (6.7″)

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="imgBx">
                                        <img src={img2} />
                                    </div>
                                    <div class="content">
                                        <div>
                                            <h2>Meet
                                                Dynamic Island.</h2>
                                            <p>A new way to
                                                interact with iPhone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="imgBx">
                                        <img src={img3} />
                                    </div>
                                    <div class="content">
                                        <div>
                                            <h2> A16 Bionic chip</h2>
                                            <p>faster then ever.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="imgBx">
                                        <img src={img4} />
                                    </div>
                                    <div class="content">
                                        <div>
                                            <h2>Pro camera system</h2>
                                            <p>48MP Main Ultra Wide
                                                Telephoto
                                                Photonic Engine for incredible detail and colour
                                                Autofocus on TrueDepth
                                                front camera.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 style={{ color: "white", fontFamily: "cursive", marginTop: "30px" }}> Designed to make a difference.</h1>
                        </div>
                    </div>
                    <div className="info">
                        <div className="row">
                            <div className="col-sm-6" style={{ backgroundColor: "#000" }}>

                                <h3 style={{ color: "white" }}>Get it?</h3>
                                <img src={img5} style={{ width: "50%" }}></img>

                            </div>
                            <div className="col-sm-6">
                                <table class="table table-dark table-hover">
                                    <thead>
                                        <tr>

                                            <th scope="col">Product Name</th>
                                            <th scope="col">color</th>
                                            <th scope="col">Price in India</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>iPhone 14 Pro (128GB)</td>
                                            <td>Space Black</td>
                                            <td>₹ 119,999</td>
                                            <td> <button onClick={handleclick} >buy</button></td>
                                        </tr>
                                        <tr>

                                            <td>iPhone 14 Pro (256GB) </td>
                                            <td>Space Black</td>
                                            <td>₹ 129,999</td>
                                            <td><button onClick={handleclick}>buy</button></td>

                                        </tr>
                                        <tr>
                                            <td>iPhone 14 Pro (512GB) </td>
                                            <td>Silver</td>
                                            <td>₹ 159,900</td>
                                            <td><button onClick={handleclick}>buy</button></td>



                                        </tr>
                                    </tbody>
                                </table>





                            </div>
                        </div>
                    </div>
                    <div className="vedio">
                        <video width="1040" height="460" src={ved} type="video/mp4" controls autoplay loop />




                    </div>
                    <div className="sec">
                        <div className="row">
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <img src={img6} style={{ width: "20px", marginBottom: "-45px", marginLeft: "-120px" }}></img>  <h5 style={{ color: "white" }}>apple india</h5>

                        <div className="row">
                            <div className="col-sm-4">
                                <a href="mailto:ccl17darshanm@gmail.com">
                                    <img src={gmail} style={{ width: "60px" }}></img><h6 style={{ color: "white" }}>ccl17darshanm@gmail.com</h6>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="https://www.instagram.com/call_me_alex_01">
                                    <img src={insta} style={{ width: "40px" }}></img><h6 style={{ color: "white" }}>call_me_alex_01</h6>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="https://www.apple.com">


                                    <img src={img6} alt="iconminc" style={{ width: "40px" }}></img><h6 style={{ color: "white" }}>apple India</h6>
                                </a>
                            </div>

                            <div className="col-sm-4">

                            </div>
                            <d className="foot">
                                All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/in/batteries and apple.com/in/iphone/battery.html for more information.
                                Accessories are sold separately.
                                iPhone 14 Pro and iPhone 14 Pro Max are splash, water and dust resistant, and were tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 metres up to 30 minutes). Splash, water and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage is not covered under warranty.
                                iPhone 14 and iPhone 14 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi-Fi calling.
                                gular shape, the screen is 13.76 centimetres / 5.42 inches (iPhone 13 mini, iPhone 12 mini), 14.86 centimetres / 5.85 inches (iPhone 11 Pro, iPhone XS, iPhone X), 15.40 centimetres / 6.06 inches (iPhone 14, iPhone 13 Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 15.54 centimetres / 6.12 inches (iPhone 14 Pro), 16.40 centimetres / 6.46 inches (iPhone 11 Pro Max, iPhone XS Max), 16.95 centimetres / 6.68 inches (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12 Pro Max) or 17.00 centimetres / 6.69 inches (iPhone 14 Pro Max) diagonally. Actual viewable area is less.
                                G support, contact your carrier and see apple.com/in/iphone/cellular.
                            </d>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landing;