/**
 * Created by zy on 16/5/25.
 */
(function () {

    'use strict';
    /*


     //es5 class
     function Point(x,y){
     this.x = x;
     this.y = y;
     }

     Point.prototype.toString = function () {
     return '(' + this.x + ', ' + this.y + ')';
     }
     */

    //es6 class
    //定义类
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }


// 报错
//    var point = Point(2, 3);

// 正确
    var point = new Point(2, 3)
    console.info(point.toString())

    point.hasOwnProperty('x') // true
    point.hasOwnProperty('y') // true
    point.hasOwnProperty('toString') // false
    point.__proto__.hasOwnProperty('toString') // true

    Point.name // "Point"

    const MyClass = class Me {
        getClassName() {
            return Me.name;
        }
    };
    //上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，Me只在Class的内部代码可用，指代当前类。

    let inst = new MyClass();
    inst.getClassName() // Me
    //Me.name // ReferenceError: Me is not defined


    //继承 Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。
    class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y); // 调用父类的constructor(x, y)
            this.color = color;
        }

        toString() {
            return this.color + ' ' + super.toString(); // 调用父类的toString()
        }
    }

    //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。


    console.info("子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。");

    let cs = "子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。";

    console.info(cs);


    /**

     class Point { -* ... *- }

     class ColorPoint extends Point {
        constructor() {
        }
    }

     let cp = new ColorPoint(); // ReferenceError
     */


    //class Point { /* ... */
    //}

    class ColorPointß extends Point {
        constructor() {
            super();//注释就会报错
        }
    }

    let cp = new ColorPoint(); // ReferenceError
})()