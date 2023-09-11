import { styled } from '@linaria/react'
import { colors } from '../../global.styles'

const CardBodyInner = styled.p`
  line-height: 1.5;
  color: ${colors.gray[500]};
`

export default function CardBody({ children, ...rest }) {
  return <CardBodyInner>{children}</CardBodyInner>
}
