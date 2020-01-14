import React from 'react';

const Controls = ({
  handleClickNegative,
  handleClickPositive,
  itemLength,
  pageIndex,
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClickNegative}
        disabled={pageIndex === 0}
      >
        previous
      </button>

      <button
        type="button"
        onClick={handleClickPositive}
        disabled={pageIndex > itemLength - 2}
      >
        next
      </button>
    </div>
  );
};

export default Controls;
