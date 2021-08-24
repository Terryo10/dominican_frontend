import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './views/home';
import NotFound from './components/not_found';
import ContactPage from './views/contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
     <Route exact path="/"  name="HomePage" component={HomePage}/>
     <Route exact path="/home" name="HomePage" component={HomePage}/>
     <Route exact path="/contact" name="Contact" component={ContactPage}/>
     <Route path='*' exact={true} component={NotFound} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
