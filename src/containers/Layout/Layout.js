import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import { MainContent } from './Layout.style'
import { Container, PageWrapper } from '../../theme/commonStyle'
import { LOGIN_PAGE } from '../../constants/navigation'
import { useLocation } from 'react-router-dom'

const Layout = (props) => {
  const location = useLocation()

  return (
    <Fragment>
      <Header pathname={location.pathname} />
      <MainContent>
        <Container>
          <PageWrapper
            style={{ paddingTop: location.pathname === LOGIN_PAGE && 0 }}
          >
            {props.children}
          </PageWrapper>
        </Container>
      </MainContent>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
