import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'components/Grid'
import styled, { ThemeProvider, theme } from 'style'
import { isUnsupported } from 'util/dom'

const Wrapper = styled(Flex).attrs({ flexDirection: 'column' })`
  height: 100%;
`
const Content = styled.div`
  flex: 1 1 auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {isUnsupported ? (
        <div></div>
      ) : (
        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
      )}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: '',
}

export default Layout
