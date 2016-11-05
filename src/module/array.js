/**
 * Created by zy on 16/5/25.
 */
(function () {

    'use strict';

    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 4
    };
    // ES6的写法 {} =>[]
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']


    // ES5的写法  {} =>[]
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']


    console.info(arr1)


    console.info(arr2)

    // ES6的写法 {} =>[]
    let undefinedArray = Array.from({ length: 3 });
// [ undefined, undefined, undefinded ]

    console.info(undefinedArray)


//    Array.from(arrayLike, x => x * x);
// 等同于
//    Array.from(arrayLike).map(x => x * x);


    // 选择[]操作放入[];
    let pow = Array.from([1, 2, 3], (x) => x * x);
// [1, 4, 9]

    console.info(pow);


    let findSomeCondition  = [1, 4, -5, 10].find((n) => n < 0)
    // -5

    console.info(findSomeCondition);


    // 找到 符合条件的 element
    let findSomeConditionIndex  = [1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    }) // 2

    console.info(findSomeConditionIndex);


    //找到 [] 元素下标
    [NaN].indexOf(NaN)


        //初始化[]
        //['a', 'b','c'].fill('a')
// [7, 7, 7]


    //填充
    new Array(3).fill(7)
// [7, 7, 7]



    //es6提供对 []遍历的简单操作 keys()对应key,values()对应val
    console.info("es6提供对 []遍历的简单操作 keys()对应key,values()对应val");
    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }
// 0
// 1

    for (let elem of ['a', 'b'].values()) {
        console.log(elem);
    }
// 'a'
// 'b'

    console.info("遍历entries");
    for (let entries of ['a', 'b'].entries()) {
        console.log(entries)
    }
// 0 "a"
// 1 "b"

    console.info("单步遍历");
    //不使用 for  of [].keys遍历
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']



    //  很多连babel都不支持了...

    //[1, 2, 3].includes(2);     // true
    //[1, 2, 3].includes(4);     // false
    //[1, 2, NaN].includes(NaN); // true

})()