import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImage from '../../defaultImage.svg';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={styles.status} state={isOnline.toString()}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="64" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
