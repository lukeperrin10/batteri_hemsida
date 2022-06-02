import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
// import MobNav from './MobNav';
import { styled } from '../../stitches.config'

const NavContainerOuter = styled('div', {
  backgroundColor: '$blackBg',
  width: '100wv',
  // display: 'flex',
  // justifyContent: 'center',
  variants: {
    variant: {
      mobile: {
        height: 89,
      },
      desktop: {
        height: 106,
      },
    },
  },
})

const NavContainerInner = styled('div', {
  backgroundColor: '$blackBg',
  maxWidth: '2560px',
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
  paddingX: 180,
  variants: {
    variant: {
      mobile: {
        height: 89,
      },
      desktop: {
        height: 106,
      },
    },
  },
})

const NavImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 50,
  variants: {
    variant: {
      mobile: {
        height: 89,
      },
      desktop: {
        height: 106,
      },
    },
  },
})

const ImageBox = styled('div', {
  position: 'relative',
  variants: {
    variant: {
      mobile: {
        width: 160,
        height: 43,
      },
      desktop: {
        height: 57,
        width: 210,
      },
    },
  },
})

const LinkContainer = styled('div', {
  variants: {
    variant: {
      mobile: {
        display: 'none',
      },
      desktop: {
        display: 'flex',
        columnGap: 50,
      },
    },
  },
})

const NavText = styled('p', {
  fontSize: '$3',
  variants: {
    variant: {
      mobile: {
        display: 'none',
      },
      smallDesktop: {
        display: 'none',
      },
      desktop: {
        display: 'inline-block',
      },
    },
  },
})

const CustomLink = styled('a', {
  fontSize: '$3',
  textDecoration: 'none',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const DesktopNav = () => {
  // const [mobNav, setMobNav] = useState(false);
  // const Toggle = () => setMobNav(!mobNav);
  // const [scrollY, setScrollY] = useState(0);
  const router = useRouter()

  const location = router.asPath
  // const homeActive = ['/'].includes(location) ? 'active' : '';
  // const kurserActive = ['/kurser'].includes(location) ? 'active' : '';
  // const contactActive = ['/kontakta-oss'].includes(location) ? 'active' : '';

  // const logit = () => {
  //   setScrollY(window.pageYOffset);
  // };

  // useEffect(() => {
  //   const watchScroll = () => {
  //     window.addEventListener('scroll', logit);
  //   };
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener('scroll', logit);
  //   };
  // });

  // const isScrolled = scrollY >= 10 ? 'scrolled' : '';
  return (
    <NavContainerOuter>
      <NavContainerInner variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        <NavImageContainer>
          <Link href='/' passHref>
            <a>
              <ImageBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                <Image
                  priority
                  placeholder='empty'
                  src='/batteri.svg'
                  layout='fill'
                  as='img/svg'
                  alt='Batteri logo'
                />
              </ImageBox>
            </a>
          </Link>
          <NavText
            variant={{
              '@initial': 'mobile',
              '@bp3': 'smallDesktop',
              '@bp6': 'desktop',
            }}>
            Design, Kod & Videoutbildning
          </NavText>
        </NavImageContainer>
        <LinkContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <Link href='/kurser' passHref>
            <CustomLink>Kurser</CustomLink>
          </Link>
          <Link href='/' passHref>
            <CustomLink>För Företag</CustomLink>
          </Link>
          <Link href='/' passHref>
            <CustomLink>Hitta Hit</CustomLink>
          </Link>
          <Link href='/kontakta-oss' passHref>
            <CustomLink>Kontakt</CustomLink>
          </Link>
        </LinkContainer>
      </NavContainerInner>
    </NavContainerOuter>
  )
}

export default DesktopNav

{
  /* <div className={`navbar ${isScrolled}`}>
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
</div> */
}
