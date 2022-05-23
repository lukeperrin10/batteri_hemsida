import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import MobNav from './MobNav';

const DesktopNav = () => {
  const [mobNav, setMobNav] = useState(false);
  const Toggle = () => setMobNav(!mobNav);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  const location = router.asPath;
  const homeActive = ['/'].includes(location) ? 'active' : '';
  const kurserActive = ['/kurser'].includes(location) ? 'active' : '';
  const contactActive = ['/kontakta-oss'].includes(location) ? 'active' : '';

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });

  const isScrolled = scrollY >= 10 ? 'scrolled' : '';
  return (
    <div className={`navbar ${isScrolled}`}>
      <div className='navbar__image'>
        <Link href='/' passHref>
          <a>
            <Image
              priority
              placeholder='empty'
              src='/batteri.svg'
              height={121}
              width={388}
              as='img/svg'
              alt='Batteri logo'
            />
          </a>
        </Link>
      </div>
      <button className='navbar__burger' onClick={() => Toggle()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <MobNav show={mobNav} close={Toggle} />

      <div className='navbar__links'>
        <div className='navbar__links--link'>
          <Link href='/' passHref>
            <a className={`navbar__links--a ${homeActive}`}>Hem</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/kurser' passHref>
            <a className={`navbar__links--a ${kurserActive}`}>Kurser</a>
          </Link>
        </div>
        <div className='navbar__links--link'>
          <Link href='/kontakta-oss' passHref>
            <a className={`navbar__links--a ${contactActive}`}>Kontakt</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
