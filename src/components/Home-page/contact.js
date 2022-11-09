import React, {Component} from 'react';
import { NavLink, Link } from "react-router-dom";
import { Label } from 'semantic-ui-react';


const Contact = () =>{
    const handleClick = () => {
           document.getElementById('s-cardc').style.display='flex';
           document.getElementById('s-cardc').style.zIndex='1';
           document.getElementById('s-cardc').style.position='relative';
           document.getElementById('s-cardc').style.width='100%';
           document.getElementById('s-cardc').style.height='70%';
           document.getElementById('s-cardc').style.backgroundColor='#ffffff';
      };

    const handleClick2 = () =>{
        document.getElementById('s-cardc').style.display='none';
        document.getElementById('s-card').style.zIndex='-1';
      }

    const handleClick3 = () =>{
        document.getElementById('s-cardc').style.display='none';
        document.getElementById('s-cardc').style.zIndex='-1';
      }

        return(
            <section class="contact-section">
                <div class="container contact-container">
                    <div class="d-flex justify-content-center cc">
                        <h1 class="c-p">Get In Touch</h1>
                        <button class="btn btn-primary c-b" onClick={handleClick}>MESSAGE US</button>
                    </div>     
                </div>
                <div class="modal container-fluid " id="s-cardc">
                    <div class="cardc success-cardc fadeInUp" id="card">
                        <div>
                            <form action='handler.php'>
                                <label for="nameInputField">
                                  <span>Name</span> <br/><input name="name" type="text" className='Input' id="nameInputField" placeholder='Name'/>
                                </label>
                                <br/>
                                <label for="emailInputField">
                                  <span>Email</span> <br/><input name="email" type="text" className='Input' id="emailInputField" placeholder='Email'/>
                                </label>
                                <br/>
                                <label for="messageInputField">
                                  <span>Message</span> <br/><textarea name="message" type="text" className='Input' id="messageInputField" placeholder='Message'></textarea>
                                </label><br/>
                                <button class="btn btn-primary c-b-contact" onClick={SubmitEvent}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default Contact;