(function(window){

    var Init=window.Init;
    var arr=[];
    var push=arr.push;
    Init.fn.type==="Init";
   var  itcast=Init.fn.itcast=function( selector ){
    //构造函数变成工厂函数的方法
        //selector可以是很多种
        if (!selector)return this;
        if (typeof  selector == "string") {
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">") {
                //html格式
                //var nodes=Init.parseHTML(selector);
                push.apply(this, Init.parseHTML(selector) );
                return this;

            } else {
                //var nodes=Init.select(selector);
                push.apply(this, Init.select(selector));
                return this;
            }
        }




    //dom
    if(selector.nodeType){
        push.call( this, selector );

        return this;
    }
    //处理I这样的元素
    if(selector.type==="Init"){
        push.call(this,selector);
        return this;
    }
    //如果传入函数
    if(typeof  selector==="function"){

        }
    }
    itcast.prototype= Init.fn;

})(window);