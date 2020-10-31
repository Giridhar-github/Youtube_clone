import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
            <Header />
        <Switch>
          <Route path="/gallery">
            <h2>Wlcome to galery</h2>
          </Route>
          <Route path="/search/">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
