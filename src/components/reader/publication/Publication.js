import React from 'react';

const Publications = ({ id, title, text }) => {
  return (
    <article key={id}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default Publications;
