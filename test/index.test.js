const assert = require( 'assert' );
const addon = require( '..' ); // loads ../index.js

// Test the SAT Solver API suite of boolean formulas
describe('Test Suitefor the API', () => {
    it('Test #1', () => {
        const res = addon.solve("a123")
        assert(res == "sat")
    });
    it('Test #2', () => {
        const res = addon.solve("")
        assert(res == "Error: invalid input")
    });
    it('Test #3', () => {
        const res = addon.solve("a+c")
        assert(res == "sat")
    });
    it('Test #4', () => {
        const res = addon.solve("a*---a")
        assert(res == "unsat")
    });
    it('Test #5', () => {
        const res = addon.solve("a+b;a:0,b:1")
        assert(res == "Error: invalid character/symbol")
    });
    it('Test #6', () => {
        const res = addon.solve(" ( (-a)+(a*b)) * a * (c + -b) *-c")
        assert(res == "unsat")
    });
    it('Test #7', () => {
        const res = addon.solve("(a+b+c)*(a+b+-c)*(-b+a +c)*(-a*-c)")
        assert(res == "unsat")
    });
    it('Test #8', () => {
        const res = addon.solve("(a+b+c)*(a+b+-c)*(-b+a +c)*(a+-b+-c)*(-a+b+c)*(-a+b+-c)*(-a+-b+c)*(-a+-c+-c)")
        assert(res == "unsat")
    });
    it('Test #9', () => {
        const res = addon.solve("(a+b+c)*(a+b+-c)*(-b+a +c)*(a+-b+-c)*(-a+b+c)*(-a+b+-c)*(-a+-b+c)*(-a+-c+-b)")
        assert(res == "unsat")
    });
    it('Test #10', () => {
        const res = addon.solve("(a+b+c)*(a+b+-c)*(-b+a +c)*(a+-b+-c)*(-a+b+c)*(-a+b+-c)*(-a+-b+c)")
        assert(res == "sat")
    });
    it('Test #11', () => {
        const res = addon.solve("VAr1 * -VAr1")
        assert(res == "unsat")
    });
    it('Test #12', () => {
        const res = addon.solve("VAr1 + -VAr1")
        assert(res == "sat")
    });
    it('Test #13', () => {
        const res = addon.solve(" -((A*  B)+ C)")
        assert(res == "sat")
    });
    it('Test #14', () => {
        const res = addon.solve(" (A+-B+C) * (B+C) * (-A+ C) * (B +-C) * -               (C)")
        assert(res == "unsat")
    });
    it('Test #15', () => {
        const res = addon.solve("(a1)*(-a1+a2) * (-a2+a3) *(-a3)")
        assert(res == "unsat")
    });
    it('Test #16', () => {
        const res = addon.solve("  (-B*-C * D) + (-B * -  D) + (C *D) + (B)  ")
        assert(res == "sat")
    });
    it('Test #17', () => {
        const res = addon.solve("(B+C+-D)  *(D+B)*(-C+-D)* (-B)")
        assert(res == "unsat")
    });
    it('Test #18', () => {
        const res = addon.solve("a*---a !")
        assert(res == "Error: an invalid character/symbol was found in the input")
    });
    it('Test #19', () => {
        const res = addon.solve("(+)")
        assert(res == "Error: invalid input")
    });
    it('Test #20', () => {
        const res = addon.solve("a*(b + c")
        assert(res == "Error: missing a closing ')'")
    });
    it('Test #21', () => {
        const res = addon.solve("a+b)")
        assert(res == "Error: invalid input")
    });
    it('Test #22', () => {
        const res = addon.solve("k(a+b)")
        assert(res == "Error: invalid input")
    });
    it('Test #23', () => {
        const res = addon.solve("a++")
        assert(res == "Error: invalid input")
    });
    it('Test #24', () => {
        const res = addon.solve("(-a+b+c) * (-b) * (-c)")
        assert(res == "sat")
    });
    it('Test #25', () => {
        const res = addon.solve("(-a+b+c) * (-b) * (-c) * a ")
        assert(res == "unsat")
    });
    it('Test #26', () => {
        const res = addon.solve("-(-P+Q)*P*Q")
        assert(res == "unsat")
    });
    it('Test #27', () => {
        const res = addon.solve("a*--a")
        assert(res == "sat")
    });
    it('Test #28', () => {
        const res = addon.solve("var+-var")
        assert(res == "sat")
    });
    it('Test #29', () => {
        const res = addon.solve("a*-A")
        assert(res == "sat")
    });
    it('Test #30', () => {
        const res = addon.solve("(a*b*c)+(a+c+a)*(-a+d)+(a)")
        assert(res == "sat")
    });
    it('Test #31', () => {
        const res = addon.solve(" (a*b*c)+(a*c*a)+(-a*d)")
        assert(res == "sat")
    });
    it('Test #32', () => {
        const res = addon.solve("   ( a  * b* -a)+(a   *c*a)+ (-a*d)")
        assert(res == "sat")
    });
    it('Test #33', () => {
        const res = addon.solve("(a * b *-a) +(-a*c *a) +(- a*d )")
        assert(res == "sat")
    });
    it('Test #34', () => {
        const res = addon.solve("( a*b *- a)+( -a*c*a )+( -a* d)*a")
        assert(res == "unsat")
    });
} );