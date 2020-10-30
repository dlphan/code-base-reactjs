import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import {
  DownloadOutlined,
  HeartOutlined,
  MenuOutlined,
  EyeOutlined
} from '@ant-design/icons'
import { Pagination } from 'antd'

const HeartIcon = styled(HeartOutlined)`
  color: #777;
  font-size: 1.3rem;
  margin: 0 2rem;
  cursor: pointer;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

const MenuIcon = styled(MenuOutlined)`
  color: #777;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

const DownloadIcon = styled(DownloadOutlined)`
  color: #777;
  font-size: 1.3rem;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

const EyeIcon = styled(EyeOutlined)`
  color: #777;
  font-size: 1.3rem;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

const Container = styled.div`
  max-width: ${themeGet('maxWidths.4')}px;
  height: 100%;
  margin: auto;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`

const PageWrapper = styled.div`
  width: 100%;
  min-height: ${themeGet('pageHeight')};
  padding-top: 74px;
`

const PageContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
`

const NewLabel = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${themeGet('colors.highlight')};
  font-size: ${themeGet('fontSizes.5')};
  color: ${themeGet('colors.white')};
  line-height: 2.3rem;
  width: 70px;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${themeGet('fontSizes.3')};
    line-height: 2rem;
  }
`

const PaginationCustom = styled(Pagination)`
  .ant-pagination-item-active {
    border-color: ${themeGet('colors.primary')};

    a {
      color: ${themeGet('colors.primary')};
    }
  }

  .ant-pagination-item:hover,
  .ant-pagination-item-link:hover {
    border-color: ${themeGet('colors.primary')};

    a,
    svg {
      color: ${themeGet('colors.primary')};
    }
  }
`

export {
  HeartIcon,
  MenuIcon,
  DownloadIcon,
  Container,
  PageWrapper,
  NewLabel,
  PaginationCustom,
  PageContainer,
  EyeIcon
}
