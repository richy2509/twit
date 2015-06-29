var assert = require('assert')
var helpers = require('../lib/helpers')

describe('makeQueryString', function () {
    it('correctly encodes strings in objects', function () {
        assert.equal(helpers.makeQueryString({a: 'Ladies + Gentlemen'}), 'a=Ladies%20%2B%20Gentlemen');
        assert.equal(helpers.makeQueryString({a: 'An encoded string!'}), 'a=An%20encoded%20string%21');
        assert.equal(helpers.makeQueryString({a: 'Dogs, Cats & Mice'}), 'a=Dogs%2C%20Cats%20%26%20Mice')
        assert.equal(helpers.makeQueryString({a: '☃'}), 'a=%E2%98%83')
    })
})