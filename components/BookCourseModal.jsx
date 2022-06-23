
import React from 'react';
import { styled, overlayShow, contentShow} from '../stitches.config'
import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '#00000099',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$white',
  borderRadius: 3,
  inset: 1,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay  />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  paddingY: 26,
 fontWeight: '$semi',
 backgroundColor: '$blackBg',
 borderRadius: '2px 2px 0px 0px',
 border: 'none',
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogClose = DialogPrimitive.Close;

// Your app...
const ButtonContainer = styled('div', { 
  display: 'flex',
  justifyContent: 'center',
  marginTop: 25,
});
const Box = styled('div', {});

const Button = styled('button', {
  display: 'flex',
  width: 'fit-content',
  backgroundColor: '$blueDark',
  pillShape: true,
  fontSize: '$4',
  fontWeight: '$semi',
  textDecoration: 'none',
  border: 'none',
  transition: 'transform 200ms',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },

  variants: {
    variant: {
      mobile: {
        padding: '15px 32px',
      },

      desktop: {
        padding: '16px 36px',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$blue',
          transform: 'scale(1.02)',
        },
      },
    },
  },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$greyBg' },
  '&:focus': { boxShadow: `0 0 0 2px #ff0000aa` },
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: '$blue',
  width: 90,
  textAlign: 'right',
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: '$blue',
  boxShadow: `0 0 0 1px $grey`,
  height: 35,

  '&:focus': { boxShadow: '0 0 0 2px $grey' },
});

const BookCourseModal = ({btnText, courseName}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>{btnText} </Button>
    </DialogTrigger>
    <DialogContent >
      <DialogTitle>Boka kurs <br></br> {courseName}</DialogTitle>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </Fieldset>
      <ButtonContainer>
        <DialogClose asChild>
          <Button variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>Boka</Button>
        </DialogClose>
      </ButtonContainer>
      <DialogClose asChild>
        <IconButton aria-label="Close">
          <Cross2Icon />
        </IconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default BookCourseModal;
