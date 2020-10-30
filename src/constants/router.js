import {
  DETAIL_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  MANAGE_PAGE,
  PROFILE_PAGE,
  SETTING_PAGE
} from './navigation'
import { ADMIN, GUEST, CUSTOMER } from './permission'

export const publicRoutes = [
  {
    path: LOGIN_PAGE,
    component: 'LoginPage',
    exact: false,
    permission: GUEST
  }
]

export const privateRoutes = [
  {
    path: HOME_PAGE,
    component: 'HomePage',
    exact: true,
    permission: CUSTOMER
  },
  {
    path: DETAIL_PAGE,
    component: 'DetailPage',
    exact: true,
    permission: CUSTOMER
  },
  {
    path: PROFILE_PAGE,
    component: 'ProfilePage',
    exact: true,
    permission: CUSTOMER
  },
  {
    path: MANAGE_PAGE,
    component: 'ManagePage',
    exact: true,
    permission: ADMIN
  },
  {
    path: SETTING_PAGE,
    component: 'SettingPage',
    exact: true,
    permission: ADMIN
  }
]
