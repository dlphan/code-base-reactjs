import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const MainContent = styled.main`
  width: 100%;
  min-height: ${themeGet('pageHeight')};
`
const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0 0 1px 1px #ddd;
  height: 74px;
  z-index: 10;
  background: ${themeGet('colors.white')};
`

const HeaderContainer = styled.div`
  max-width: ${themeGet('maxWidths.4')}px;
  height: 100%;
  margin: auto;
`

const Navigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${themeGet('spaces.2')} 0;
  display: flex;
  justify-content: space-between;
`

const LogoWrapper = styled.h1`
  margin-bottom: 0;
  font-size: ${themeGet('fontSizes.4')};
  font-weight: 700;
  cursor: pointer;

  img {
    display: inline-block;
    max-width: 50px;
    margin-right: ${themeGet('spaces.1')};
  }
`

const RightWrapper = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
`

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
`

const UserInfo = styled.div`
  margin-right: ${themeGet('spaces.2')};
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

const FooterWrapper = styled.div`
  background-color: ${themeGet('colors.dark')};
  color: ${themeGet('colors.secondary')};
  height: 200px;

  .text-1 {
    margin-bottom: 0.5rem;
  }
`

const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text-1,
  .text-2 {
    font-size: ${themeGet('fontSizes.1')};
  }

  .space {
    margin: 1rem;
  }
`

const CopyRight = styled.p`
  font-size: ${themeGet('fontSizes.2')};
  margin-top: ${themeGet('spaces.2')};
`

export {
  HeaderWrapper,
  Navigation,
  LogoWrapper,
  HeaderContainer,
  RightWrapper,
  LeftWrapper,
  UserInfo,
  MainContent,
  FooterWrapper,
  FooterContent,
  CopyRight
}
