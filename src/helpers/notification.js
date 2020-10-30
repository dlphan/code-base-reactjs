import { notification } from 'antd'

export const Notification = (params) => {
  notification.open({
    ...params
  })
}
