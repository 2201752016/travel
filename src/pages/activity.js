import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getActivities } from '../redux/api/travelApi';
import ActivityCard from '../components/ActivityCard';
import styles from '../styles/Activity.module.css';

const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    fetchActivities();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.activityContainer}>
        <h1>Activities</h1>
        <div className={styles.activityList}>
          {activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
