import React from 'react';
import { NavLink, Link } from "react-router-dom";
import $ from 'jquery';
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'

//Images
import img1 from  '../Assets/sanlam.png'
import img2 from  '../Brochure/Flexi Hela Collateral Key Facts - 1.pdf'
import img3 from  '../Assets/search-icon.png'
import img4 from  '../Assets/account-icon.png'
import img5 from  '../Brochure/Flexi Hela -Brochure Final.pdf'
import img6 from  '../Assets/smartphone.png'


const Home = () => {

    const handleClick2 = () =>{
        document.getElementById('s-card').style.display='none';
        document.getElementById('s-card').style.zIndex='-1';
      }
    
      const handleClick3 = () =>{
        document.getElementById('s-card').style.display='none';
        document.getElementById('s-card').style.zIndex='-1';
      }

      const handleClick = () => {
           document.getElementById('s-card').style.display='flex';
           document.getElementById('s-card').style.zIndex='1';        
      };

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
        <div class="container-fluid nav-container">
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
                            <a href="#" onClick={handleClick} class="mr-sm-2"><img src={img4}/></a>
                        </div>
                    </div>
                </nav>
            </div>    
            <div class="container breadcrumb">
                <p class="d-flex justify-content-start">Get started {'>'}</p>
            </div>
            <div class="container">
            <div class="row hero-section-w">
                <div class="col-xl-6 hero-section-col">
                    <h4>Introducing</h4>
                    <h1>Flexi Hela</h1>
                    <p>LiveWithConfidence with our tailor-made savings solutions that 
                        will help you to attain your financial goals.</p>
                    <div class="container buttons">
                        <div class="row">
                            <div class="col " id="learn-more-col">
                                <a href={img5} class="btn btn-outline-secondary learn-more" target={"_blank"}>LEARN MORE</a>
                            </div>
                            <div class="col get-started-col">
                                <Link to='/Goal' class="btn btn-primary get-started">GET STARTED</Link>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="col-xl-6 ">
                    <img class="img-fluid phone fadeInUp" src={img6}/>
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
export default Home;

function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.hero-section-col').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fadeInUp');
      }
    });
  }
 