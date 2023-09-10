import { useContext } from 'react'
import { styled } from '@linaria/react'
import { BannerContext } from './Banner'
import { colors } from '../../global.styles'

export default function BannerBody({ children, ...rest }) {
  const { color } = useContext(BannerContext)

  return (
    <BannerBodyText color={color} {...rest}>
      {children}
    </BannerBodyText>
  )
}

const BannerBodyText = styled.p`
  font-size: 0.875rem;
  color: ${({ color }) => colors[color][700]};
`
