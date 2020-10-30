import React from 'react'
import { useMutation, gql } from '@apollo/client'
import PropTypes from 'prop-types'

import { ButtonCustom, Wrapper } from './Example1.style'
import { useHistory } from 'react-router-dom'

const Example = (props) => {
  const { name, age } = props
  const history = useHistory()

  const GET_PROFILE = gql`
    mutation {
      login(loginInput: { username: "admin", password: "admin" }) {
        username
      }
    }
  `
  const [login] = useMutation(GET_PROFILE, {
    fetchPolicy: 'no-cache'
  })

  const loginHandler = () => {
    login({
      variables: {
        loginInput: {
          username: 'admin',
          password: 'admin'
        }
      }
    })
      .then(
        ({
          data: {
            login: { username }
          }
        }) => {
          alert(`Hello ${username}`)
        }
      )
      .catch((err) => {
        alert(err.toString())
      })
  }

  return (
    <Wrapper>
      {`${name} - ${age}`}
      <ButtonCustom variant={'primary'} onClick={loginHandler}>
        Login
      </ButtonCustom>
      <ButtonCustom
        variant={'secondary'}
        onClick={() => history.push('/login')}
      >
        Logout
      </ButtonCustom>
    </Wrapper>
  )
}

Example.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  history: PropTypes.func
}

const areEqual = (preProps, nextProps) => {
  return preProps.name === nextProps.name && preProps.age === nextProps.age
}

export default React.memo(Example, areEqual)
