import React, { Component } from "react";
import {useSelector, useDispatch} from "react-redux";
import logo from './logo.svg';
import './App.css';
// import Login from './components/login';
import Home from './components/home';
import Facility from './components/facility';
import Header from './components/header';
import Footer from './components/footer';
import ViewFacility from './components/viewFacility';
import Signup from './components/signup';
import Booking from './components/booking';
import Profile from './components/profile';
import NotFound from './components/notFound';
// import AddUser from './components/admin/addUser';
// import ManageUser from './components/admin/manageUser';
// import AddLeave from './components/admin/addLeave';
// import LeaveStatus from './components/admin/leaveStatus';
// import Dashboard from './components/admin/dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {

  const dispatch=useDispatch();
//  const name = useSelector((state) => state.todoReducer.name);
//  const empid = useSelector((state) => state.todoReducer.empid);
//  const email = useSelector((state) => state.todoReducer.email);
//  const type = useSelector((state) => state.todoReducer.type);  

  return (
    <div className="App">
       <Router basename={'/'}>
       <Switch>
                    {/* USER */}
                    {/* <Route path="/login"><Login/></Route> 
                    <Route path="/home"><Header/><Home/></Route>                   
                    <Route path="/mytask"><Header/><MyTask/></Route>                   
                    <Route path="/leavestatus"> */}
                      
                      { 
                      //type==='admin'?<AdminHeader/>:<Header/> 
                    }
                      
                      {/* <LeaceStatus/>
                      </Route>                    */}
                    {/* <Route path="/history"><Header/><History/></Route>   */}

                     {/* ADMIN */}
                    {/* <Route path="/dashboard"><AdminHeader/><Dashboard/></Route>                 
                    <Route path="/adduser"><AdminHeader/><AddUser/></Route>
                    <Route path="/manage"><AdminHeader/> <ManageUser/>  </Route>   
                    <Route exact path="/leave" component={AddLeave}/> 
                    <Route path="/leave/:id" component={AddLeave}/>  
                    <Route path="/leavestatus"><AdminHeader/> <LeaveStatus/>  </Route>    */}
                                 
                    
                    <Route path="/booking"><Header/><Booking/><Footer/></Route>
                    <Route path="/facility/:id"><Header/><Facility/><Footer/></Route>
                    {/* <Route path="/profile/:id"><Header/><Profile/><Footer/></Route> */}
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/viewfacility/:id"><Header/><ViewFacility/><Footer/></Route>
                    <Route path="/confirm"><Header/><Signup/><Footer/></Route>
                    <Route exact path="/"><Header/><Home/><Footer/></Route>

                    <Route> <Header/><NotFound/><Footer/> </Route>
        </Switch>
            </Router>
    </div>
  );
}

export default App;
