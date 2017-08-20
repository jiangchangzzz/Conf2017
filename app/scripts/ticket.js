'use strict';

$(document).ready(function(){
    const startDate=new Date(2017,7,18).getTime();   //活动开始时间,月份从0开始
    const endDate=new Date(2017,8,16).getTime();   //活动结束时间
    const weekDay=0;   //活动发生在星期几，0表示星期天，6表示星期六
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
            && now.getHours()===14
            && now.getMinutes()<=60){
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    }

    //绑定事件处理程序
    function bindEvents(){
        const baseUrl='https://ke.qq.com/p/';

        $('#online-ticket').click(function(){
            getTicketUrl(function(urls){
                let url=find(urls,'type','线上');
                if(url){
                    window.location=baseUrl+url;
                } else {
                    info.text('还没到抢票时间');
                }
            });
        });

        $('#offline-ticket').click(function(){
            getTicketUrl(function(urls){
                let url=find(urls,'type','线下');
                if(url){
                    window.location=baseUrl+url;
                } else {
                    info.text('还没到抢票时间');
                }
            });
        });
    }

    //从服务器拉取优惠券地址
    function getTicketUrl(callback){
        $.ajax({
            url: 'http://sas.qq.com/cgi-bin/IMWebConf_IMWebConf2017_coupons',
            type: 'GET',
            dataType: 'json',
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