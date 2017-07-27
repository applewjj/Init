(function(window){

    var Init=window.Init;

    Init.fn.extend({
        addClass:function(name){
            return this.each(function(){
                if(this.className){
                    this.className+=" "+name;
                }else{
                    this.className=name;
                }
            })
        },
        removeClass:function(name){
            return this.each(function(){
                var names;
                if(this.className){
                    names=this.className.split(" ");
                }else{
                    names=[];
                }
                var newName=names.map(function(v,i){
                    if(v!=name){
                        return v;
                    }
                })
                this.className=newName.join(" ");
            })

        },

        hasClass:function(name){
            var dom=this[0];
            var names=dom.className && dom.className.split(" ") || [];
            for (var i = 0; i < names.length; i++) {
                if(names[i]===name){
                    return true;
                }

            }
            return false;
        },
        toggleClass:function(name){
            return this.each(function(){
                var obj=Init(this);
                if(obj.hasClass(name)){
                    obj.removeClass(name);
                }else{
                    obj.addClass(name);
                }
            })

        }
    })





    Init.fn.extend({
        attr:function(name,value){
            if(value===undefined){
                //返回获取的属性
                return this[0].getAttribute(name);
            }else{
                return this.each(function(){
                    this.setAttribute(name,value)
                })
            }
        },
        prop:function(name,value){
            if(value===undefined){
                return this[0][name];
            }else{
                return this.each(function(){
                    this[name]=value;
                })
            }
        }

    });

    Init.myEach( {
        html: 'innerHTML',
        text: 'innerText',
        val: 'value'
    }, function ( k, v ) {
        Init.fn[ k ] = function ( value ) {
            if ( value === undefined ) {
                return this[ 0 ][ v ];
            } else {
                return this.each( function () {
                    this[ v ] = value;
                });
            }
        };
    });



})(window)
