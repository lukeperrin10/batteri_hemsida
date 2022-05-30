import Link from 'next/link'
import Image from 'next/image'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      mobile: {
        width: 319,
        height: 374,
        paddingX: 25,
        paddingTop: 25,
        paddingBottom: 33,
        marginY: '14px',
      },

      desktop: {
        width: 530,
        height: 618,
        paddingX: 34,
        paddingTop: 34,
        paddingBottom: 55,
        margin: '40px',
      },
    },
  },
})

const LogoIcon = styled('div', {
  square: 54,
  alignSelf: 'flex-end',
  marginBottom: 'auto',
})

const Divider = styled('div', {
  width: '78px',
  height: '4px',
  backgroundColor: '$white',
})

const Title = styled('h2', {
  fontSize: '$2',
  fontWeight: '$semi',
  color: '$white',
  marginTop: 21,
})

const Description = styled('p', {
  fontSize: '$1',
  color: '$white',
  marginTop: 16,
  marginRight: 38,
})

const ImageBox = styled('div', {
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,

  variants: {
    variant: {
      mobile: {
        width: 319,
        height: 374,
      },
      desktop: {
        width: 530,
        height: 618,
      },
    },
  },
})

const Card = ({ data, image }) => {
  const router = useRouter()
  switch (router.route) {
    case '/kurser/[slug]':
      return (
        <>
          <Link href={`/kurs/${data.slug}`} passHref>
            <CardContent
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              css={{
                linearGradient: `0deg, ${data.gradientColor?.color.hex} 10%, transparent 80%`,
              }}
            >
              <ImageBox>
                <Image
                  src={image.url}
                  alt={data.name}
                  layout='fill'
                  // width={319}
                  // height={374}
                />
              </ImageBox>
              <LogoIcon>
                <Image
                  src={data.logo?.url ? data.logo?.url : '/batteri.svg'}
                  alt={data.name}
                  height={54}
                  width={54}
                />
              </LogoIcon>
              <Divider />
              <Title>{data.name}</Title>
              <Description>{data.description}</Description>
            </CardContent>
          </Link>
        </>
      )

    default:
      return (
        <>
          <Link href={`/kurser/${data.slug}`} passHref>
            <CardContent
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              css={{
                linearGradient: `0deg, ${data.gradientColor?.color.hex} 10%, transparent 80%`,
              }}
            >
              <ImageBox>
                <Image
                  src={data.isWide ? data.wideImage?.url : data.image?.url}
                  alt={data.name}
                  layout='fill'
                  // width={319}
                  // height={374}
                />
              </ImageBox>
              <LogoIcon>
                <Image
                  src={data.logo?.url ? data.logo?.url : '/batteri.svg'}
                  alt={data.name}
                  height={54}
                  width={54}
                />
              </LogoIcon>
              <Divider />
              <Title>{data.name}</Title>
              <Description>{data.description}</Description>
            </CardContent>
          </Link>
        </>
      )
  }
}

export default Card

// const Card = ({ data, className }) => {
// const router = useRouter()

// switch (router.route) {
//   case '/event':
//     return (
//       <Link href={`/event/${data.slug}`} passHref>
//         <div className={`${className}__card`}>
//           <h2>{data.name}</h2>
//         </div>
//       </Link>
//     )

//   default:
//     return (
//       <Link href={`/kurser/${data.slug}`} passHref>
//         <div className={`${className}__card`}>
//           <h2>{data.name}</h2>
//         </div>
//       </Link>
//     )
// }

{
  /* <>
<CardBox>
  <CourseCard>
    <ImageBox>
      <Image src='/girl.webp' width={319} height={374} alt='borgir' />
    </ImageBox>
    <p>hdwjwdjwdiw</p>
  </CourseCard>
  <CourseCard>
    <ImageBox>
      <Image src='/girl.webp' width={319} height={374} alt='goat' />
    </ImageBox>
    <p>hdwjwdjwdiw</p>
  </CourseCard>
</CardBox>
</> */
}
