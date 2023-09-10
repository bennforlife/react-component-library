import { useContext } from 'react'
import { styled } from '@linaria/react'
import { BannerContext } from './Banner'
import { colors } from '../../global.styles'

export default function BannerHeader({ children, ...rest }) {
  const { color } = useContext(BannerContext)

  return (
    <BannerHeaderText color={color} {...rest}>
      {children}
    </BannerHeaderText>
  )
}

const BannerHeaderText = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ color }) => colors[color][800]};
  margin-bottom: 0.5em;
`
