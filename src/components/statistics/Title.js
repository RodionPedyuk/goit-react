import React from 'react';
import css from '../statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticsTitle = ({ title }) => (
  <>{title && <h2 className={css.title}>{title}</h2>}</>
);

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};
StatisticsTitle.defaultProps = {
  title: '',
};
