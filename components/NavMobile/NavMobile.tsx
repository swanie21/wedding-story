import Link from 'next/link';
import { useState } from 'react';
import styles from './NavMobile.module.scss';

export const NavMobile: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles['nav__hamburger-menu']} role="navigation" aria-labelledby="mobile nav">
      <input aria-label="mobile navigation button" className={styles['nav__hamburger-menu--toggle']} checked={menuOpen} onChange={(): void => setMenuOpen((prevState) => !prevState)} type="checkbox" />
      <span className={styles['nav__hamburger-menu--bar']}></span>
      <span className={styles['nav__hamburger-menu--bar']}></span>
      <span className={styles['nav__hamburger-menu--bar']}></span>
      <ul className={styles.nav}>
        <li className={styles['nav__link']}><Link href="/" prefetch={false}>Home</Link></li>
        <li className={styles['nav__link']}><Link href="/travel" prefetch={false}>Travel</Link></li>
        <li className={styles['nav__link']}><Link href="/our-story" prefetch={false}>Love Story</Link></li>
        <li className={styles['nav__link']}><Link href="/wedding-party" prefetch={false}>Wedding Party</Link></li>
        <li className={styles['nav__link']}><Link href="/things-to-do" prefetch={false}>Things to do</Link></li>
        <li className={styles['nav__link']}><Link href="/adventure-fund" prefetch={false}>Adventure Fund</Link></li>
      </ul>
    </nav>
  );
};
