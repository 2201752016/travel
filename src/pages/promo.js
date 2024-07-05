import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getPromos } from '../redux/api/travelApi';
import PromoCard from '../components/PromoCard';
import styles from '../styles/Promo.module.css';

const Promo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      const data = await getPromos();
      setPromos(data);
    };
    fetchPromos();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.promoContainer}>
        <h1>Promotions</h1>
        <div className={styles.promoList}>
          {promos.map(promo => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Promo;
