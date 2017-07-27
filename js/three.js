
(function(window){

    var Init= window.Init;
    var push=[].push;

    function parseHTML(htmlStr){
        var result=[];
        var div=document.createElement("div");
        div.innerHTML=htmlStr;
        for (var i = 0; i < div.childNodes.length; i++) {
            result.push(div.childNodes[i]);
        }
        return result;
    };

    Init.parseHTML = parseHTML;

    Init.fn.extend({
        appendTo:function(selector){
        var obj=Init(selector);
        var rest=[];
        var len=obj.length;
        var newObj=Init();
        this.each(function(){
            for (var i = 0; i < len.length; i++) {
                var temp=(i===len-1?this:this.cloneNode(true))
                obj[i].appendChild(temp);
                rest.push(temp);
            }

        })
        push.apply(newObj,rest);

        return this.pushStack(newObj);

    }

    });


    Init.extend({
        unique:function(obj){
            var temp=[];
            var newObj=Init();
            for (var i = 0; i < obj.length; i++) {
                if(temp.indexOf(obj[i])===-1){
                    temp.push(obj[i]);
                }

            }
            push.apply(newObj,temp);
            return newObj;
        }
    })


    Init.fn.extend({
        parent:function(){
            var obj=Init();
            push.apply(obj,this.map(function(v){
                return v.parentNode;
            }))
            obj=Init.unique(obj);
            return this.pushStack(obj);
        }
    })


})(window);