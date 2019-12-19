import React from 'react';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  //   const { name, avatar, isOnline, id } = friends;

  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friend: PropTypes.string.isRequired,
};
FriendList.defaultProps = {
  friend: '',
};
