import React from 'react';
import css from './TransactionHistoryList.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryList = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <tr>
            <td className={css.info}>{transaction.type}</td>
            <td className={css.info}>{transaction.amount}</td>
            <td className={css.info}>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistoryList;

TransactionHistoryList.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

TransactionHistoryList.defaultProps = {
  id: '',
  type: '',
  amount: '',
  currency: '',
};
