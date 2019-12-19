import React from 'react';
import css from '../profile/Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={user.avatar} alt="user avatar" className={css.avatar} />
        <p className={css.name}>{user.name}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  likes: PropTypes.string,
  followers: PropTypes.string,
  views: PropTypes.string,
};
Profile.defaultProps = {
  avatar: '',
  name: '',
  tag: '',
  location: '',
  likes: '',
  followers: '',
  views: '',
};
