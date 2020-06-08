import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import questionMark from "../../assets/imgs/left-dotted-arrowhead.png";




class QuizSummary extends Component{
   constructor(props){
       super(props);
       this.state = {
           score: 0,
           numberOfQuestion: 0,
           numberOfAnsweredQuestions: 0,
           correctAnswers: 0,
           wrongAnswers: 0,
       }
   }

componentDidMount () {
    const {state} = this.props.location;
    if (state){
    this.setState({
       score: (state.score / state.numberOfAnsweredQuestions) * 100,
       numberOfQuestion: state.numberOfQuestion,
       numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
       correctAnswers: state.correctAnswers,
       wrongAnswers: state.wrongAnswers
    });
}
}   

    render (){
        const {state} = this.props.location;
        let stats,remark;
        let totalScore = this.state.score;
        if (totalScore <= 30){
            remark = "A failure is one who gives up, try again!"
         }else if (totalScore > 30 && totalScore <= 50){
             remark = "Not the worst, better luck next time"
         }else if (totalScore <= 70 && totalScore > 50){
            remark = "Impressive"
        }else {
            remark = "Genius"
        };

        if  (state !== undefined){
            stats = (
                <Fragment>
                    <div className="page">
                        <div className="page-container">
                    
                    <h1 className="title">Quiz end</h1>
                    <div className="remark-container">
                        <h2>{remark}</h2>
                        <h2>score:{this.state.score.toFixed(0)}%</h2>
                        <span>Correct Answers:</span>
                        <span>{this.state.correctAnswers} </span>
                        <span> Wrong Answers:</span>
                        <span>{this.state.wrongAnswers}</span>
                    </div>
                    <div>
                    <div className="play-button-container" id="summary-buttons">
                    <ul>
                        <li id="item-1-1"><img src={questionMark} alt="questionMark" height="30px" />   <Link className="nav-link" to ="/">Back to Home</Link></li>
                        <li id="item-2-1"><img src={questionMark} alt="questionMark" height="30px" />  <Link className="nav-link"to ="/play/questions">Play Again?</Link>
                    </li>
                    </ul> 
                </div>
                       </div>
                        
                    </div>
                  </div>
                </Fragment>
            )
        }else{
          stats = (

               <div className="page">
                   <div className="page-container">
                   <h1 className="title">"Whoops! first complete the Quiz</h1>
                   <Link className="nav-link" to ="/">Back to Home</Link>
                   <Link className="nav-link" to ="/play/questions">Play!</Link>
                </div>
               </div> 

          )

        };
          
        return(
            <Fragment>
           <Helmet> <title>Quiz summary</title> </Helmet>
        {stats}
            </Fragment>
        )
    }
};

 


export default QuizSummary;