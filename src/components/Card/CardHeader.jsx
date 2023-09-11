import { styled } from '@linaria/react'

const CardHeaderInner = styled.h1`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.75;
`

export default function CardHeader({ children, ...rest }) {
  return <CardHeaderInner {...rest}>{children}</CardHeaderInner>
}
