"use strict";

var $ = require('jquery')
var path = '';
if (typeof window.__karma__ !== 'undefined') {
  path += 'base/test/'
}

describe('jQuery', function () {

  it('can load HTML', function () {
    jasmine.getFixtures().fixturesPath = path + 'fixtures'
    loadFixtures('test_fixtures.html')

    expect($('#bar')).toHaveText('text: bar')
  })

  it('can load JSON', function () {
    jasmine.getJSONFixtures().fixturesPath = path + 'fixtures'
    var data = getJSONFixture('test_fixtures.json')

    expect(data.array1).toEqual([1, 2, 3])
  })

})