import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuBar from './components/Header/MenuBar/MenuBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
