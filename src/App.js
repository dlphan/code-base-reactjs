/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import { AuthContext } from './context/auth/auth.context'
import { AuthProvider } from './context/auth/auth.provider'
import { privateRoutes, publicRoutes } from './constants/router'
import { HOME_PAGE, LOGIN_PAGE } from './constants/navigation'
import { ADMIN } from './constants/permission'
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary'

const RouteRender = ({ path, component, exact }) => (
  <Route
    key={component}
    exact={exact}
    path={path}
    component={lazy(() => import(`./pages/${component}`))}
  />
)

const PrivateRoute = (route) => {
  const location = useLocation()
  const { permission } = route
  const {
    authState: { isAuthenticated, role }
  } = useContext(AuthContext)
  if (!isAuthenticated)
    return <Redirect to={{ pathname: LOGIN_PAGE, state: { from: location } }} />

  // HACK: Need to refactor
  return role === permission || role === ADMIN ? (
    <RouteRender key={route.component} {...route} />
  ) : (
    <Redirect to={HOME_PAGE} />
  )
}

const PrivateRoutes = privateRoutes.map((props, idx) => (
  <PrivateRoute key={idx} {...props} />
))

const PublicRoutes = publicRoutes.map((route) => (
  <RouteRender key={route.component} {...route} />
))

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <Layout>
            <Switch>
              {PublicRoutes}
              {PrivateRoutes}
              <Redirect to={HOME_PAGE} />
            </Switch>
          </Layout>
        </ErrorBoundary>
      </Suspense>
    </AuthProvider>
  )
}

export default App
