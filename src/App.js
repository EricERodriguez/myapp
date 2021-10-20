import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './footer';
import Home from './home';
import Menu from './menu';
import Name from './name';
import NotFoundPage from './noFoundPage';


function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Router path="/product" exact>
          <Name />
        </Router>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Redirect from="/home" to="/" exact />
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
