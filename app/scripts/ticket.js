'use strict';

$(document).ready(function(){
    const startDate=new Date(2017,7,18).getTime();   //活动开始时间,月份从0开始
    const endDate=new Date(2017,8,16).getTime();   //活动结束时间
    const weekDay=1;   //活动发生在星期几，0表示星期天，6表示星期六
    const hour=17;
    const startMinute=0;
    const endMinute=60;

    let onlineUrl=null;
    let offlineUrl=null;

    let btn=$('.ticket-btn');
    let info=$('#book-info');

    function init(){
        bindEvents();
        checkTime();
    }
    init();

    //检查当前时间是否在抢票时间内
    function checkTime(){
        let time=new Date();

        if(time.getTime()>startDate 
            && time.getTime()<endDate 
            && time.getDay()===weekDay){
            function ready(){
                let now=new Date();
                if(now.getHours()===hour && now.getMinutes()>=startMinute && now.getMinutes()<=endMinute){
                    btn.addClass('active');
                } else {
                    btn.removeClass('active');
                }
            }
            ready();
            setInterval(ready,1000);
        }
    }

    //绑定事件处理程序
    function bindEvents(){
        const baseUrl='https://ke.qq.com/p/';

        $('#online-ticket').click(function(){
            let tab=window.open();
            if(onlineUrl){
                tab.location.href=onlineUrl;
            }

            getTicketUrl(function(urls){
                let url=find(urls,'type','线上');
                if(url){
                    info.text('请在新页面领取线上票');
                    onlineUrl=baseUrl+url.link_url;
                    tab.location.href=onlineUrl;
                } else {
                    info.text('还没到抢票时间');
                }
            });
        });

        $('#offline-ticket').click(function(){
            let tab=window.open();
            if(offlineUrl){
                tab.location.href=offlineUrl;
                return;
            }

            getTicketUrl(function(urls){
                let url=find(urls,'type','线下');
                if(url){
                    info.text('请在新页面领取线下票');
                    offlineUrl=baseUrl+url.link_url;
                    tab.location.href=offlineUrl;
                } else {
                    info.text('还没到抢票时间');
                }
            });
        });
    }

    //从服务器拉取优惠券地址
    function getTicketUrl(callback){
        info.text('正在抢票中...');
        $.ajax({
            url: 'http://sas.qq.com/cgi-bin/IMWebConf_IMWebConf2017_coupons',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(data){
                if(data.retcode===0){
                    callback(data.result.urls);
                } else {
                    info.text('服务器繁忙，请稍后重试');
                } 
            },
            error: function(xhr,textStatus){
                info.text('服务器繁忙，请稍后重试');
            }
        });
    }

    //查找数组中的指定元素
    function find(array,key,value){
        let res=null;
        array.every(function(item){
            if(item[key]===value){
                res=item;
                return false;
            } else {
                return true;
            }
        });
        return res;
    }
});