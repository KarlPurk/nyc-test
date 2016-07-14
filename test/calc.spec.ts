declare var require, describe, it;

const assert = require('assert');
const calc = require('./../src/calc');

describe('calc', function() {
    it('must add two numbers', function() {
        assert.equal(3, calc.add(1, 2));
    });
})
