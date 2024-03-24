import './App.css';
import React, { useState } from 'react';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'; // Importing Link and Switch
import NavBar from './NavBar'; // Assuming you have a NavBar component
// import LoadingBar from './LoadingBar'; // Assuming you have a LoadingBar component
import News from './News'; // Assuming you have a News component




const Home = () => {
  const pageSize = 5;
  const apiKey = "f21bb4007a6e40cabd3fab47ddb30bd9"
  const [progress, setProgress] = useState(0)

  return (
    <div>
    <div style={{ backgroundImage: "linear-gradient(#001726, #003266, rgba(12, 0, 86, 0.555))" }} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1>Login Success Page</h1>
      <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>

    <Router>
      <NavBar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
        <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
        <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
        <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
        <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
        <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
        <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
      </Switch>
    </Router>
  </div>


  );
}

export default Home