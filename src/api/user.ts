import axios from '@/libs/api.request'
import qs from 'qs'
import store from '@/store'
export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password: password,
    type: 1
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
      return qs.stringify(data)
    }]
  })
}

export const getUserInfo = () => {
  return axios.request({
    url: '/privileges',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'authorization': store.state.user === undefined ? '' : store.state.user.token
    },
    transformRequest: [function (data) {
      return qs.stringify(data)
    }]

  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
