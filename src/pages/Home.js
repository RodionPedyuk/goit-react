import React from 'react';
import base from '../base';

export const Home = () => (
  <>
    <h2>Home</h2>
    <button onClick={() => base.auth().signOut()}>sighOut</button>
  </>
);
