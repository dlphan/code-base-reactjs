/* eslint-disable no-undef */
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'

import { LOGIN_PAGE } from '../../constants/navigation'
import { Container } from '../../theme/commonStyle'
import {
  HeaderWrapper,
  LeftWrapper,
  Navigation,
  RightWrapper
} from './Layout.style'

const Header = (props) => {
  const { pathname } = props
  const dropdown = useRef(null)

  return (
    <HeaderWrapper style={{ display: pathname === LOGIN_PAGE && 'none' }}>
      <Container>
        <Navigation ref={dropdown}>
          <LeftWrapper></LeftWrapper>
          <RightWrapper></RightWrapper>
        </Navigation>
      </Container>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  pathname: PropTypes.string
}

export default memo(Header)
