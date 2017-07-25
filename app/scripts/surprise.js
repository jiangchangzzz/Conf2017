'use strict';

$(document).ready(function(){
    $('[data-click]').click(function(){
        var ele=$(this);
        var img=ele.data('click');
        var count=ele.attr('count');

        if(!count){
            ele.attr('count',1);
        }
        else{
            count=parseInt(count)+1;
            ele.attr('count',count);
        }

        if(count == 5){
            ele.attr('src',img);
        }
    });
})