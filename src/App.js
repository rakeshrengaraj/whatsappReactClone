import React, { useState } from 'react';
import Login from './Login';
import './App.css';

import Sidebar from './Sidebar';
import Chat from './Chat';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {

  // const [user, setUser] = useState(null)

  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">
      {!user ?

        (
          <Login></Login>
        ) :

        (<div className="app__body">
          <Router>
            <Sidebar></Sidebar>

            <Switch>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>

              <Route path="/">
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </div>)}

    </div>
  );
}

export default App;
