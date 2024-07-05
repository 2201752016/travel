import styles from '../styles/Activity.module.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.card}>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
    </div>
  );
};

export default ActivityCard;
