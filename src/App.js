import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/page/Home';
import Field from './field/Field';
import view from './procedure/view';
import Study from './study/Study';
import About from './about/About';
import Contact from './contact/Contact';
import ScrollOnTop from './handle/ScrollOnTop';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollOnTop />
      <Switch>
      <Route path='/linh-vuc' exact component={Field}/>
      <Route path='/phuong-phap' exact component={view}/>
      <Route path='/nghien-cuu' exact component={Study}/>
      <Route path='/about' exact component={About}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
