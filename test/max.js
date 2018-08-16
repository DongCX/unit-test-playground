const should = require('should')
const max = require('../libs/max')

describe('max unit testing', () => {
  it('should return the maximum in array', done => {
    let maximum = max([1, 10, 100, 1000]);
    maximum.should.equal(1000)
    done()
  })

  it('should return undefined when array is empty', done => {
    let maximum = max([]);
    (maximum === undefined).should.be.true;
    done()
  })

})