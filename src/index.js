import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import statistical from './statistical.json';
import friends from './friends.json';
import transaction from './transactions.json';

import App from './components/App';
ReactDOM.render(
  <App
    user={user}
    statistical={statistical}
    friends={friends}
    transaction={transaction}
  />,
  document.getElementById('root'),
);
