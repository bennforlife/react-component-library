import { createElement, Fragment } from 'react'
import { createOptionsObject } from '../../utilites'
import { opts } from '../../opts'
import { fontSizes } from '../../global.styles'
import { styled } from '@linaria/react'

const htmlTags = createOptionsObject(opts.text)

/**
 * Usages: <Text as="p" fontSize="md">Badge</Text>
 * as : <html element> | Fragment(default)
 * fontsize : sm - 9xl | baseline(defaul)
 */

function InnerText({ as, children }) {
  return createElement(htmlTags[as] || Fragment, null, children)
}

export const Text = styled(InnerText)`
  font-size: ${({ fontSize }) => fontSizes[fontSize] || 'inherit'};
`
