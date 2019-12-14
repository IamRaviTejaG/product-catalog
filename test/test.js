/* eslint-disable no-unused-expressions */

/* eslint-disable */
import server from '../index'
/* eslint-enable */

const rp = require('request-promise')
const chai = require('chai')
const expect = chai.expect
require('dotenv').config()

const testURL = `http://${process.env.HOST}:${process.env.PORT}`
const itemName = 'test_' + (Math.floor(new Date() / 1000)).toString()
let userId = 'none'

describe('TESTING MODULES', () => {
  describe('1. Base Route', () => {
    it('Expects a HTML page in return', done => {
      const options = {
        method: 'GET',
        url: testURL,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.a('string')
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('2. Insertion route', () => {
    it('2.1. Should add new data to the database', done => {
      const options = {
        method: 'POST',
        url: testURL + '/insert',
        body: {
          name: itemName,
          category: 'test_category',
          brandname: 'TestBrand',
          images: 'https://google.com'
        },
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('Data inserted successfully!')
        userId = response.body.result._id
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('2.2. Should throw unique name error when name already exists', done => {
      const options = {
        method: 'POST',
        url: testURL + '/insert',
        body: {
          name: itemName,
          category: 'test_category',
          brandname: 'TestBrand',
          images: 'https://google.com'
        },
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('Name should be unique!')
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('3. Search routes', () => {
    it('3.1.1 Should return array when searched by brand name', done => {
      const options = {
        method: 'GET',
        url: testURL + '/search/brand/' + 'TestBrand',
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response.body.result).to.be.an('array')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('3.1.2 Should return no results found (brand route)', done => {
      const options = {
        method: 'GET',
        url: testURL + '/search/brand/' + (Math.floor(new Date() / 1000)).toString(),
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('No results found!')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('3.2.1 Should return array when searched by category', done => {
      const options = {
        method: 'GET',
        url: testURL + '/search/category/' + 'test_category',
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response.body.result).to.be.an('array')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('3.2.2 Should return no results found (category route)', done => {
      const options = {
        method: 'GET',
        url: testURL + '/search/category/' + (Math.floor(new Date() / 1000)).toString(),
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('No results found!')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('3.3.1 Should return object when searched by name', done => {
      const options = {
        method: 'GET',
        url: testURL + '/search/name/' + itemName,
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.result).to.be.an('array')
        expect(response.body.result.length).to.equal(1)
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('3.3.2 Should return no results found (name route)', done => {
      const options = {
        method: 'GET',
        url: testURL + '/search/name/' + (Math.floor(new Date() / 1000)).toString(),
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('No results found!')
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4. Updation route', () => {
    it('4.1.1. Should update pre-existing data', done => {
      const options = {
        method: 'PUT',
        url: testURL + '/update/byId/' + userId,
        body: {
          name: itemName + '_updated',
          category: 'test_category',
          brandname: 'TestBrand',
          images: 'https://google.com'
        },
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('Updated successfully!')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('4.1.2. Should return no matching entry found when appropriate (/update/byId route)', done => {
      const options = {
        method: 'PUT',
        url: testURL + '/update/byId/' + '5df3e469e10f723f5ca1cb55',
        body: {
          name: itemName + '_updated',
          category: 'test_category',
          brandname: 'TestBrand',
          images: 'https://google.com'
        },
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response.body.message).to.equal('No matching entry was found!')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('4.2.1. Should update pre-existing data', done => {
      const options = {
        method: 'PUT',
        url: testURL + '/update/byName/' + itemName + '_updated',
        body: {
          name: itemName + '_updated_yet_again',
          category: 'test_category',
          brandname: 'TestBrand',
          images: 'https://google.com'
        },
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body.message).to.equal('Updated successfully!')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('4.2.2. Should return no matching entry found when appropriate (/update/byName route)', done => {
      const options = {
        method: 'PUT',
        url: testURL + '/update/byName/' + itemName + 'jdkjfhdkjfhjd',
        body: {
          name: itemName + '_updated',
          category: 'test_category',
          brandname: 'TestBrand',
          images: 'https://google.com'
        },
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response.body.message).to.equal('No matching entry was found!')
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('5. Deletion routes', () => {
    it('5.1.1 Should delete successfully when found', done => {
      const options = {
        method: 'GET',
        url: testURL + '/delete/' + itemName + '_updated_yet_again',
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response.body.message).to.equal('Deleted successfully!')
        done()
      }).catch(err => {
        done(err)
      })
    })
    it('5.1.2 Should return no matching entry found when appropriate', done => {
      const options = {
        method: 'GET',
        url: testURL + '/delete/' + itemName + '_updated_yet_again',
        json: true,
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response.body.message).to.equal('No matching entry was found!')
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
