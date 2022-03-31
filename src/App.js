import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/page/Home';
import Field from './field/Field';
import view from './procedure/view';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/linh-vuc' exact component={Field}/>
      <Route path='/phuong-phap' exact component={view}/>
      <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
