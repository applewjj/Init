(function(window){

    var Init=window.Init;
    var arr=[];
    var push=arr.push;
    Init.fn.type==="Init";
   var  itcast=Init.fn.itcast=function( selector ){
    //���캯����ɹ��������ķ���
        //selector�����Ǻܶ���
        if (!selector)return this;
        if (typeof  selector == "string") {
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">") {
                //html��ʽ
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
    //����I������Ԫ��
    if(selector.type==="Init"){
        push.call(this,selector);
        return this;
    }
    //������뺯��
    if(typeof  selector==="function"){

        }
    }
    itcast.prototype= Init.fn;

})(window);