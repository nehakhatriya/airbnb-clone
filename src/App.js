
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PlaceDetails from './PlaceDetails';
function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search" exact component={SearchPage}/>
        <Route path="/details/:id" exact component={PlaceDetails}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
