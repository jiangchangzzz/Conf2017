'use strict';

$(document).ready(function(){
  //全屏滚动效果
  if ($(window).width() > 768) {
    $('#fullpage').fullpage({
      anchors: ['home', 'lectuer', 'sponsor', /*'information' ,*/ 'about', 'partner'],
      navigation: true,
      navigationPosition: 'right',
      afterLoad: function(anchorLink, index) {
        activeLink($('#header-nav').children().eq(index - 1));
      },
      scrollOverflow: true
    });
  } else {
    $('#fullpage').fullpage({
      anchors: ['home', 'lectuer', 'sponsor', /*'information',*/ 'about', 'partner'],
      navigation: true,
      navigationPosition: 'right',
      loopBottom: true,
      responsiveWidth: 768,
      afterLoad: function(anchorLink, index) {
        activeLink($('#header-nav').children().eq(index - 1));
      }
    });
  }

  //小屏幕下显示隐藏菜单
  $('#header-menu').click(function() {
    $('#header-nav').toggleClass('show');
  });

  //点击导航显示选中效果
  $('#header-nav').delegate('a', 'click', function() {
    activeLink($(this));
  });

  /*var scene=$('#scene').get(0);
  var parallax=new Parallax(scene);*/

  //激活导航栏链接
  function activeLink(ele) {
    ele.siblings('a').removeClass('active');
    ele.addClass('active');
  }

  //点击切换tab
  $('#place-list').delegate('li', 'click', function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');

    var target = '#' + $(this).data('target');
    $(target).siblings('.place-content').removeClass('active');
    $(target).addClass('active');
  });

  //添加loading页面
  var imgList = $('.section');
  var imgNum = imgList.length;
  for (let i = 0, len = imgList.length; i < len; i++) {
    let url = imgList.eq(i).data('url');

    let img = new Image();
    img.onload = function() {
      imgList.eq(i).css('background-image', 'url(' + url + ')');
      imgNum--;
      if (imgNum === 0) {
        $('#loading').hide();
        var search = location.search;
        if (search.indexOf('shicha=1') !== -1) {
          var scene = document.getElementById('scene');
          scene.style.display = 'block';
          var parallax = new Parallax(scene);
        }
      }
    };
    img.src = url;
  }

  Anm.init(document.getElementById('scene-canvas'));
  //设置一个超时，如果时间内没有加载完图片，也进入页面
  setTimeout(function() {
    $('#loading').hide();
  }, 5000);
});
