import { Switch, Route } from 'react-router-dom';
import Price from './pages/Price';
import User from './pages/User';
import Login from './pages/Login';
import Buy from './pages/Buy';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Price } />
        <Route exact path="/user" component={ User } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/buy" component={ Buy } />
      </Switch>
    </>
  );
}

export default App;
