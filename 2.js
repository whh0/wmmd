//模块化  module
// console.log(module)
//module.exports和exports的区别
/*

1.每一个js文件都会自动创建一个module，同时module会创建一个exports的属性，初始值为空
2.export是包含module.expots的值
3.module.exports的值会覆盖expoets里面的值


*/
//module.exports和exports =>抛出  暴露
var bar = require("./bar")
console.log(bar)
    //node_module的作用
    //里面配置是当前项目的项目依赖