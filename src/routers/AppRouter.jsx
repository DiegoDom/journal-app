import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
       if (user?.uid) {
          dispatch(login(user.uid, user.displayName));
          setIsLoggedIn(true);
          dispatch(startLoadingNotes());
       } else {
         setIsLoggedIn(false);
       }
       setChecking(false);

    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (<LoadingScreen/>)
  }

  return (
    <Router>      
      <div>
        <Switch>
          <PublicRoute path='/auth' component={ AuthRouter } isAuthenticated={ isLoggedIn } />
          <PrivateRoute path='/' component={ JournalScreen } exact isAuthenticated={ isLoggedIn } />
          <Redirect to='/auth/login'/>
        </Switch>
      </div>
    </Router>
  );
};
