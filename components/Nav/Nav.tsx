import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';

import { NavMobile } from '../NavMobile';

export const Nav: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles['nav__desktop']}>
        <ul className={styles['nav__desktop--list']}>
          <li className={`${styles['nav__link']} ${router.pathname == '/' && styles['active']}`}><Link href="/" prefetch={false}>Home</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/travel' && styles['active']}`}><Link href="/travel" prefetch={false}>Travel</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/our-story' && styles['active']}`}><Link href="/our-story" prefetch={false}>Our Story</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/wedding-party' && styles['active']}`}><Link href="/wedding-party" prefetch={false}>Wedding Party</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/things-to-do' && styles['active']}`}><Link href="/things-to-do" prefetch={false}>Things to do</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/rsvp' && styles['active']}`}><Link href="/rsvp" prefetch={false}>RSVP</Link></li>
          <li className={`${styles['nav__link']} ${router.pathname == '/registry' && styles['active']}`}><Link href="/registry" prefetch={false}>Registry</Link></li>
        </ul>
        <NavMobile />
      </nav>
    </header>
  );
};
