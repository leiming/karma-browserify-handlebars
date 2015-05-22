"use strict";

var fs = require('fs')

var hello = require('../src/hello')

describe('Jasmine', function () {

  it('is works', function () {
    expect(true).toBe(true)
  })

})


describe('Handlebars', function () {

  it('is works', function () {
    expect(typeof hello).toBe('string')
  })

  var expected = fs.readFileSync(__dirname + '/hello.txt', 'utf8')

  it('can templatable', function () {
    expect(expected).toEqual(hello)
  })

})
