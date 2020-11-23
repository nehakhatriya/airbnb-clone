
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search" exact component={SearchPage}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
