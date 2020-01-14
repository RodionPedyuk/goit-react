import React from 'react';

const Progress = ({ progress, itemLength }) => {
  return (
    <p>
      {progress + 1}/{itemLength}
    </p>
  );
};

export default Progress;
