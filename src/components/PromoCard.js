import styles from '../styles/Promo.module.css';

const PromoCard = ({ promo }) => {
  return (
    <div className={styles.card}>
      <h2>{promo.title}</h2>
      <p>{promo.description}</p>
    </div>
  );
};

export default PromoCard;
