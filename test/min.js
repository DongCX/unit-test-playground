const should = require('should')
const min = require('../libs/min')

describe('#min', () => {
  // 測試有沒有取得正確的最小值
  it('should return the minimum in array', done => {
    let minimum = min([1, 10, 100, 1000]);
    minimum.should.equal(1)
    done()
  })
  // 測試有沒有回傳 undefined
  it('should return undefined when array is empty', done => {
    let minimum_1 = min([]);
    (minimum_1 === undefined).should.be.true
    done()
  })
})