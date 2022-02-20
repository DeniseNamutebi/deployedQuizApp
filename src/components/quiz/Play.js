import React, {Component, Fragment} from "react";
import { Helmet } from "react-helmet";
import M from "materialize-css";


import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty";

import questionMark from "../../assets/imgs/left-dotted-arrowhead.png";


 

class Play extends Component {
 constructor(props) {
    super(props); 
     this.state = {
         questions,
         currentQuestion: {},
         nextQuestion: {},
         previousQuestion: {},
         answer: "",
         numberOfQuestion: 0,
         currentQuestionIndex: 0,
         score: 0,
         correctAnswers: 0,
         wrongAnswers: 0,
         numberOfAnsweredQuestions: 0,
    };
}
    componentDidMount()  {
        const { questions, currentQuestion, previousQuestion, nextQuestion} = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
    }

    displayQuestions = (questions = this.state.questions,currentQuestion,previousQuestion,nextQuestion) => {
     let { currentQuestionIndex }  = this.state;      
     if(!isEmpty(this.state.questions)){
         questions = this.state.questions;
         currentQuestion = questions[currentQuestionIndex];
         nextQuestion = questions[currentQuestionIndex + 1];
         previousQuestion = questions[currentQuestionIndex - 1];
         const answer = currentQuestion.answer;
         this.setState({
             currentQuestion,
             nextQuestion,
             previousQuestion,
             answer
         })
     }
    };

    optionClick = (e) => {
        if(e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()){
            this.correctAnswer();
        }else{
            this.wrongAnswer();
        }

    }
    previousButtonClick = () => {
        
            if (this.state.previousQuestion !== undefined) {
                this.setState((prevState) => ({
                    currentQuestionIndex: prevState.currentQuestionIndex - 1
                }), () => {
                    this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
                });
            }
        }

        nextButtonClick = () => {
        
            if (this.state.nextQuestion !== undefined) {
                this.setState((prevState) => ({
                    currentQuestionIndex: prevState.currentQuestionIndex + 1
                }), () => {
                    this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
                });
            }
        }    

        quitButtonClick = () => {
            if (window.confirm ('Are you sure you want to quit?')) {
                
            }
            this.props.history.push('/');
        }
    


    

    correctAnswer = () => {
        M.toast({
            html: 'Correct Answer!',
           
        });
      this.setState(previousState =>({
          score: previousState.score + 1,
          correctAnswers: previousState.correctAnswers + 1,
          currentQuestionIndex: previousState.currentQuestionIndex + 1,
          numberOfAnsweredQuestions: previousState.numberOfAnsweredQuestions +1,
      }), () => {
        if (this.state.nextQuestion === undefined) {
            this.endGame();
        }else{
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.previousQuestion,this.state.nextQuestion) 
        }
    });
    }

    wrongAnswer = () => {
        M.toast({
            html: 'Wrong Answer!',
    
        });
        this.setState(previousState =>({
            wrongAnswers: previousState.wrongAnswers + 1,
            currentQuestionIndex: previousState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: previousState.numberOfAnsweredQuestions + 1,
        }),() => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            }else{
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.previousQuestion,this.state.nextQuestion) 
            }
        });
      }

      endGame = () => {
          alert('Quiz has ended');
          const {state} = this;
          const playerStats = {
            score: state.score,
            numberOfQuestion: state.numberOfQuestion,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers : state.wrongAnswers,
          };
          this.props.history.push('/play/summary', playerStats);
          console.log(playerStats);  
          };
      

    render () {
        const { currentQuestion } = this.state;
        return(
        <Fragment>
            <Helmet><title>Quiz App - Play</title></Helmet>
        <div className="page">
            <div className = "page-container" id="play">
          <div className="questionnumber">
              <span>1 of 15</span>
          </div> 
          <div className="questions-container">
              <h2 style = {{ padding : 8 }}>{currentQuestion.question}</h2>
                    <div className="options-container">
                        <p onClick={this.optionClick} className="option">{currentQuestion.A}</p>
                        <p onClick={this.optionClick}  className="option">{currentQuestion.B}</p>
                    </div>
                    <div className="options-container">
                        <p onClick={this.optionClick} className="option">{currentQuestion.C}</p>
                        <p onClick={this.optionClick} className="option">{currentQuestion.D}</p>
                    </div>
            </div>       
          <div className="play-button-container" id="nav-bar">
              {/*<div id="table">
             <ul id="horizontal-list">
                <li>
                    <img src={questionMark} alt="questionMark" height="30px" />
                    <button className="nav-link" onClick={this.previousButtonClick}>previous</button>
                </li>
                <li>
                    <img src={questionMark} alt="questionMark" height="30px" />   
                    <button className="nav-link" onClick={this.nextButtonClick}>Next</button>
                </li>
                <li>
                    <img src={questionMark} alt="questionMark" height="30px" />   
                    <button className="nav-link" onClick={this.quitButtonClick}>Quit</button>
                </li>
            </ul>*/}<div className="nav-bar-item">
                        <img src={questionMark} alt="questionMark" height="30px" />
                        <button className="nav-link" onClick={this.quitButtonClick}>Quit</button>
                    </div>
                    <div className="nav-bar-item">
                        <img src={questionMark} alt="questionMark" height="30px" />   
                        <button className="nav-link" onClick={this.nextButtonClick}>Next</button>
                    </div>
                    <div className="nav-bar-item">
                        <img src={questionMark} alt="questionMark" height="30px" />   
                        <button className="nav-link" onClick={this.previousButtonClick}>previous</button>
                    </div>
              </div>  
          
        </div> 
        </div>
        </Fragment>
        )
    }
};
   


export default Play;

