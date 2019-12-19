import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friends from './FriendList/FriendList';
import Transactions from './TransactionHistory/TransactionHistoryList';

function App({ user, statistical, friends, transaction }) {
  console.log('----->', transaction);
  return (
    <div>
      <Profile user={user} />
      <Statistics statisticals={statistical} />
      <Friends friends={friends} />
      <Transactions transactions={transaction} />
    </div>
  );
}

export default App;
