import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './NavMobile.module.scss';

export const NavMobile: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(menuOpen === true) {
      document.body.classList.add('position-fixed');
    }

    return function cleanup() {
      document.body.classList.remove('position-fixed');
    };
  }, [menuOpen]);

  useEffect(() => {
    const travelPage = document.getElementById('travel-page');

    if(menuOpen === true && router.pathname == '/travel') {
      travelPage.classList.add('adjust-layering');
    }

    return function cleanup() {
      if(travelPage && router.pathname == '/travel') {
        travelPage.classList.remove('adjust-layering');
      }
    };
  }, [menuOpen]);

  return (
    <div className={styles['nav__hamburger-menu']} role="navigation" aria-labelledby="mobile nav">
      <input aria-label="mobile navigation button" className={styles['nav__hamburger-menu--toggle']} checked={menuOpen} onChange={(): void => setMenuOpen((prevState) => !prevState)} type="checkbox" />
      <span className={styles['nav__hamburger-menu--bar']} />
      <span className={styles['nav__hamburger-menu--bar']} />
      <span className={styles['nav__hamburger-menu--bar']} />
      <div className={styles['nav__hamburger-menu--list']}>
        <input
          aria-label="mobile navigation button"
          className={`${styles['nav__hamburger-menu--toggle']} ${styles['nav__hamburger-menu--toggle-close']}`}
          checked={menuOpen}
          onChange={(): void => setMenuOpen((prevState) => !prevState)}
          type="checkbox"
        />
        <span className={styles['nav__hamburger-menu--bar-close']}></span>
        <span className={styles['nav__hamburger-menu--bar-close']}></span>
        <ul className={styles['nav__hamburger-menu--list-container']}>
          <li className={styles['nav__link']}><Link href="/" prefetch={false}>Home</Link></li>
          <li className={styles['nav__link']}><Link href="/travel" prefetch={false}>Travel</Link></li>
          <li className={styles['nav__link']}><Link href="/our-story" prefetch={false}>Our Story</Link></li>
          <li className={styles['nav__link']}><Link href="/wedding-party" prefetch={false}>Wedding Party</Link></li>
          <li className={styles['nav__link']}><Link href="/things-to-do" prefetch={false}>Things to do</Link></li>
          <li className={styles['nav__link']}><Link href="/rsvp" prefetch={false}>RSVP</Link></li>
          <li className={styles['nav__link']}><Link href="/registry" prefetch={false}>Registry</Link></li>
        </ul>
      </div>
    </div>
  );
};
