import React, {Fragment} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import questionMark from "../../assets/imgs/left-dotted-arrowhead.png"


const QuizInstructions = () => (
    <Fragment>
        <Helmet>Quiz App - Instructions</Helmet>
        <div id="instruction-page" className="page">
         <div className="page-container" >
            <h1 id="instruct-title" className="title">Instructions</h1>
            <p>A brief description of a person is given.<br/> You are provided with 4 different options to pick who you think the person is.
            <br/>Simple right?! Now go ahead and play. </p>
        <div className="play-button-container" id="play-button">    
              <img src={questionMark} alt="questionMark" height="30px" />
              <Link className="nav-link" to="/">GO BACK</Link>
        </div>
                </div>
        </div>
    </Fragment>
);


export default QuizInstructions;