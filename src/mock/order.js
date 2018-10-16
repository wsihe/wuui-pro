import { getParams, uuid } from '@/utils'
// mock orderListData
let orderListData = []

function getList () {
  let List = []
  const len = Math.floor((Math.random() * 10) % 2) + 1
  for (let i = 0; i < len; i += 1) {
    List.push({
      name: `农家蜂蜜 ${i}`,
      price: Math.floor(Math.random() * 10) + 100,
      num: Math.floor(Math.random() * 10) + 1
    })
  }
  return List
}
for (let i = 0; i < 6; i += 1) {
  orderListData.push({
    key: uuid(8, true),
    customer: `客户 ${i}`,
    status: Math.floor(Math.random() * 10) % 5,
    price: Math.floor(Math.random() * 10) + 200,
    updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    productList: getList(),
    total: getList().length
  })
}
function getOrderList (request) {
  const params = getParams(request.url)

  let dataSource = orderListData

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1)
  }

  if (params.status) {
    const status = params.status
    let filterDataSource = dataSource.filter(data => parseInt(data.status, 10) === parseInt(status, 10))
    dataSource = filterDataSource
  }

  let pageSize = 10
  if (params.pageSize) {
    pageSize = params.pageSize * 1
  }

  return {
    data: dataSource,
    page: parseInt(params.page, 10) || 1,
    pageSize: pageSize,
    total: dataSource.length
  }
}

export default getOrderList
