import React from "react";
import { NavLink, Link } from "react-router-dom";
import $ from 'jquery';
import { Icon } from 'semantic-ui-react'

//Images

import img1 from  '../Assets/sanlam.png'
import img2 from  '../Brochure/Flexi Hela Collateral Key Facts - 1.pdf'
import img3 from  '../Assets/search-icon.png'
import img4 from  '../Assets/account-icon.png'
import img5 from  '../Assets/mpesa-removebg-preview.png'
import img6 from  '../Assets/visa-removebg-preview.png'
import img7 from  '../Assets/Other.png'

const Payment = () => {

    const handleClickac = () => {
        document.getElementById('s-cardac').style.display='flex';
        document.getElementById('s-cardac').style.zIndex='1';
   };

   const handleClick4 = () =>{
    document.getElementById('s-cardac').style.display='none';
    document.getElementById('s-cardac').style.zIndex='-1';
  }

    const onLinkClick = () =>{
        fetch('/Brochure/Flexi Hela Collateral Key Facts - 1.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/Brochure/Flexi Hela Collateral Key Facts - 1.pdf';
                alink.click();
            })
        })
    }

    return(
        <div class="container-fluid nav-container" id="g-bg4">
            <div class="container fadeInUp">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link class="navbar-brand" to="/"><img src={img1}/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class=" col-xl-8">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={img2} target={"_blank"}>Brochure</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-xl-4 d-flex flex-row s-c">
                            <form class="" action="/action_page.php" method="POST" id="search-form">
                                <input type="text" placeholder="Search..." name="search" class="search-field"/>
                                <button type="submit" class="search-icon"><img src={img3}/></button>
                            </form>
                            <a href="#" class="mr-sm-2" onClick={handleClickac}><img src={img4}/></a>
                        </div>
                    </div>
                </nav>
            </div>   
            <div class="container breadcrumb">
                <p class="d-flex justify-content-start"><u>Congratulations!</u> &nbsp;&nbsp;you are now a &nbsp;<b>Flexa</b></p>
            </div>
            <h1 class="text-center fadeInUp g-heading2">Select prefered payment option</h1>
            <p class="text-center" id="p-payment">This being your 1st Goal we are happy to deposit 500 Ksh towards your goal once you activate your Policy.</p>
            <div class="container goals paymentRow">
                <form id="goal" action="/action_page.php">
                    <div class="row ">
                        <div class="col">
                            <label class="goal d-flex justify-content-center" for="Car">
                                <div>
                                    <img class="img-fluid imgsz" src={img5}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Car"/>
                                </div>
                            </label>
                            <h3 class="text-center" >Mpesa</h3>
                        </div>
                        <div class="col">
                            <label class="goal d-flex justify-content-center" for="Dream-Gadget">
                                <div>
                                    <img class="img-fluid imgsz" src={img6}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Dream-Gadget"/>
                                </div>
                            </label>
                            <h3 class="text-center">Visa</h3>
                        </div>
                        <div class="col">
                            <label class="goal d-flex justify-content-center" for="Other">
                                <div>
                                    <img src={img7}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Other"/>
                                </div>
                            </label>
                            <h3 class="text-center">Other</h3>
                        </div>
                    </div>          
                </form>
            </div>
            <div class="container">
                <div class="row n-p-btn">
                    <div class="col">
                        <Link to='/Securefamily' class="btn btn-primary previous">PREVIOUS</Link>
                    </div>
                    <div class="col div-next">
                        <Link to='/Goal_planner' class="btn btn-primary next">NEXT</Link>
                    </div>
                </div>
            </div>

            <div class="modal container-fluid " id="s-cardac">
                <div class="card success-card fadeInUp" id="card">
                    <div>
                        <form action='handler.php'>
                            <span class="d-flex justify-content-end"><a href="#" onClick={handleClick4}><Icon name='close' /></a></span><br/>
                            <h1>Login</h1>
                            <label for="nameInputField">
                                <span>Email</span> <br/><input name="email" type="email" className='Input' id="nameInputField" placeholder='Email'/>
                            </label>
                            <br/>
                            <label for="emailInputField">
                                <span>Password</span> <br/><input name="pswd" type="password" className='Input' id="emailInputField" placeholder='Password'/>
                            </label>
                            <br/>
                            <button class="btn btn-primary c-b-contact" onClick={SubmitEvent}>Login</button>
                            <br/>
                            <br/>
                            <span>Don't have an account?</span>&nbsp;&nbsp;&nbsp;<span><Link to="/Goal">Start Journey</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;