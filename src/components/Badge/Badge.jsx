import { Text } from '../Typography/Text'
import { styled } from '@linaria/react'
import { colors } from '../../global.styles'

/**
 * Usages: <Badge variant="pill" color="green" fontSize="1.25rem">Badge</Badge>
 * variant : square(default) | pill
 * color : gray(default) | any color defined in color obj in global.styles.js
 * fontSize: sm - 9xl | baseline(default)
 */

const StyledText = styled(Text)`
  display: inline-block;
  font-weight: 500;
  padding: 0.375em 0.75em;
  margin: 1em 1em 0;
  border-radius: ${({ variant }) => (variant === 'pill' ? '1em' : '.25em')};
  color: ${({ color = 'gray' }) => colors[color][800]};
  background-color: ${({ color = 'gray' }) => colors[color][100]};
`

export default function Badge({ children, ...rest }) {
  return (
    <StyledText as="div" {...rest}>
      {children}
    </StyledText>
  )
}
