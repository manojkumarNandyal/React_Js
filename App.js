import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetailPage from './pages/CarDetailPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/car/:id" component={CarDetailPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
