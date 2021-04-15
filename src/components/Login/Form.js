import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import ResetForm from './ResetForm.js';

export default function Form() {
   return (
      <>
         {/* Background Video */}
         <video
            playsinline='playsinline'
            autoplay='autoplay'
            muted='muted'
            loop='loop'
            src='https://public.ortex.com/wp-content/uploads/2020/09/iStock-1002667230-1.mp4'
            type='video/mp4'
         ></video>
         <div className='form-container'>
            <span className='close-btn'>
               <a href='#go-back-to-homepage?'>x</a>
            </span>
            {/* FORM LEFT */}
            <div className='form-content-left'>
               <img
                  className='form-img'
                  src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                  alt='ortex-logo'
               />
            </div>
            {/* FORM RIGHT */}
            <div className='form-content-right'>
               <Router>
                  <div>
                     <span className='form-input-login'>
                        <Link to='/'>Login Page</Link>
                        <br />
                        <Link to='/ResetForm'> Forgot Password?</Link>
                     </span>
                     <Switch>
                        <Route exact path='/'>
                           <LoginForm />
                        </Route>
                        <Route path='/ResetForm'>
                           <ResetForm />
                        </Route>
                     </Switch>
                  </div>
               </Router>
            </div>
         </div>
      </>
   );
}
