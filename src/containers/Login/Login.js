import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'

import { WrapperLogin } from './Login.style'
import { LOGIN } from '../../graphql/mutation/login.mutation'
import { AuthContext } from '../../context/auth/auth.context'
import { Notification } from '../../helpers/notification'
import * as Action from '../../constants/action'
import { convertRole } from '../../helpers/convertRole'
import { ERROR, SUCCESS } from '../../constants/notificationType'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

function Login() {
  const { authDispatch } = useContext(AuthContext)
  const {
    authState: { isAuthenticated }
  } = useContext(AuthContext)
  const [error, setError] = useState(null)

  const [login] = useMutation(LOGIN, { fetchPolicy: 'no-cache' })

  const history = useHistory()
  const location = useLocation()

  if (isAuthenticated) return <Redirect to={{ pathname: '/' }} />
  const { from } = location.state || { from: { pathname: '/' } }

  const onFinish = (values) => {
    const { username = '', password = '', remember } = values
    login({
      variables: {
        loginInput: {
          username,
          password
        }
      }
    })
      .then(
        ({
          data: {
            login: { access_token, userType }
          }
        }) => {
          if (typeof window !== 'undefined') {
            if (remember) {
              localStorage.setItem('access_token', access_token)
              localStorage.setItem('role', convertRole[userType])
            } else {
              sessionStorage.setItem('access_token', access_token)
              sessionStorage.setItem('role', convertRole[userType])
            }
          }

          authDispatch({
            type: Action.SIGN_IN_SUCCESS,
            role: convertRole[userType]
          })
          history.replace(from)

          Notification({
            type: SUCCESS,
            message: 'Login success!',
            placement: 'bottomRight'
          })
        }
      )
      .catch((err) => {
        setError(err.toString())
        Notification({
          type: ERROR,
          message: err.toString(),
          placement: 'bottomRight'
        })
      })
  }

  console.log(error)

  return (
    <WrapperLogin>
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </WrapperLogin>
  )
}

export default Login
