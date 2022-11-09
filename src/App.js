import './App.css';
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home-page/home'
import Steps from './components/Home-page/steps';
import Contact from './components/Home-page/contact';
import Products from './components/Home-page/products';
import Footer from './components/Home-page/footer';
import Goal from './components/Goals-page/Goal';
import SecureSavings from './components/Secure-savings-page/Secure-savings';
import Goal_planner_car from './components/Goal-planner-page/Goal_planner-car';
import Goal_planner_dreamGadget from './components/Goal-planner-page/Goal_planner_dreamGadget';
import Goal_planner_dreamHouse from './components/Goal-planner-page/Goal_planner_dreamHouse';
import Goal_planner_dreamSchool from './components/Goal-planner-page/Goal_planner_dreamSchool';
import Goal_planner_dreamWedding from './components/Goal-planner-page/Goal_planner_dreamWedding';
import Goal_planner_Other from './components/Goal-planner-page/Goal_planner_others';
import Securefamily from './components/Secure-family-page/Securefamily';
import Payment from './components/Payment-page/Payment';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Beneficiary_children from './components/Beneficiaries-page/Beneficiary_children';
import Beneficiary_partner from './components/Beneficiaries-page/Beneficiary_partner';
import Beneficiary_parents from './components/Beneficiaries-page/Beneficiary_parents';
import Beneficiary from './components/Beneficiaries-page/Beneficiary';


function App() {

  return ( 
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
            <Steps/>
            <Contact/>
            <Products/>
            <Footer/>
          </Route>
          <Route exact path="/Goal"><Goal/></Route>
          <Route exact path="/Goal_planner_car"><Goal_planner_car/></Route>
          <Route exact path="/Goal_planner_dreamGadget"><Goal_planner_dreamGadget/></Route>
          <Route exact path="/Goal_planner_dreamHouse"><Goal_planner_dreamHouse/></Route>
          <Route exact path="/Goal_planner_dreamSchool"><Goal_planner_dreamSchool/></Route>
          <Route exact path="/Goal_planner_dreamWedding"><Goal_planner_dreamWedding/></Route>
          <Route exact path="/Goal_planner_Other"><Goal_planner_Other/></Route>
          <Route exact path="/Goal_planner_car"><Goal_planner_car/></Route>
          <Route exact path="/Secure-savings"><SecureSavings/></Route>
          <Route exact path="/Securefamily"><Securefamily/></Route>
          <Route exact path="/Beneficiary_partner"><Beneficiary_partner/></Route>
          <Route exact path="/Beneficiary_children"><Beneficiary_children/></Route>
          <Route exact path="/Beneficiary_parents"><Beneficiary_parents/></Route>
          <Route exact path="/Payment"><Payment/></Route>
          <Route exact path="/Beneficiary"><Beneficiary/></Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
