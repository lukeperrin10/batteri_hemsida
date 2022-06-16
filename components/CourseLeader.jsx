import Image from 'next/image'
import React from 'react'
import { styled } from '../stitches.config'

const CourseLeaderSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100vw',
  maxWidth: '2560px',
  height: 'fit-content',
  variants: {
    variant: {
      mobile: {
        rowGap: 13,
        flexDirection: 'column',
      },
      desktop: {
        columnGap: 140,
        flexDirection: 'row',
      },
    },
  },
})

const NameAndImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 43,
})
const ImageContainer = styled('div', {
  position: 'relative',

  span: {
    borderRadius: '50%',
  },
  variants: {
    variant: {
      mobile: {
        square: 130,
      },
      desktop: {
        square: 240,
      },
    },
  },
})
const NameContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
const Title = styled('p', {
  color: '$black',
  fontWeight: '$bold',
  fontSize: '$3',
  marginBottom: 10,
})
const Name = styled('p', {
  color: '$black',
  fontWeight: '$bold',
  fontSize: '$5',
})
const About = styled('div', {
  maxWidth: 670,
  p: {
    color: '$black',
  },
  a: {
    color: '$blueLink',
    '&:hover': {
      color: '$blueDark',
    },
  },
})

const CourseLeader = ({ data }) => {
  const { courseLeaderAbout, courseLeaderImage, name, profession } = data[0]
  return (
    <CourseLeaderSection variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}>
      <NameAndImage>
        <ImageContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <Image src={courseLeaderImage.url} alt='' layout='fill' />
        </ImageContainer>
        <NameContainer>
          <Title>Kurs ledare</Title>
          <Name>{name}</Name>
          <Name>{profession}</Name>
        </NameContainer>
      </NameAndImage>
      <About dangerouslySetInnerHTML={{ __html: courseLeaderAbout.html }} />
    </CourseLeaderSection>
  )
}

export default CourseLeader
