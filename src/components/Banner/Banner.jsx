import { createContext } from 'react'
import { styled } from '@linaria/react'
import {
  BsCheckCircleFill,
  BsExclamationTriangleFill,
  BsXCircleFill,
  BsFillInfoCircleFill,
} from 'react-icons/bs'
import { colors } from '../../global.styles'
import { css } from '@linaria/core'

const opts = {
  success: {
    color: 'emerald',
    icon: <BsCheckCircleFill />,
  },
  error: {
    color: 'red',
    icon: <BsXCircleFill />,
  },
  warning: {
    color: 'yellow',
    icon: <BsExclamationTriangleFill />,
  },
  neutral: {
    color: 'blue',
    icon: <BsFillInfoCircleFill />,
  },
}

export const BannerContext = createContext()

const BannerContainer = styled.div`
  display: flex;
  gap: 0.75em;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  line-height: 1.25;
  color: ${({ color }) => colors[color][400]};
  background-color: ${({ color }) => colors[color][50]};
`

export default function Banner({ status = 'neutral', children, ...rest }) {
  const color = opts[status].color

  return (
    <BannerContext.Provider value={{ color }}>
      <BannerContainer color={color} {...rest}>
        <div>{opts[status].icon}</div>
        <div>{children}</div>
      </BannerContainer>
    </BannerContext.Provider>
  )
}
