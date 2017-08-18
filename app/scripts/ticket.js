'use strict';

$(document).ready(function(){
    const startDate=new Date(2017,8,18).getTime();   //活动开始时间
    const endDate=new Date(2017,9,16).getTime();   //活动结束时间
    const weekDay=5;   //活动发生在星期几
    let btn=$('.ticket-btn');
    let info=$('#book-info');

    function init(){
        bindEvents();
        setInterval(checkTime,1000);
    }
    init();

    //检查当前时间是否在抢票时间内
    function checkTime(){
        let now=new Date();
        let time=now.getTime();
        if(now.getTime()>startDate 
            && now.getTime()<endDate 
            && now.getDay()===weekDay
            && now.getHours()===18
            && now.getMinutes()<=30){
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    }

    function bindEvents(){
        btn.click(function(){
            let btnEle=$(this);
            if(btnEle.hasClass('active')){
                info.text('');
                $.ajax({
                    url: 'http://sas.qq.com/cgi-bin/IMWebConf_IMWebConf2017_coupons',
                    type: 'GET',
                    dataType: 'json',
                    success: function(data){
                        if(data.retcode===0){
                            if(data.result.urls.length>0){
                                let url=data.result.urls[0];
                                location.href(url);
                            } else {
                                info.text('还没到抢票时间');
                            }
                        } else {
                            info.text('服务器繁忙，请稍后重试');
                        } 
                    },
                    error: function(xhr,textStatus){
                        info.text('服务器繁忙，请稍后重试');
                    }
                });
            }
        });
    }
});