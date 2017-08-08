/**
 * * Created by lee on 2017/8/8
 */
'use strict';

export default (function(){
    let Type = {};
    let types = ['Number', 'String', 'Array', 'Object', 'Function', 'Undefined', 'Null', 'NaN'];

    function setType(type){
        Type['is' + type] = function(obj){
            if(type === 'NaN'){
                return isNaN(obj)
            }
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        };
    }

    for(let i = 0, len = types.length; i < len; i++){
        setType(types[i]);
    }

    return Type;
})();