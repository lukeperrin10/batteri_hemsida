import Image from 'next/image'
import React from 'react'
import { styled } from '../stitches.config'

const CourseLeaderSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$greyBg',
  width: '100vw',
})

const NameAndImage = styled('div', {
  display: 'flex',

})
const ImageContainer = styled('div', {

})
const NameContainer = styled('div', {
  display: 'flex',

})
const Title = styled('p', {

})
const Name = styled('p', {

})
const About = styled('p', {

})

const CourseLeader = ({ data }) => {
  const { courseLeaderAbout, courseLeaderImage, name, profession } = data[0]
  return (
    <CourseLeaderSection>
      <NameAndImage>
        <ImageContainer>
          <Image
            src={courseLeaderImage.url}
            alt=''
            height={40}
            width={40}
          />
        </ImageContainer>
        <NameContainer>
          <Title>Kurs ledare</Title>
          <Name>{name}</Name>
          <Name>{profession}</Name>
        </NameContainer>
      </NameAndImage>
      <About  dangerouslySetInnerHTML={{ __html: courseLeaderAbout.html }}/>
    </CourseLeaderSection>
  )
}

export default CourseLeader
