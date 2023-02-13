import React from 'react';
//import home from './components/Home';
import './App.css';
//import Page from './page.html';
import img from './avatar.png';
import Popup from 'reactjs-popup';
//import { Link, redirect } from 'react-router-dom';
//import { Link, Router } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import React, { Component } from "react";
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function App() {
const log ="login";
const MP = "login";
  return (
    <div className="container">
    <img src={img} alt="user" className="img"/>   
    <div>   
        <input type="text" placeholder="Login"/>
    </div>
    <div className="passwd"> 
        <input type="text" placeholder="Mot de passe" id="valpasswd"/>
    </div>
   
    <div>
        <button onClick={()=>{
            window.location.href= "http://127.0.0.1:5500/src/page.html";
               // axios.post('http://127.0.0.1:5500/src/page.html');
        }}>Login</button>
        <Popup trigger=
        {<p className="message"><a href="Motdepasseoublié#">Mot de passe oublié ?</a></p>}
        modal nenpm install typescript sted>
        {
            close => (
                <div className='modal'>
                    <div className='content'>
                    votre demande est envoyé
                    </div>
                    <div>
                        <button onClick= {() => close()}>
                                Close
                        </button>
                    </div>
                </div>
            )
        }
        </Popup>
    </div>  
</div>
);
}

export default App;














/*const navigate = useNavigate();
<button onClick={()=>{navigate(home)}}>logout</button>*/

//<Link to="./page.html" className="btn btn-primary">Sign up</Link>  
//<button onClick={() => {
    //console.log('hello');
    //const t= (location.href= 'http://localhost:3000/page.html'); 
    //window.location.href= "http://localhost:3000/page.html";
   
    
//}}>Login</button>


//<Router>
  //  <Link to= {home}><button>LogIN</button></Link>
    //</Router>

//    <Router>
 //   <switch>
//        <Route exact path='/components/Home' component={home}><button>LogIN</button></Route>
 //   </switch>
//</Router>