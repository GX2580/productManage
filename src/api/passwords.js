import instance from './request'

//获取密码
export const getPasswordApi = () => {
  return instance({
    url: '/passwords',
    method: 'get',
  })
}

//注册密码
export const createPasswordApi = (password) => {
  return instance({
    url: '/passwords',
    method: 'post',
    password,
  })
}

//更新密码
export const updatePasswordApi = (name, password) => {
  return instance({
    url: '/passwords',
    method: 'put',
    data,
  })
}
