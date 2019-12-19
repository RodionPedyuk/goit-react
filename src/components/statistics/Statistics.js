import React from 'react';
import css from '../statistics/Statistics.module.css';
import { StatisticsTitle } from '../statistics/Title';
import PropTypes from 'prop-types';

const Statistics = ({ statisticals }) => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle />
      <ul className={css.statList}>
        {statisticals.map(statistical => (
          <li key={statistical.id} className={css.item}>
            <span className={css.label}>{statistical.label}</span>
            <span className={css.percentage}>{statistical.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.string,
};
Statistics.defaultProps = {
  id: '',
  label: '',
  percentage: '',
};
