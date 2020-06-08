import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary'

const App = () => (
    <div className='App'>
      
      <Router>
        <Route  path='/' exact component={Home} />
        <Route  path='/play/instructions' exact component={QuizInstructions} />
        <Route  path='/play/questions' exact component={Play} />
        <Route  path='/play/summary' exact component={QuizSummary} />
      </Router>
     
    </div>
  );

export default App;
