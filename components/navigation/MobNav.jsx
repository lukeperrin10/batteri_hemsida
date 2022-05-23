import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MobNav = ({ show, close }) => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logit)
    }
  })

  const isScrolled = scrollY >= 10 ? 'scrolled' : ''
  return (
    <>
      {show ? (
        <div className={`mob-nav-bg ${isScrolled}`} onClick={() => close()}>
          <div className='mob-nav' onClick={(e) => e.stopPropagation()}>
            <div className='mob-nav__links'>
              <div className='mob-nav__links--link'>
                <Link href='/' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>
                    Hem
                  </a>
                </Link>
              </div>
              <div className='mob-nav__links--link'>
                <Link href='/kurser' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>
                    Kurser
                  </a>
                </Link>
              </div>
              <div className='mob-nav__links--link'>
                <Link href='/kontakta-oss' passHref>
                  <a className='mob-nav__links--a' onClick={() => close()}>
                    Kontakt
                  </a>
                </Link>
              </div>
              <div className='image-container'>
                <div className='image-container--image'>
                  <Image
                    src='/logo.webp'
                    height={446}
                    width={392}
                    as='img/svg'
                    alt='Timotuz logo'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MobNav
