import React from 'react';
import app from '../base';

export const Register = () => {
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const [email, password] = e.target.elements;
      console.log(email.value);
      console.log(password.value);
      const data = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Registrate</button>
    </form>
  );
};
