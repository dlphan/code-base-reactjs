import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css'
import { themeGet } from '@styled-system/theme-get'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.ant-tabs {
  transition-duration: 0s !important;
}

.ant-tabs-tab-active {
  background: ${themeGet('colors.primary')} !important;
  color:${themeGet('colors.white')} !important;
}

.ant-tabs-tab {
  width: 100px;
}

.ant-tabs-tab-active .ant-tabs-tab-btn,
.ant-tabs-tab-btn:focus {
  color: ${themeGet('colors.white')} !important;
}

.ant-tabs-tab-btn {
  font-size: 1rem;
  font-weight: 500;
  margin: auto;
}

.ant-tabs-tab:hover {
  color: ${themeGet('colors.primary')} !important;
}
`

export default GlobalStyle
