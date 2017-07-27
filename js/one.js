
(function(window){
    var arr=[];
    var push=arr.push;
    var slice=arr.slice;
//�ж��Ƿ����������α����
    Init.isArray=function(array){
//       var length=array && array.length;
//        return  typeof length==="number" && length>=0;
        return  typeof array.length==="number" && array.length>=0;
    }
    //��װ�Լ���each����
    Init.myEach=function(array,callback){
        if(Init.isArray(array)){
            for (var i = 0; i < array.length; i++) {
                //callback && callback.call(array[i],i,array[i]);//this��ֵ
//                callback && callback(i,array[i]);//this��window
                if(callback.call(array[i],i,array[i])===false){
                    break;
                }
            }
        }else{
            //����
            for(var k in array){
                //callback && callback.call(array[key],key,array[key]);//this��ֵ
//                callback && callback(key,array[key]);//this��window
                if(callback.call(array[k],k,array[k])===false){
                    break;
                }
            }
        }
        return array;
    }


    //��װ�Լ���map����
    Init.myMap=function(array,callback){
        var list=[];
        if(Init.isArray(array)){
            for (var i = 0; i < array.length; i++) {
                callback && callback(array[i],i);
                list.push(array[i]);
            }
        }else{
            //����
            for(var key in array){
                callback && callback(array[key],key);
                list.push(array[key]);
            }
        }
        return list;
    }

//��ȡԪ�صĺ���
    Init.select=function(selector){
        return document.querySelectorAll(selector);
    }
////���캯��
//    function Itcast(selector){
//
//    }
    //����new�ؼ���,������������
    function Init(selector){
        return new Init.fn.itcast(selector);

    }
//Ϊ�˱�����Ĺ��캯���������캯����ɹ��������ķ���
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
                //�����Σ�index��ֵ����������undefined
                return this.toArray();
            }else{
                //����
                if(index>=0){
                    return this[index];
                }else if(index<0){
                    return this[this.length+index];
                }
            }
            return this;//����ļȲ�������Ҳ���Ǹ�����Ҳû�в�����
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