
(function(window){
    var arr=[];
    var push=arr.push;
    var slice=arr.slice;
//判断是否是数组或者伪数组
    Init.isArray=function(array){
//       var length=array && array.length;
//        return  typeof length==="number" && length>=0;
        return  typeof array.length==="number" && array.length>=0;
    }
    //封装自己的each方法
    Init.myEach=function(array,callback){
        if(Init.isArray(array)){
            for (var i = 0; i < array.length; i++) {
                //callback && callback.call(array[i],i,array[i]);//this是值
//                callback && callback(i,array[i]);//this是window
                if(callback.call(array[i],i,array[i])===false){
                    break;
                }
            }
        }else{
            //对象
            for(var k in array){
                //callback && callback.call(array[key],key,array[key]);//this是值
//                callback && callback(key,array[key]);//this是window
                if(callback.call(array[k],k,array[k])===false){
                    break;
                }
            }
        }
        return array;
    }


    //封装自己的map方法
    Init.myMap=function(array,callback){
        var list=[];
        if(Init.isArray(array)){
            for (var i = 0; i < array.length; i++) {
                callback && callback(array[i],i);
                list.push(array[i]);
            }
        }else{
            //对象
            for(var key in array){
                callback && callback(array[key],key);
                list.push(array[key]);
            }
        }
        return list;
    }

//获取元素的函数
    Init.select=function(selector){
        return document.querySelectorAll(selector);
    }
////构造函数
//    function Itcast(selector){
//
//    }
    //隐藏new关键字,创建工厂函数
    function Init(selector){
        return new Init.fn.itcast(selector);

    }
//为了避免更改构造函数，将构造函数变成工厂函数的方法
    Init.fn=Init.prototype={
        constructor:Init,
        length:0,
        each:function(callback){
             return Init.myEach(this,callback);
        },
        map:function(callback){
            return Init.myMap(this,callback);
        },
        toArray:function(){
//            var array=[];
//            array.push.apply(array,this);
//            return  array;
            //return  this.map(function(v){
            //    return v;
            //})
            return  slice.call(this);
        },
        get:function(index){
            if(index===undefined){
                //不传参，index数值类型所以是undefined
                return this.toArray();
            }else{
                //传参
                if(index>=0){
                    return this[index];
                }else if(index<0){
                    return this[this.length+index];
                }
            }
            return this;//传入的既不是正数也不是负数，也没有不传参
        },

        end:function(){
            return this.prevObj || this;
        },

        pushStack:function(newObj){
             newObj.prevObj=this;
             return newObj;
        }


    };

    Init.extend=Init.fn.extend=function(obj){
        for(var k in obj){
            this[k]=obj[k];
        }
    }

    window.Init=Init;


})(window);