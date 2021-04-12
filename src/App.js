import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Spinner from 'react-spinkit';

import GlobalStyles from './styles/GlobalStyles';
import { AppBody, AppLoading, AppLoadingContents } from './styles/App.styles'

import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat';

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return (
      <>
        <AppLoading>
          <AppLoadingContents>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
            <Spinner 
              name="ball-spin-fade-loader"
              color="purple"
              fadeIn="none"
              />
          </AppLoadingContents>
        </AppLoading>
        <GlobalStyles/>
      </>
    )
  }

  return (
    <>
      <GlobalStyles/>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ):(
            <> 
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
          )}      
      </Router>
      </div>
    </>
  );
}

export default App;