import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import $ from 'jquery';
import { Icon } from 'semantic-ui-react'

//Images
import img1 from  '../Assets/sanlam.png'
import img2 from  '../Brochure/Flexi Hela Collateral Key Facts - 1.pdf'
import img3 from  '../Assets/search-icon.png'
import img4 from  '../Assets/account-icon.png'
import img5 from  '../Assets/parentsblue.png'
import img6 from  '../Assets/Profile-img.png'
import img7 from  '../Assets/parents2.png'

const Beneficiary_parents = () =>{

    const [checkPath, setcheckPath] = useState();

    const handleClickac = () => {
        document.getElementById('s-cardac').style.display='flex';
        document.getElementById('s-cardac').style.zIndex='1';
   };

   const handleClick4 = () =>{
    document.getElementById('s-cardac').style.display='none';
    document.getElementById('s-cardac').style.zIndex='-1';
  }

    //Phone number Validation function

const phoneValidation = () =>{
    
    var val = value;

    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g.test(val)) {
        // value is ok, use it
        setcheckPath("/Payment");
        console.log("No. is ok.");
    } 

    else{
        alert("Invalid number; must be ten digits");
        value.focus();
        setcheckPath("/Beneficiary_parents");
        return false;
    }
}

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

    const [inputValue3, setInputValue3] = useState();

    let onChange3 = (event) =>{
     const newValue = event.target.value;
     setInputValue3(newValue);

     var dob = new Date(newValue); 

     var age;

     if(newValue =='') {  
        alert("Please input your parent's Date of Birth.") ;
        return false;   
     } 
     
     else {  
     
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();  
        
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
        
        //extract year from date      
        var year = age_dt.getUTCFullYear();  
        
        //now calculate the age of the user  
        age = Math.abs(year - 1970); 
        console.log(year + age_dt) ;
    } 

 if(age<27){
     console.log("Age above below 27 is:  ", age);
     alert("Your parent must be over 27 years.");
     newValue = event.target.value = null;
     setInputValue2(newValue);
     return false;
 } 
 else{
     console.log("Age is: ", age); 
 }
};

    const [value, setValue] = React.useState('Number');

    const handleChange = (event) => {
    const newValue=event.target.value;
    setValue(newValue);
  };

  const fieldConditions = () =>{
    if (inputValue3 == null || inputValue1 == null || inputValue2 == null || value == null) {
        alert("Fill in the fields appropriately!");
        setcheckPath("/Beneficiary_parents");
     }
    else{
            setcheckPath("/Payment");
    }
    
  }

    return(
    <div class="container-fluid "  id="c-bg3">
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
        <div class="container breadcrumb d-flex justify-content-end">
            <p class="d-flex justify-content-start skipButton"><Link to="/Beneficiary"><b>Skip &nbsp; <Icon name="arrow right"/></b></Link></p>
        </div>
        <div class="container   fadeInUp">
            <div class="row beneficiaries-row">
                <div class="col">
                        <p class="Pitch-p">You have made the<br/> right decision.</p>
                        <span>You selected<img class="img-fluid" src={img5}/></span>
                        <div class="card" id="b-card">
                            <span class="client d-flex"><img class="client-img" src={img6}/>
                             <p>Anne Nonymous</p>
                            </span>
                            <p>“I started my journey last year and now i{"'"}m only two months away from reaching my goal”</p>
                        </div>
                </div>
                <div class="col" id="form2col">
                    <h4 class="form-heading" id="profile-h">Secure your family members</h4>
                    <form class="form-2nd" action="./action_handler.php">
                        <div class="row">
                            <div class="col">
                                <h3>First name</h3>
                                    <label class="" for="Target-amount1">
                                        <input class="input-space2" type="text" onChange={onChange} placeholder="Enter your first name" id="Target-amount1"/>
                                    </label>
                            </div>
                            <div class="col">
                                <h3>Last name</h3>
                                    <label class="" for="Target-amount2">
                                        <input class="input-space2" type="text" onChange={onChange2} placeholder="Enter your last name" id="Target-amount2"/>
                                    </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3>Date of Birth</h3>
                                    <label class="" for="Target-amount3">
                                        <input class="input-space2" type="date" onInput={onChange3} onChange={onChange3} placeholder="Enter your date of birth" id="Target-amount3"/>
                                    </label>
                            </div>
                            <div class="col">
                                    <label class="saving-frequency" for="Target-amount4">
                                    <h3>Phone number</h3>
                                        <label class="saving-frequency" for="Target-amount4">
                                                <input class="input-space2" type="number" onChange={handleChange} placeholder="Enter number" id="Target-amount4"/>
                                        </label>
                                    </label>
                            </div>
                            <h4 class="add-beneficiary" id=""><Link to="/Beneficiary">Add Beneficiary</Link></h4>
                        </div>
                    </form>
                    
                </div>
                <div class="col">
                    <div class="card summary-card" id="b-s-card">
                        <span class="text-center s-ry beneficiary-card-heading"><span class="s-ry">Parent</span><img class="img-fluid summary-img" src={img7}/></span>
                       
                        <span class="text-center s-ry" id="set-goals">Relationship: <b>Parent</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Full name: <b>{inputValue1} &nbsp; {inputValue2}</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Phone: <b>Ksh {value}</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Date of birth: <b>{inputValue3}</b></span>
                        <hr align="center"class="detail-separator"/>
                    </div>           
                </div>
            </div>
            <div class="container goal-dets-btns">
                <div class="row n-p-btn">
                    <div class="col">
                        <Link to='/Securefamily' class="btn btn-primary previous">PREVIOUS</Link>
                    </div>
                    <div class="col div-next">
                        <Link to={checkPath} class="btn btn-primary next" onMouseUp={fieldConditions} onClick={phoneValidation}>NEXT</Link>
                    </div>
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

export default Beneficiary_parents;