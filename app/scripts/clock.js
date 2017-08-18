'use strict';

$(document).ready(function(){
    var digits = $('.item');
    var day1 = $('.d1');
    var day2 = $('.d2');
    var hour1 = $('.h1');
    var hour2 = $('.h2');
    var minute1 = $('.m1');
    var minute2 = $('.m2');
    var second1 = $('.s1');
    var second2 = $('.s2');

    var openStamp = (new Date('2017-9-16 9:30:00')).getTime();
    var timezoneOffset = (new Date()).getTimezoneOffset() * 60000;
    var updateClock = function() {
      var d, h, m, p, s;
      var countStamp = openStamp - (new Date()).getTime();
      if(countStamp < 0){
        clearInterval(timer);
        return;
      }
      var countdown = new Date(countStamp + timezoneOffset);
      d = Math.floor(countStamp / 86400000); //24*3600*1000
      h = countdown.getHours();
      m = countdown.getMinutes();
      s = countdown.getSeconds();
      if (d < 10) {
        d = '0' + d;
      } else {
        d = '' + d;
      }
      if (h < 10) {
        h = '0' + h;
      } else {
        h = '' + h;
      }
      if (m < 10) {
        m = '0' + m;
      } else {
        m = '' + m;
      }
      if (s < 10) {
        s = '0' + s;
      } else {
        s = '' + s;
      }
      digits.removeClass('di0 di1 di2 di3 di4 di5 di6 di7 di8 di9');
      day1.addClass('di' + d.charAt(0));
      day2.addClass('di' + d.charAt(1));
      hour1.addClass('di' + h.charAt(0));
      hour2.addClass('di' + h.charAt(1));
      minute1.addClass('di' + m.charAt(0));
      minute2.addClass('di' + m.charAt(1));
      second1.addClass('di' + s.charAt(0));
      second2.addClass('di' + s.charAt(1));
      return;
    };

    updateClock();

    var timer = setInterval(updateClock, 250);

});