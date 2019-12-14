"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-unused-expressions */

/* eslint-disable */

/* eslint-enable */
var rp = require('request-promise');

var chai = require('chai');

var expect = chai.expect;

require('dotenv').config();

var testURL = "http://".concat(process.env.HOST, ":").concat(process.env.PORT);
var itemName = 'test_' + Math.floor(new Date() / 1000).toString();
var userId = 'none';
describe('TESTING MODULES', function () {
  describe('1. Base Route', function () {
    it('Expects a HTML page in return', function (done) {
      var options = {
        method: 'GET',
        url: testURL,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.a('string');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
  });
  describe('2. Insertion route', function () {
    it('2.1. Should add new data to the database', function (done) {
      var options = {
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
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('Data inserted successfully!');
        userId = response.body.result._id;
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('2.2. Should throw unique name error when name already exists', function (done) {
      var options = {
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
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('Name should be unique!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
  });
  describe('3. Search routes', function () {
    it('3.1.1 Should return array when searched by brand name', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/search/brand/' + 'TestBrand',
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.result).to.be.an('array');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('3.1.2 Should return no results found (brand route)', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/search/brand/' + Math.floor(new Date() / 1000).toString(),
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('No results found!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('3.2.1 Should return array when searched by category', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/search/category/' + 'test_category',
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.result).to.be.an('array');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('3.2.2 Should return no results found (category route)', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/search/category/' + Math.floor(new Date() / 1000).toString(),
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('No results found!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('3.3.1 Should return object when searched by name', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/search/name/' + itemName,
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.result).to.be.an('array');
        expect(response.body.result.length).to.equal(1);
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('3.3.2 Should return no results found (name route)', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/search/name/' + Math.floor(new Date() / 1000).toString(),
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('No results found!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
  });
  describe('4. Updation route', function () {
    it('4.1.1. Should update pre-existing data', function (done) {
      var options = {
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
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('Updated successfully!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('4.1.2. Should return no matching entry found when appropriate (/update/byId route)', function (done) {
      var options = {
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
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.message).to.equal('No matching entry was found!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('4.2.1. Should update pre-existing data', function (done) {
      var options = {
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
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body.message).to.equal('Updated successfully!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('4.2.2. Should return no matching entry found when appropriate (/update/byName route)', function (done) {
      var options = {
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
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.message).to.equal('No matching entry was found!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
  });
  describe('5. Deletion routes', function () {
    it('5.1.1 Should delete successfully when found', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/delete/' + itemName + '_updated_yet_again',
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.message).to.equal('Deleted successfully!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
    it('5.1.2 Should return no matching entry found when appropriate', function (done) {
      var options = {
        method: 'GET',
        url: testURL + '/delete/' + itemName + '_updated_yet_again',
        json: true,
        resolveWithFullResponse: true
      };
      rp(options).then(function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.message).to.equal('No matching entry was found!');
        done();
      })["catch"](function (err) {
        done(err);
      });
    });
  });
});