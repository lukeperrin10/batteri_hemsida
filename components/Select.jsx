import React from 'react'
import { styled } from '@stitches/react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: 4,
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  paddingLeft: 10,
  width: 'calc(100% - 10px)',
  backgroundColor: 'white',
  color: '$black',
  boxShadow: `0 0 0 1px grey`,
  '&:hover': { boxShadow: '0 0 0 2px grey' },
  '&:focus': { boxShadow: '0 0 0 2px grey' },
})

const StyledContent = styled(SelectPrimitive.Content, {
  color: '$black',
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  width: '100%',
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$black',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  // width: '100px',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '#000',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$greyBg',
    color: '#fff',
  },
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$greyBg',
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '#000',
  cursor: 'default',
}

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

// Exports
export const SelectRoot = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon
export const SelectContent = StyledContent
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton

// Your app...
const Box = styled('div', {})

export const Select = () => (
  <Box>
    <SelectRoot defaultValue='blueberry'>
      <SelectTrigger aria-label='Datum för tillfälle'>
        <SelectValue />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Tillfälle</SelectLabel>
            <SelectItem value='apple'>
              <SelectItemText>Apple</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value='banana'>
              <SelectItemText>Banana</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value='blueberry'>
              <SelectItemText>Blueberry</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value='grapes'>
              <SelectItemText>Grapes</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value='pineapple'>
              <SelectItemText>Pineapple</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectRoot>
  </Box>
)

export default Select
