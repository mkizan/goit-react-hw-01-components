import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImage from '../../defaultImage.svg';

console.log(defaultImage);

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="аватар пользователя"
        width="120"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
  followers: 0,
  views: 0,
  likes: 0,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
