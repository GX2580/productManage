import instance from './request'

// 读取产品列表
export const getProductApi = () => {
  return instance({
    url: '/products',
    method: 'get',
  })
}

// 创建产品 POST
export const createProductApi = (data) => {
  return instance({
    url: '/products',
    method: 'post',
    data,
  })
}

// 更新产品 PUT
export const updateProductApi = (id, data) => {
  return instance({
    url: `/products/${id}`,
    method: 'put',
    data,
  })
}

// 删除产品 DELETE
export const deleteProductApi = (id) => {
  return instance({
    url: `/products/${id}`,
    method: 'delete',
  })
}

// 获取单个产品信息 GET /products/:id
export const getProductByIdApi = (id) => {
  return instance({
    url: `/products/${id}`,
    method: 'get',
  })
}
