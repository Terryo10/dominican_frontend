import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './views/home';
import NotFound from './components/not_found';
import ContactPage from './views/contact';
import DonatePage from './views/donate';
import PaynowSuccess from './views/payments/paynow_success';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
     <Route exact path="/"  name="HomePage" component={HomePage}/>
     <Route exact path="/home" name="HomePage" component={HomePage}/>
     <Route exact path="/contact" name="Contact" component={ContactPage}/>
     <Route exact path="/donate" name="donate" component={DonatePage}/>
     <Route exact path="/paynow_success/:donation_id" name="donate" component={PaynowSuccess}/>
     <Route path='*' exact={true} component={NotFound} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
