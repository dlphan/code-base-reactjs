import Button from 'antd/lib/button/button'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { buttonStyle } from '../../theme/customVariant'

const Wrapper = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${themeGet('colors.primary')};
  display: inline-flex;
  flex-direction: column;
  //width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const ButtonCustom = styled(Button)(
  {
    appearance: 'none',
    fontFamily: 'inherit'
  },
  buttonStyle,
  {
    marginBottom: '10px'
  }
)

export { Wrapper, ButtonCustom }
