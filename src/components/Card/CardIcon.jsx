import { styled } from '@linaria/react'
import { colors } from '../../global.styles'
import { HiOutlineBookmark } from 'react-icons/hi'

const CardIconInner = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1em;
  padding: 0.5em;
  border-radius: 0.375em;
  color: ${colors.white};
  background-color: ${colors.blue[600]};
  box-shadow:
    0px 4px 6px -2px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export default function CardIcon({ icon, children, ...rest }) {
  return <CardIconInner>{icon || <HiOutlineBookmark />}</CardIconInner>
}
