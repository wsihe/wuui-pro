import { getParams } from '@/utils'
// mock productListData
let productListData = []
for (let i = 0; i < 46; i += 1) {
  productListData.push({
    key: i,
    avatar: '',
    name: `农家蜂蜜 ${i}`,
    price: Math.floor(Math.random() * 10) + 100,
    stock: Math.floor(Math.random() * 10) + 10,
    group: Math.floor(Math.random() * 10) % 4,
    sales: Math.floor(Math.random() * 10) + 10,
    updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`)
  })
}
function getProductList (request) {
  const params = getParams(request.url)

  let dataSource = productListData

  if (params.sorter) {
    const s = params.sorter.split('_')
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descending') {
        return next[s[0]] - prev[s[0]]
      }
      return prev[s[0]] - next[s[0]]
    })
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1)
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

export default getProductList
