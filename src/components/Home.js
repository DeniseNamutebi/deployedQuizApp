import React, {Fragment} from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import questionMark from "../assets/imgs/left-dotted-arrowhead.png";


const Home = () => {
    return ( 
        <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
        <div id="home" class="page">
            <div className = "page-container">  
                <div className="title" >
                    <h1>WHO AM I QUIZ </h1>
                </div>
              {/* <div>
                <img src={question} alt="question" height="100px" /> 
              </div>*/}
                <div className="play-button-container">
                    <ul>
                        <li id="item-1"><img src={questionMark} alt="questionMark" height="30px" />  <Link className ="nav-link" to="/play/questions">PLAY_</Link></li>
                        <li id="item-2"><img src={questionMark} alt="questionMark" height="30px" />  <Link className ="nav-link" to="/play/instructions">INSTRUCTIONS_</Link></li>
                    </ul> 
                </div>
            </div>
        </div>
        </Fragment>
    );
};



export default Home;