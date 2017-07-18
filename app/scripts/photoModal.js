'use strict';

(function($){

    //照片模态框组件
    let PhotoModal=(function(){
        let PhotoModal=function(element,options){
            this.element=element;
            this.options=$.extend({},$.fn.PhotoModal.default,options);

            this.init();
        };

        PhotoModal.prototype={
            //初始化插件
            init: function(){
                this.images=$(this.options.imageSelector);
                this.content=this.element.find('.content-box img');
                this.title=this.element.find('.content-title');
                this.cancel=this.element.find('.content-cancel');
                this.mask=this.element.find('.photo-mask');

                this.hide();
                this.images.css('cursor','pointer');
                this._initEvent();
            },

            //绑定事件处理程序
            _initEvent: function(){
                let self=this;

                this.images.click(function(){
                    let img=$(this);

                    let src='';
                    let title='';
                    if(img.is('img')){
                        src=img.attr('src');
                        title=img.attr('alt');
                    }
                    else{
                        src=img.css('backgroundImage').match(/url\("(.+)"\)/)[1];
                        title=img.attr('title');
                    }
                    self.show(src,title || self.options.title);
                });

                this.mask.click(function(){
                    self.hide();
                });
                this.cancel.click(function(){
                    self.hide();
                });
            },

            //显示照片模态框
            show: function(src,title){
                this.content.attr('src',src);
                this.title.text(title);
                this.element.show();
            },

            //隐藏照片模态框
            hide: function(){
                this.element.hide();
            }
        };

        return PhotoModal;
    })();

    $.fn.PhotoModal=function(options){
        return this.each(function(){
            let element=$(this);
            let instance=new PhotoModal(element,options);

            //提供从外部调用PhotoModal对象方法的接口
            if(typeof options==='string'){
                return instance[options];
            }
        });
    }

    //PhotoModal默认设置
    $.fn.PhotoModal.default={
        imageSelector: '.photo-image',
        title: '照片'
    };

    $(document).ready(function(){
        $('[data-photoModal]').PhotoModal({
            imageSelector: '[data-photo]'
        });
    });

})(jQuery);