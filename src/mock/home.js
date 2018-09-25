import moment from 'moment'

const visitData = []
const beginDay = new Date().getTime()

const fakeY = [1, 9, 4, 2, 4, 1, 5, 6, 5, 2, 6, 3, 1, 5, 2, 1, 8]
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i]
  })
}

const visitData2 = []
const fakeY2 = [1, 3, 4, 9, 3, 1, 2, 7, 5, 4, 5, 6, 5, 2, 6, 3]
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 10) + 10,
    y2: Math.floor(Math.random() * 10) + 10
  })
}

const salesData = []
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 100) + 10
  })
}

const rankListData = []
for (let i = 0; i < 7; i += 1) {
  rankListData.push({
    name: `农家蜂蜜 ${i + 1} `,
    total: Math.floor(Math.random() * 1000) + 500
  })
}

export default {
  getData () {
    return {
      visitData,
      visitData2,
      salesData,
      rankListData
    }
  }
}
