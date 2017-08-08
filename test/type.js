/**
 * * Created by lee on 2017/8/8
 */
'use strict';

const utils = require('../dist/index');
import test from 'ava';

test('Type', t =>{
    let Type = utils.Type;
    let {isString, isNumber, isArray, isObject, isFunction, isUndefined, isNull, isNaN} = Type;
    if(
        isString('string') &&
        isNumber(1) &&
        isArray([]) &&
        isObject({}) &&
        isFunction(() =>{}) &&
        isUndefined(undefined) &&
        isNull(null) &&
        isNaN(NaN)
    ){
        t.pass();
    }
});