import CardIcon from './CardIcon'
import { styled } from '@linaria/react'
import { colors } from '../../global.styles'

const CardInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25em;
  padding: 3.25em 1.5em 2em;
  margin-top: 1em;
  border-radius: 0.5rem;
  color: ${colors.gray[900]};
  background-color: ${colors.gray[50]};
  transition: box-shadow 500ms ease-in-out;

  &:hover {
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
  }
`

export default function Card({ icon, children, ...rest }) {
  return (
    <CardInner>
      {!icon && <CardIcon />}
      {children}
    </CardInner>
  )
}
