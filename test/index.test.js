const assert = require( 'assert' );
const addon = require( '..' ); // loads ../index.js

describe('Test Suitefor the API', () => {
    it('Test #1', () => {
        const res = addon.solve("a*a")
        assert(res == "sat")
    } );
    it('Test #2', () => {
        const res = addon.solve("a*-a")
        assert(res == "unsat")
    } );
} );