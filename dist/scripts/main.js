"use strict";$(document).ready(function(){function e(e){e.siblings("a").removeClass("active"),e.addClass("active")}$(window).width()>768?$("#fullpage").fullpage({anchors:["home","lectuer","sponsor","about"],navigation:!0,navigationPosition:"right",loopBottom:!0,afterLoad:function(a,i){e($("#header-nav").children().eq(i-1))},scrollOverflow:!0}):$("#fullpage").fullpage({anchors:["home","lectuer","sponsor","information","about"],navigation:!0,navigationPosition:"right",loopBottom:!0,responsiveWidth:768,afterLoad:function(a,i){e($("#header-nav").children().eq(i-1))}}),$("#header-menu").click(function(){$("#header-nav").toggleClass("show")}),$("#header-nav").delegate("a","click",function(){e($(this))}),$("#place-list").delegate("li","click",function(){$(this).siblings("li").removeClass("active"),$(this).addClass("active");var e="#"+$(this).data("target");$(e).siblings(".place-content").removeClass("active"),$(e).addClass("active")});for(var a=$(".section"),i=a.length,n=0,o=a.length;n<o;n++)!function(e,n){var o=a.eq(e).data("url"),t=new Image;t.onload=function(){a.eq(e).css("background-image","url("+o+")"),0===--i&&$("#loading").hide()},t.src=o}(n);setTimeout(function(){$("#loading").hide()},5e3)});