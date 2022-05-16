import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const Toggle = () => setNav(!nav)
  const isOpen = nav ? 'is-open' : ''

  return (
    <>
      <a className={`btn-burger ${isOpen}`} onClick={() => Toggle()}></a>

      <div className={`side-menu ${isOpen}`}>
        <ul className='listItems'>
          <li>
            <Link href='/'>
              <a className='nav-link nav-link--1' onClick={() => Toggle()}>
                Hem
              </a>
            </Link>
          </li>
          <li>
            <Link href='/kurser'>
              <a className='nav-link nav-link--2' onClick={() => Toggle()}>
                Kurser
              </a>
            </Link>
          </li>
          <li>
            <Link href='/event'>
              <a className='nav-link nav-link--3' onClick={() => Toggle()}>
                Event
              </a>
            </Link>
          </li>
          <li>
            <Link href='/kontakt'>
              <a className='nav-link nav-link--4' onClick={() => Toggle()}>
                Kontakt
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
