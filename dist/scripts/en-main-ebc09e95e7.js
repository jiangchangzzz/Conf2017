"use strict";var anchors=["home","lecturer","sponsor","about","partner"];$(document).ready(function(){function e(e){e.siblings("a").removeClass("active"),e.addClass("active")}$("#fullpage").fullpage({anchors:anchors,navigation:!0,navigationPosition:"right",afterLoad:function(a,n){e($("#header-nav").children().eq(n-1))},scrollOverflow:!0}),$("#header-menu").click(function(){$("#header-nav").toggleClass("show")}),$("#header-nav").delegate("a","click",function(){e($(this))});var a=$("#scene").get(0);new Parallax(a);$("#place-list").delegate("li","mousemove",function(){$(this).siblings("li").removeClass("active"),$(this).addClass("active");var e="#"+$(this).data("target");$(e).siblings(".place-content").removeClass("active"),$(e).addClass("active")});for(var n=$(".section"),t=n.length,i=0,s=n.length;i<s;i++)!function(e,a){var i=n.eq(e).data("url"),s=new Image;s.onload=function(){if(n.eq(e).css("background-image","url("+i+")"),0===--t){$("#loading").hide();if(-1!==location.search.indexOf("shicha=1")){var a=document.getElementById("scene");a.style.display="block";new Parallax(a)}}},s.src=i}(i);Anm.init(document.getElementById("scene-canvas")),setTimeout(function(){$("#loading").hide()},5e3)});