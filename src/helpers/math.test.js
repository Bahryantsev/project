

import {sum, mulStr, arrSum, arrRev,arrayFilterEven,getSmallest, convertMoney} from './math';
describe('math functionality',()=>{
    test('check if sum 1+2=3', ()=>{
        expect(sum(1,2)).toBe(3)
        });
    test('array sum test',()=>{
        expect(arrSum([1,2,3])).toEqual(6)
    });
    test('array reverse',()=>{
        expect(arrRev([1,2,3])).toEqual([3,2,1])
    });
    test('array filter even',()=>{
        expect(arrayFilterEven([1,2,3,4])).toEqual([2,4])
    })
    test('usd to yuan convercy ',()=>{
        expect(convertMoney(15)).toEqual('96 yuan')
    })
    
})
describe('codewars',()=>{
    test('codewars1',()=>{
        expect(getSmallest([34,15,88,2])).toBe(2)
    }),
    test('codewars2',()=>{
        expect(getSmallest([34,-345,-1,100])).toBe(-345)
    })
})


describe('str multiplier',()=>{
    test('check str mult func',()=>{
        expect(mulStr('hello',2)).toBe('Hellohello')
    })
})

