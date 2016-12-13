// recurse-test
const expect = require('chai').expect
const sum = require('../recurse').sum




describe('sum', () => {
  it('returns 0 for an empty array', () => {
    expect(sum([])).to.equal(0)
  })
  it('returns 456 for [2,3,456,-2,-3]', () => {
    const a = [2,3,456,-2,-3]
    expect(sum(a)).to.equal(456)

  })
  it('returns 45 for [2,3,45,-2,-3]', () => {
    const a = [2,3,45,-2,-3]
    expect(sum(a)).to.equal(45)

  })
})
