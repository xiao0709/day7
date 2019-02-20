function require() {
    //该方法可导入模块
    require('', function() {

    })
}

function define() {
    //该方法可定义模块
    define([], function() {
        function add() {
            alert(2);
        }
        return add;
    })
}