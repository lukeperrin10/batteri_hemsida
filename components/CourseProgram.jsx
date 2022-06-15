import React from 'react'
import Image from 'next/image'
import { styled } from '../stitches.config'
import Button from './/Button'

const Kursprogram = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '$lightGreyBg',
  maxWidth: 727,
  height: 'auto',
  paddingY: 46,
  paddingX: 96,
  
})

const Title = styled('h3', {
  color: '$black',
  marginBottom: 48,
  fontWeight: '$semi',
  fontSize: '$7',
})
const Program = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 35,
  rowGap: 20,
})
const ProgramItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 15,
  width: 250,
})
const CheckImageContainer = styled('div', {
  width: 24,
  height: 18,
})
const ProgramItemText = styled('p', {
  color: '$black',
  width: 210,
})
const DashedDivider = styled('div', {
  width: '120%',
  height: 1,
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='5' stroke-dasharray='1%2c 16' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e")`,
  marginY: 50,
  marginLeft: '-10%',
})
const Price = styled('div', {})

const CourseProgram = ({ data }) => {
  const { kursprogram } = data
  const items = kursprogram.map((item, index) => {
    return (
      <ProgramItem key={index}>
        <CheckImageContainer>
        <Image src='/check.svg' alt='' height={18} width={24} />
        </CheckImageContainer>
        <ProgramItemText>{item}</ProgramItemText>
      </ProgramItem>
    )
  })
  return (
    <Kursprogram>
      <Title>Kursprogram</Title>
      <Program>{items}</Program>
      <DashedDivider />
      <Price></Price>
      <Button text='Boka Kurs' linkTo='/#' />
    </Kursprogram>
  )
}

export default CourseProgram
