import React from 'react';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <li className={css.friendsItem}>
      {isOnline === true ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

FriendListItem.defaultProps = {
  name: '',
  avatar: '',
  isOnline: 'false',
};
