import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';

export const Nav: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li className={`${styles['nav__link']} ${router.pathname == '/' && styles['active']}`}><Link href="/">Home</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/travel' && styles['active']}`}><Link href="/travel">Travel</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/love-story' && styles['active']}`}><Link href="love-story">Love Story</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/wedding-party' && styles['active']}`}><Link href="/wedding-party">Wedding Party</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/things-to-do' && styles['active']}`}><Link href="/things-to-do">Things to do</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/adventure-fund' && styles['active']}`}><Link href="/adventure-fund">Adventure Fund</Link></li>
        </ul>
      </nav>
    </header>
  );
};
