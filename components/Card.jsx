import Link from 'next/link'
import Image from 'next/image'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  paddingBottom: 33,
  paddingX: 25,
  paddingTop: 25,
  width: 319,
  height: 374,
  marginY: '14px',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
  },
  // linearGradient: '0deg, $Ps 10%, transparent 80%',
  variants: {
    variant: {
      Ps: {
        linearGradient: '0deg, $Ps 10%, transparent 80%',
      },
      Ai: {
        linearGradient: '0deg, $Ai 10%, transparent 80%',
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
  width: 319,
  height: 374,
})

const Card = ({ data, className }) => {
  return (
    <>
      <Link href={`/kurser/${data.slug}`} passHref>
        <CardContent variant={data.gradientColor?.name}>
          <ImageBox>
            <Image
              src={data.image?.url ? data.image?.url : '/batteri.svg'}
              alt={data.name}
              height={374}
              width={319}
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
