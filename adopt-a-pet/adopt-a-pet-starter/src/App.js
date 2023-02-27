import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/pet-details-not-found">
          <PetDetailsNotFound />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/:gtype/:petId">
          <PetDetailsPage />
        </Route>
        
        <Route exact path="/:gtype">
          <HomePage />
        </Route>
        
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
