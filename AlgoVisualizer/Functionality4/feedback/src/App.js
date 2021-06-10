

import Navibar from './components/Navbar';
import Feedback from './pages/Feedback';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import About from './pages/About';
import Userguide from './pages/Userguide';
import ErrPg from './pages/err404';
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    <div className="App">
        <Navibar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/feedback" component={Feedback}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Userguide" component={Userguide}></Route>
          <Route exact path="/contactUs" component={Contact}></Route>
          <Route component={ErrPg}></Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
