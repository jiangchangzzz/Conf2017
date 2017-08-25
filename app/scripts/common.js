'use strict';

$(document).ready(function () {
  
  //全屏滚动效果
  $('#fullpage').fullpage({
    anchors: anchors,
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function (anchorLink, index) {
      activeLink($('#header-nav').children().eq(index - 1));
    },
    onLeave: function(index,nextIndex,direction){
      lazyLoad(nextIndex);
    },
    scrollOverflow: true,
    lazyLoading: false,
    normalScrollElements: '#map'
  });

  //小屏幕下显示隐藏菜单
  $('#header-menu').click(function () {
    $('#header-nav').toggleClass('show');
  });

  //点击导航显示选中效果
  $('#header-nav').delegate('a', 'click', function () {
    activeLink($(this));
  });

  //激活导航栏链接
  function activeLink(ele) {
    ele.siblings('a').removeClass('active');
    ele.addClass('active');
  }

  //点击切换tab
  $('#place-list').delegate('li', 'mousemove', function () {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');

    var target = '#' + $(this).data('target');
    $(target).siblings('.place-content').removeClass('active');
    $(target).addClass('active');
  });

  //添加loading页面
  // var imgList = $('.section');
  // var imgNum = imgList.length;
  // for (let i = 0, len = imgList.length; i < len; i++) {
  //   let url = imgList.eq(i).data('url');

  //   let img = new Image();
  //   img.onload = function () {
  //     imgList.eq(i).css('background-image', 'url(' + url + ')');
  //     imgNum--;
  //     if (imgNum === 0) {
  //       $('#loading').hide();
  //       var search = location.search;
  //       if (search.indexOf('shicha=1') !== -1) {
  //         var scene = document.getElementById('scene');
  //         scene.style.display = 'block';
  //         var parallax = new Parallax(scene);
  //       }
  //     }
  //   };
  //   img.src = url;
  // }

  // Anm.init(document.getElementById('scene-canvas'));
  // //设置一个超时，如果时间内没有加载完图片，也进入页面
  // setTimeout(function () {
  //   $('#loading').hide();
  // }, 0);

  // $('#loading').hide();

  var imgList = $('.section');

  function loading(){
    let hash=location.hash;
    let index=1;
    if(hash){
      anchors.every(function(anchor,i){
        if(hash.indexOf(anchor)>=0){
          index=i+1;
          return false;
        } else {
          return true;
        }
      });
    }

    lazyLoad(index,function(){
      $('#loading').hide();
    });

    setTimeout(function () {
      $('#loading').hide();
    }, 3000);

    Anm.init(document.getElementById('scene-canvas'));
  }
  loading();

  //图片懒加载
  function lazyLoad(index,callback){
    let count=0;
    function compute(){
      count++;
      if(count>=3){
        if(typeof callback==='function'){
          callback();
        }
      }
    }

    loadImage(index,compute);

    if(index!=imgList.length){
      loadImage(index+1,compute);
    } else {
      count++;
    }

    if(index!==1){
      loadImage(index-1,compute);
    } else {
      count++;
    }
  }

  //加载图片
  function loadImage(index,callback){
    let i=index-1;
    let url=imgList.eq(i).data('url');
    let img=new Image();
    img.onload=function(){
      imgList.eq(i).css('background-image', 'url(' + url + ')');
      if(typeof callback==='function'){
        callback();
      }
    };
    img.src=url;
  }
});
