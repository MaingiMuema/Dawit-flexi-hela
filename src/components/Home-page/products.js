import React, {Component} from 'react';
import $ from 'jquery';

//Images
import img1 from  '../Assets/arrow.png'

class Products extends Component{
    render(){
        return(
            <section class="products-section"> 
                <div class="container" id='productSection'>
                    <h1 class="text-center fadeInUp">FAQs</h1>
                    <label for="touch">
                        <div onclick="productdesc()" class="product row">
                                <div class="col">
                                    <span class="product-list">How long can you keep the policy?</span>
                                </div>
                                <div class="col">
                                    <img class="img-fluid" src={img1}/> 
                                </div>
                                <input type="checkbox" id="touch"/> 
                                <div class="slide">
                                    <p>
                                    The policy has an open-ended term. You can keep the policy for as long as you want,
                                     as long as it remains active. You can keep paying premiums and the assured lives 
                                     will remain covered on the policy until:<br/><br/>

                                        <ul>
                                            <li>The policy lapses</li>
                                            <li>You submit a request for cancellation</li>
                                            <li>The principal life assured dies</li>
                                            <li>We cancel your policy for any reason including, but not limited to, suspected fraud or misrepresentation</li>
                                        </ul>

                                        If any of the events mentioned above happen, the policy will not be active anymore. Your premiums
                                         or contributions at such an instance will cease, and we shall not pay any further claims.
                                    </p>
                                </div>
                        </div>   
                    </label>
                    <label for="touch2">
                    <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How long can family members be covered on the policy?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch2"/>
                            <div class="slide2">
                                <p>
                                    As long as the policy is active, all lives can remain covered, 
                                    subject to their premiums being paid. Cover for children ceases on their 
                                    20th birthday. Thereafter, you will be able to add them as extended family.
                                </p>
                            </div>
                    </div>
                    </label>
                    <label for="touch3">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How long can you save on the policy?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch3"/>
                            <div class="slide3">
                                <p>
                                As long as the policy is active, you can continue contributing to your savings.
                                 If you don’t pay a risk premium when due, we will deduct the risk premium from
                                  your savings value.
                                </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch4">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">What if you want to change your policy?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch4"/>
                            <div class="slide4">
                            <p>If you want to make changes to your policy, you can do this using the 
                               <a href="http://app.sanlam.co.ke/digital-savings" target={"_blank"}>online portal.</a>  Alternatively, you can contact us as indicated in the 
                                “How do you contact Sanlam Life?” section below. You can change any of the following:<br/><br/>

                                <ul>
                                    <li>Increase cover for any life (subject to the six-month waiting period)</li>
                                    <li>Decrease cover for any life</li>
                                    <li>Add an additional life (subject to the maximum lives of 11, and the six-month waiting period)</li>
                                    <li>Remove cover for any life</li>
                                    <li>Amend the savings contribution</li>
                                    <li>Add, remove, or amend the beneficiary of the policy</li>
                                </ul>
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch5">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How can your policy lapse?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch5"/>
                            <div class="slide5">
                            <p>
                            You can cancel your policy at any time should you wish to. Simply let us know 
                            of your decision. Your cover will cease, and we will pay you your savings value.
                             If you do not pay your risk premium on time, the risk premium will be deducted 
                             from your savings value. If you do not pay your risk premium on time and do
                              not have enough in your savings value to fund your risk premium, your policy
                               will remain in force for one calendar month which is called the grace period.<br/><br/>

                            During the grace period, death benefits remain in force. If the insured dies during the
                            grace period, we will deduct the amount of any unpaid premiums from the death benefit
                            payable. Should your risk premium remain unpaid, your policy will lapse after the grace period.
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch6">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How do you get your lapsed policy back to being active?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch6"/>
                            <div class="slide6">
                            <p>
                            You can reinstate your policy at any time for up to twelve months from the date of lapse
                             by contacting us and paying the premiums from the date of reinstatement, subject to our
                              acceptance. The waiting period will apply from the date of reinstatement.
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch7">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How do you make a claim?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch7"/>
                            <div class="slide7">
                            <p>
                            You can let us know at any time if you want to claim by uploading the
                            documents shown below to the <a href="http://app.sanlam.co.ke/digital-savings" target={"_blank"}>online portal</a>, by emailing them to <a href="mailto:customerservice@sanlam.co.ke">customerservice@sanlam.co.ke,</a>
                            or by handing them in at our various branches.<br/><br/>

                            For all death claims we need:

                            <ul>
                                <li><b>The completed claim application form or written application signed by claimant with the following required documents:</b></li>
                                <li>Policy document</li>
                                <li>Certified true copy of medical certificate of cause of death (death certificate). This should be done by a commissioner of oaths or a court of competent jurisdiction in Kenya.</li>
                                <li>Proof of age of deceased life assured if the identity card was not provided prior to death</li>
                                <li>Original or certified true copy of photo identity card of the policyholder (National ID/Passport)</li>
                                <li>Certified copy of photo identity card of the claimant (National ID/Passport)</li>
                                <li>Copy of the claimant’s bank statement showing the account holder’s name, bank account number, branch name and code of the claimant</li>
                            </ul>

                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch8">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">Is there a cooling off period?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch8"/>
                            <div class="slide8">
                            <p>
                            You, as the policyholder, have a period of 30 days following delivery of the policy 
                            document to review and evaluate the policy to ensure that this is the right policy
                             for you. During the cooling off period, you can cancel the policy and receive a 
                             refund of all premiums paid.
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch9">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How do you contact Sanlam Life?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch9"/>
                            <div class="slide9">
                            <p>
                            We will only accept communication from you if you:<br/><br/>
                                <ul>
                                    <li>Use the <a href="http://app.sanlam.co.ke/digital-savings" target={"_blank"}>online portal</a> </li>
                                    <li>Send an SMS</li>
                                    <li>Send an email to the Head Office or any registered branch, or to <a href="mailto:customerservice@sanlam.co.ke">customerservice@sanlam.co.ke</a></li>
                                </ul>
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch10">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How do I access my savings?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch10"/>
                            <div class="slide10">
                            <p>
                            You can access your savings at any time. Simply visit our <a href="https://app.sanlam.co.ke/digital-savings" target={"_blank"}>online customer portal</a>
                             and request your savings withdrawal. The amount will be processed, and you will 
                             be able to access your savings within 24 hours. The funds will be sent to your 
                             registered mobile number.
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch11">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">Can I increase or decrease my saving contributions?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch11"/>
                            <div class="slide11">
                            <p>
                            Flexi Hela provides you with the dynamism to self-adjust your contributions to reach your goals much faster.
                            </p>
                            </div>
                        </div>
                    </label>
                    <label for="touch12">
                        <div class="product row" id="product">
                            <div class="col">
                                <span class="product-list">How do I convert my Bonga Points to savings?</span>
                            </div>
                            <div class="col">
                                <img class="img-fluid" src={img1}/> 
                            </div>
                            <input type="checkbox" id="touch12"/>
                            <div class="slide12">
                            <p>
                            You can grow your savings by converting your Safaricom Bonga Points with ease. Steps shared below:<br/><br/>

                            <ul>
                                <li>Dial *126# or go to the mySafaricom app and select ‘Lipa na Bonga Points’</li>
                                <li>Enter pay bill: 120120</li>
                                <li>Account number: ID number/Policy number</li>
                                <li>Enter amount: KSh XXX</li>
                                <li>Confirm amount and Bonga Points to be deducted</li>
                                <li>Enter your service PIN and proceed</li>
                            </ul>
                            </p>
                            </div>
                        </div>
                    </label>                         
                </div>
            </section>
        );
    }
}

  
export default Products;

function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.col').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fadeInUp');
      }
    });
  }
  // if in viewport, show the animation
  checkElementLocation();
  
  $(window).on('scroll', function() {
    checkElementLocation();
  });