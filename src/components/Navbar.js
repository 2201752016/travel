import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Travel</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/activity">Activity</Link></li>
        <li><Link href="/promo">Promo</Link></li>
      </ul>
      <button onClick={() => dispatch(toggleDarkMode())} className={styles.themeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
