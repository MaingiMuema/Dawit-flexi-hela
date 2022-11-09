import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react'

//Images
import img1 from  '../Assets/sanlam.png'
import img2 from  '../Brochure/Flexi Hela Collateral Key Facts - 1.pdf'
import img3 from  '../Assets/search-icon.png'
import img4 from  '../Assets/account-icon.png'
import img5 from '../Assets/Profile-img.png'
import img6 from '../Assets/Dream School2.png'
import img7 from '../Assets/Dream School grey.png'
import img8 from '../Assets/Success-TICK.png'

const Goal_planner_dreamSchool = () =>{

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

    const date2 = new Date();

    //______________________________________

    //_____________________________________

    function dateUpdate(){
           
        var x= inputValue1/inputValue2;
    
         var item = document.getElementById("Target-amount-select").value;
        
        if(item=="Daily"){
           var date1 = new Date();
    
           date2.setDate(date1.getDate() + x/10);
           var year = date2.getFullYear();
           var month = date2.getMonth();
           var day = date2.getDate();
    
           if(month==0){
            month ="Jan";
           }
    
           else if(month==1){
            month ="Feb";
           }
    
           else if(month==2){
            month ="Mar";
           }
    
           else if(month==3){
            month ="Apr";
           }
    
           else if(month==4){
            month ="May";
           }
    
           else if(month==5){
            month ="Jun";
           }
    
           else if(month==6){
            month ="Jul";
           }
    
           else if(month==7){
            month ="Aug";
           }
    
           else if(month==8){
            month ="Sep";
           }
    
           else if(month==9){
            month ="Oct";
           }
    
           else if(month==10){
            month ="Nov";
           }
    
           else if(month==11){
            month ="Dec";
           }
    
           else{
            console.log("Invalid date");
           }
            document.getElementById('gdate').innerHTML = day+" "+ month+" " +year;
        }
    
        else if(item=="Monthly"){
            var date1 = new Date();
    
            date2.setDate(date1.getDate() + (x*31)/10);
            var year = date2.getFullYear();
            var month = date2.getMonth();
            var day = date2.getDate();
     
            if(month==0){
             month ="Jan";
            }
     
            else if(month==1){
             month ="Feb";
            }
     
            else if(month==2){
             month ="Mar";
            }
     
            else if(month==3){
             month ="Apr";
            }
     
            else if(month==4){
             month ="May";
            }
     
            else if(month==5){
             month ="Jun";
            }
     
            else if(month==6){
             month ="Jul";
            }
     
            else if(month==7){
             month ="Aug";
            }
     
            else if(month==8){
             month ="Sep";
            }
     
            else if(month==9){
             month ="Oct";
            }
     
            else if(month==10){
             month ="Nov";
            }
     
            else if(month==11){
             month ="Dec";
            }
     
            else{
             console.log("Invalid date");
            }
             document.getElementById('gdate').innerHTML = day+" "+ month+" " +year;
        }
    
        else if(item=="Weekly"){
            var date1 = new Date();
    
            date2.setDate(date1.getDate() + (x*7)/10);
            var year = date2.getFullYear();
            var month = date2.getMonth();
            var day = date2.getDate();
     
            if(month==0){
             month ="Jan";
            }
     
            else if(month==1){
             month ="Feb";
            }
     
            else if(month==2){
             month ="Mar";
            }
     
            else if(month==3){
             month ="Apr";
            }
     
            else if(month==4){
             month ="May";
            }
     
            else if(month==5){
             month ="Jun";
            }
     
            else if(month==6){
             month ="Jul";
            }
     
            else if(month==7){
             month ="Aug";
            }
     
            else if(month==8){
             month ="Sep";
            }
     
            else if(month==9){
             month ="Oct";
            }
     
            else if(month==10){
             month ="Nov";
            }
     
            else if(month==11){
             month ="Dec";
            }
     
            else{
             console.log("Invalid date");
            }
             document.getElementById('gdate').innerHTML = day+" "+ month+" " +year;
        }
    
        else if(item=="Yearly"){
            var date1 = new Date();
    
            date2.setDate(date1.getDate() + (x*366)/10);
            var year = date2.getFullYear();
            var month = date2.getMonth();
            var day = date2.getDate();
     
            if(month==0){
             month ="Jan";
            }
     
            else if(month==1){
             month ="Feb";
            }
     
            else if(month==2){
             month ="Mar";
            }
     
            else if(month==3){
             month ="Apr";
            }
     
            else if(month==4){
             month ="May";
            }
     
            else if(month==5){
             month ="Jun";
            }
     
            else if(month==6){
             month ="Jul";
            }
     
            else if(month==7){
             month ="Aug";
            }
     
            else if(month==8){
             month ="Sep";
            }
     
            else if(month==9){
             month ="Oct";
            }
     
            else if(month==10){
             month ="Nov";
            }
     
            else if(month==11){
             month ="Dec";
            }
     
            else{
             console.log("Invalid date");
            }
             document.getElementById('gdate').innerHTML = day+" "+ month+" " +year;
        }
    
        else{
            console.log("Please select a valid option.");
        }
    }

    //_____________________________________________________________




    //________________________________________________________________

    const [inputValue1, setInputValue] = useState();

    let onChange = (event) =>{
     const newValue = event.target.value;
     setInputValue(newValue);
    };

    const [inputValue2, setInputValue2] = useState();

    let onChange2 = (event) =>{
     const newValue = event.target.value;
     setInputValue2(newValue);
    };

    /* Code to check if field is filled*/
    const handleClick = () => {

        if (inputValue1 == null || inputValue2 == null) {
           alert("Fill in the fields appropriately!");
        }
       else{
           document.getElementById('s-card').style.display='flex';
           document.getElementById('s-card').style.zIndex='1';
       }
        
      };

      const handleClickac = () => {
        document.getElementById('s-cardac').style.display='flex';
        document.getElementById('s-cardac').style.zIndex='1';
   };


    const [value, setValue] = React.useState('Question');

    const handleChange = (event) => {
    setValue(event.target.value);
  };

  if(value == "Daily"){
    document.getElementById("savingFrequency").innerHTML = "Daily";
}
    else if(value =="Weekly"){
        document.getElementById("savingFrequency").innerHTML = "Weekly";
}
    else if(value =="Monthly"){
    document.getElementById("savingFrequency").innerHTML = "Monthly";
}
else if(value == "Yearly"){
    document.getElementById("savingFrequency").innerHTML = "Yearly";
}

else{
    console.log("Choose your saving frequency");
}


  const handleClick2 = () =>{
    document.getElementById('s-card').style.display='none';
    document.getElementById('s-card').style.zIndex='-1';
  }

  const handleClick3 = () =>{
    document.getElementById('s-card').style.display='none';
    document.getElementById('s-card').style.zIndex='-1';
  }

  const handleClick4 = () =>{
    document.getElementById('s-cardac').style.display='none';
    document.getElementById('s-cardac').style.zIndex='-1';
  }

  var imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
  var clientName = "Anne Nonymous";
  var review = "I started my journey last year and now i'm only two months away from reaching my goal";
 

  const [dataChange, setdataChange] = useState(0);
  useEffect(() => {
    const reviewdataChange = setInterval(() => {
      setdataChange((t) => t + 1);
    }, 5000);
    return () => {
      clearInterval(reviewdataChange);
    };
  }, []);

  console.log(dataChange);

    if(dataChange==1){
        imgr1 = img5;
        clientName = "Mark Kinoti";
        review = "Flexi Hela has enabled me achieve my dreams via their savings capability.";
        }
    else if(dataChange==2){
        imgr1 = img5;
        clientName = "John Kipkorir";
        review = "Saving with flexi Hela is the way to achieve your dreams.";
    }

    else if(dataChange==3){
        imgr1 = img5;
        clientName = "Esther Muriuki";
        review = "Saving has never been this easy";
    }

    else if(dataChange==4){
        imgr1 = img5;
        clientName = "Villa Josephat";
        review = "Flexi Hela has amazing offers suited for everyone.";
    }

    else if(dataChange==5){
        imgr1 = img5;
        clientName = "Mark Kinoti";
        review = "Your are assured of security when it comes to saving with Flexi Hela.";
    }
    else {

    }

    const clearInput = (event) => {
        var key = event.keyCode || event.charCode;
        if( key == 8 ){
            //backspace pressed
                const newValue = event.target.value = null;
                setInputValue2(newValue);
                console.log(newValue);
        return false;
        }
        
};

    return(
        <div class="container-fluid"  id="c-bg-d-School">
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
                <p class="d-flex justify-content-start">Get started {'>'} Set Goal  {'>'} Dream school</p>
            </div>
            <div class="container  fadeInUp kyc-container">
                <div class="row">
                    <div class="col">
                        <h1 class="Pitch">Goal Planner</h1>
                        <p class="Pitch-p">You have made the<br/> right decision.</p>
                        <span>You selected<img class="img-fluid" src={img6}/></span>
                        <div class="card">
                            <span class="client d-flex"><img class="client-img" src={imgr1}/>
                             <p>{clientName}</p>
                            </span>
                            <p>{review}</p>
                        </div>
                    </div>
                    <div class="col">
                        <h4 class="form-heading">Let’s start the journey</h4>
                        <form action="./action_handler.php">
                            <h3>Target amount</h3>
                                <label class="" for="Target-amount1">
                                    <input class="input-space" type="number" onInput={dateUpdate} onChange={onChange} placeholder="Enter Target Goal Amount" id="Target-amount1"/>
                                </label>

                            <h3>Saving Frequency</h3>
                                <label class="saving-frequency" for="Target-amount-select">
                                   
                                    <select class="save-dropdown" value={value}  id="Target-amount-select" onChange={handleChange}>
                                        document.write("e");
                                        <option id="question" value="Question"><i >How often do you intend to save?</i></option>
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>  
                                        <option value="Monthly">Monthly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </label>

                            <h3>Contribution</h3>
                            <label class="" for="Target-amount2">
                                <input class="input-space-2" type="number" onPaste={(e)=>{e.preventDefault() ; alert("Type it to believe it.");return false }}  onKeyUp={clearInput} onInput={dateUpdate} onChange={onChange2} placeholder="Enter Target Goal Amount" id="Target-amount2"/>
                            </label>
                        </form>
                    </div>
                    <div class="col">
                        <div class="card summary-card">
                            <span class="text-center s-ry"><span class="s-ry">Summary</span><img class="img-fluid summary-img" src={img7}/></span>
                            <hr align="center"class="detail-separator"/>
                            <span class="text-center s-ry" id="set-goals">Goal type: <b>Dream School</b></span>
                            <hr align="center"class="detail-separator"/>
                            <span class="text-center s-ry" id="set-goals">Savings Target: <b>Ksh {inputValue1}</b></span>
                            <hr align="center"class="detail-separator"/>
                            <span class="text-center s-ry" id="set-goals"><span id="savingFrequency"></span>  Contribution: <b>Ksh {inputValue2}</b></span>
                            <hr align="center"class="detail-separator"/>
                            <span class="text-center s-ry" id="set-goals">Goal Date: <b><span id="gdate" ></span> </b></span>
                            <hr align="center"class="detail-separator"/>
                        </div>           
                    </div>
                </div>
            </div>
            <div class="container goal-dets-btns">
                <div class="row n-p-btn">
                    <div class="col">
                        <Link to='/Goal' class="btn btn-primary previous">PREVIOUS</Link>
                    </div>
                    <div class="col div-next">
                        <button type="button" class="btn btn-primary next" onClick={handleClick}>ACTIVATE GOAL</button>
                    </div>
                </div>
            </div>

            <div class="modal container-fluid " onClick={handleClick3} id="s-card">
                <div class="card success-card fadeInUp" id="card">
                    <div> 
                        <img class="img-fluid" src={img8} />
                    </div>
                    <div>
                        <p class="text-center" id="s-heading">SUCCESS</p>
                        <p class="text-center" id="s-p1">Your goal has been activated.</p>
                        <p class="text-center" id="s-p2">Would you like to secure your savings?</p>
                        <span class="s-btns">
                            <Link to='/Secure-savings'class="btn btn-outline-secondary" id="s-btn1">YES</Link>
                            <Link to='/Goal_planner_dreamSchool' onClick={handleClick2} class="btn btn-primary" id="s-btn2">NO</Link>
                        </span>
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

export default Goal_planner_dreamSchool;