import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'

//Image

import img1 from  '../Assets/sanlam.png'
import img2 from  '../Brochure/Flexi Hela Collateral Key Facts - 1.pdf'
import img3 from  '../Assets/search-icon.png'
import img4 from  '../Assets/account-icon.png'
import img5 from  '../Assets/Car.png'
import img6 from  '../Assets/Dream Gadget.png'
import img7 from  '../Assets/Dream Wedding.png'
import img8 from  '../Assets/Dream House.png'
import img9 from  '../Assets/Dream School.png'
import img10 from  '../Assets/Other.png'

const Goal = () => {

    const handleClick = () => {
        document.getElementById('s-card').style.display='flex';
        document.getElementById('s-card').style.zIndex='1';        
   };

    const handleClick3 = () =>{
        document.getElementById('s-card').style.display='none';
        document.getElementById('s-card').style.zIndex='-1';
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

 const [checkPath, setcheckPath] = useState();


 const checkButton = () =>{
    if(document.getElementById('Car').checked) { 
        setcheckPath("/Goal_planner_car");
    } 
    else if(document.getElementById('Dream-Gadget').checked) { 
        setcheckPath("/Goal_planner_dreamGadget");
    } 
    else if(document.getElementById('Dream-Wedding').checked) { 
        setcheckPath("/Goal_planner_dreamWedding");
    } 
    else if(document.getElementById('Dream-House').checked) { 
        setcheckPath("/Goal_planner_dreamHouse");
    }
    else if(document.getElementById('Dream-School').checked) { 
        setcheckPath("/Goal_planner_dreamSchool");
    }
    else if(document.getElementById('Other').checked) { 
        setcheckPath("/Goal_planner_Other");
    }
    else { 
        document.getElementById("Other").innerHTML 
            = "You have not selected any season"; 
    } 
 }

    return(
        <div class="container-fluid nav-container fadeInUpv2" id="g-bg">
           <div class="container fadeInUp">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link class="navbar-brand" to="/"><img class="img-fluid" src={img1}/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class=" col-xl-8">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a  class="nav-link" href='#productSection'>About</a>
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
                            <a href="#" onClick={handleClick}  class="mr-sm-2"><img src={img4}/></a>
                        </div>
                    </div>
                </nav>
            </div>   
            <div class="container breadcrumb">
                <p class="d-flex justify-content-start">Get started {'>'} Set Goal</p>
            </div>
            <h1 class="text-center fadeInUp g-heading fadeInUpv2">Select your target</h1>
            <div class="container goals fadeInUp .kyc-container">
                <form id="goal" action="/action_page.php">
                    <div class="row">
                        <div class="col">
                            <label class="goal d-flex justify-content-center fadeInUpv2" onClick={checkButton} for="Car">
                                <div>
                                    <img src={img5}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Car"/>
                                </div>
                            </label>
                            <h3 class="text-center " >Dream Car</h3>
                        </div>
                        <div class="col">
                            <label class="goal d-flex justify-content-center fadeInUpv2" onClick={checkButton} for="Dream-Gadget">
                                <div>
                                    <img src={img6}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Dream-Gadget"/>
                                </div>
                            </label>
                            <h3 class="text-center">Dream Gadget</h3>
                        </div>
                        <div class="col">
                            <label class="goal d-flex justify-content-center wedding fadeInUpv2" onClick={checkButton} for="Dream-Wedding">
                                <div>
                                    <img src={img7}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Dream-Wedding"/>
                                </div>
                            </label>
                            <h3 class="text-center">Dream Wedding</h3>    
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="goal d-flex justify-content-center fadeInUpv2" onClick={checkButton} for="Dream-House">
                                <div>
                                    <img src={img8}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Dream-House"/>
                                </div>
                            </label>
                            <h3 class="text-center">Dream House</h3>
                        </div>
                        <div class="col">
                            <label class="goal d-flex justify-content-center fadeInUpv2" onClick={checkButton} for="Dream-School">
                                <div>
                                    <img src={img9}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Dream-School"/>
                                </div>
                            </label>
                            <h3 class="text-center">Dream School</h3>
                        </div>
                        <div class="col">
                            <label class="goal d-flex justify-content-center fadeInUpv2" onClick={checkButton} for="Other">
                                <div>
                                    <img src={img10}/>
                                    <input class="d-flex align-items-end" name="goal" type="radio" id="Other"/>
                                </div>
                            </label>
                            <h3 class="text-center">Other</h3>
                        </div>
                    </div>         
                </form>
                <div class=" b-buttons">
                <div class="row n-p-btn">
                    <div class="col">
                        <Link to='/' class="btn btn-primary previous">PREVIOUS</Link>
                    </div>
                    <div class="col div-next">
                        <Link id="goalnxtbtn" to={checkPath} class="btn btn-primary next">NEXT</Link>
                    </div>
                </div>
            </div>
            </div>
           
            <div class="modal container-fluid " id="s-card">
                <div class="card success-card fadeInUp" id="card">
                    <div>
                        <form action='handler.php'>
                            <span class="d-flex justify-content-end"><a href="#" onClick={handleClick3}><Icon name='close' /></a></span><br/>
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

export default Goal;