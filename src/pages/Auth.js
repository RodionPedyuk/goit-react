import React from 'react';
import app from '../base';

export const Auth = () => {
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const [email, password] = e.target.elements;
      console.log(email.value);
      console.log(password.value);
      const data = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Log In</button>
    </form>
  );
};
