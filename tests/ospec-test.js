var o = require('ospec')
var classFuncStyle = require('../index')

o.spec('ospec', function() {
    o('math equation works', function() {
        o(1 + 2).equals(3)
    })
})

o.spec('classFuncStyle', function() {
    o('returns classStyle function on first invocation', function() {
        o(typeof classFuncStyle()).equals('function')
        o(classFuncStyle().name).equals('classStyle')
    })
})

o.spec('classStyle', function() {
    var classStyle
    o.beforeEach(function(){
        classStyle = classFuncStyle({
            'styleDeclared':'colorfulFunc'
        })
    })
    o('return undefined when given a falsy value', function() {
        o(
            classStyle({
                null: null ,
                notNum: NaN ,
                emptyString: '' ,
                zero: 0 ,
                false: false,
                undefined: undefined ,
            })
        )
        .equals(
            undefined
        )
        o(
            classStyle([null,NaN,false,undefined,0,-1,'',' '])
        )
        .equals(
            undefined
        )
    })
    o('handles truthy value as expected', function() {
        o(
            classStyle('string',1,{'obj':true},['arr'],['arrayOut',['arrayIn']],['arrayWith',{'arrayObj':true}])
        )
        .deepEquals(
            { className: 'string 1 obj arr arrayOut arrayIn arrayWith arrayObj' }
        )
    })
    o('get style from the initiated list', function() {
        o(
            classStyle('styleDeclared',['styleDeclared'],{'styleDeclared':true})
        )
        .deepEquals(
            { className: 'colorfulFunc colorfulFunc colorfulFunc' }
        )
    })
    o('ignore falsy and keeps truthy values', function() {
        o(
            classStyle('ignore',{'styleDeclared':false},[undefined,['falsy-value']])
        )
        .deepEquals(
            { className: 'ignore falsy-value' }
        )
    })
})