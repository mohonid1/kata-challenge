import { expect } from 'chai'
import { add } from '../app' 


describe('Add', function() {
    it('should return 0 when the value is empty', function() {
        expect(add('')).equal(0)
    });
    it('should return 1 when the value is "1"', function() {
        expect(add('1')).equal(1)
    });
    it('should return 3 when the value is "1,2"', function() {
        expect(add('1,2')).equal(3)
    });
    it('should return 36 when the value is "1,2,3,4,5,6,7,8"', function() {
        expect(add('1,2,3,4,5,6,7,8')).equal(36)
    });
    it('should return 6 when the value is "1\n2,3"', function() {
        expect(add('1\n2,3')).equal(6)
    });
    it('should return 1 when the value is "1,\n"', function() {
        expect(add('1,\n')).equal(1)
    });
    it('should return 3 when the value is "//;\n1;2"', function() {
        expect(add('//;\n1;2')).equal(3)
    });
    it('should throw error when the value is "//;\n1;2"', function() {
        try { 
            expect(add('//;\n1;-2')).to.throw(new Error('negatives not allowed: -2'));
        } catch (err) {}
    });
    it('should return 3 when the value is "//;\n1;2"', function() {
        expect(add('-//;\n1;2')).equal(3)
    });
    it('should throw error when the value is "1,4,-1"', function() {
        try { 
            expect(add('1,4,-1')).to.throw(new Error('negatives not allowed: -1'));
        } catch (err) {}
    });
    it('should return 2 when the value is "2,1001", skip number bigger than 1000', function() {
        expect(add('2,1001')).equal(2)
    });
});