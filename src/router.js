import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Register } from './pages/Register';

export const useRouter = isAuthorisation => {
  if (isAuthorisation) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Auth} />
      <Route path="/registration" exact component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
};
