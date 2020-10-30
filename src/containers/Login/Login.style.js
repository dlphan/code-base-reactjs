import { Input } from 'antd'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { inputStyle, buttonStyle } from '../../theme/customVariant'
import { Button, Checkbox } from 'antd'

const WrapperLogin = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputCustom = styled(Input)(
  {
    appearance: 'none'
  },
  inputStyle,
  {
    borderRadius: '5px',
    width: '380px',
    height: '40px'
  }
)

const InputPasswordCustom = styled(Input.Password)(
  {
    appearance: 'none'
  },
  inputStyle,
  {
    marginTop: '-4px',
    borderRadius: '5px',
    marginBottom: '5px',
    width: '380px',
    height: '40px'
  }
)

const CheckboxCustom = styled(Checkbox)`
  width: 380px;
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${themeGet('colors.primary')};
    border-color: ${themeGet('colors.primary')};
    width: 20px;
    height: 20px;
  }
  & .ant-checkbox-inner {
    border-color: ${themeGet('colors.primary')};
    width: 20px;
    height: 20px;
  }
  .ant-checkbox-inner::after {
    width: 9px;
    height: 13px;
  }
  // align-self: flex-start;
`
const HeadingCustom = styled.h1`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
`
const H4Custom = styled.h4`
  margin-bottom: 35px;
  font-size: 17px;
`
const ButtonCustom = styled(Button)(
  {
    fontFamily: 'inherit',
    borderRadius: '35px',
    marginBottom: '10px',
    width: '380px',
    height: '40px'
  },
  buttonStyle
)

const LinkCustom = styled.a`
  text-decoration-line: underline;
`

const ErrorText = styled.p`
  color: red;
  margin: 5px;
  margin-top: -15px;
`

export {
  InputCustom,
  WrapperLogin,
  CheckboxCustom,
  HeadingCustom,
  ButtonCustom,
  H4Custom,
  LinkCustom,
  InputPasswordCustom,
  ErrorText
}
