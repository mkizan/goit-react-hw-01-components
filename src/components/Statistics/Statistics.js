import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{
              backgroundColor:
                label === '.docx'
                  ? '#4fc5f5'
                  : label === '.pdf'
                  ? '#a43cf3'
                  : label === '.mp3'
                  ? '#e54d66'
                  : label === '.psd'
                  ? '#20b8c5'
                  : 'white',
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propsDefault = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
