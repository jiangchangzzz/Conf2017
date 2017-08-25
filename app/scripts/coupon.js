'use strict';

document.addEventListener('DOMContentLoaded',function(){
    //门票类型
    const tickets=[
        {
            type: '线上票',
            url: 'http://m.ke.qq.com/courseDetail.html?_bid=167&_wv=3&course_id=226007&#tuin=996baed2&from=other'
        },
        {
            type: '线下票',
            url: 'http://m.ke.qq.com/courseDetail.html?_bid=167&_wv=3&course_id=225949&#tuin=996baed2&from=other'
        }
    ];

    //优惠券类型
    const coupons=[
        {
            level: '2关',
            url: 'eed2cad90e774049b438813de2c73c7f4a6820c1',
            price: 10,
            ticketType: 0,
            ticketUrl: '7m2vj2fe'
        },
        {
            level: '4关',
            url: '6c1675f50ef276a001df026fb30a24788d7c5f24',
            price: 20,
            ticketType: 0,
            ticketUrl: 'jyR7QBeY'
        },
        {
            level: '全部关卡',
            url: 'ab5bd67695b16930da56af4093698d4ca6b11b73',
            price: 330,
            ticketType: 1,
            ticketUrl: 'MzcEROVsA'
        }
    ];

    //当前优惠券信息
    let currentCoupon=null;

    //初始化页面
    function init(){
        const search=location.search;
        coupons.every(function(coupon){
            if(search.indexOf(coupon.url)>0){
                currentCoupon=coupon;
                return false;
            } else {
                return true;
            }
        });

        if(currentCoupon){
            render(currentCoupon);
            share();
        }
    }
    init();

    //重新渲染页面
    function render(coupon){
        let ticket=tickets[coupon.ticketType];
        changeText('.level',coupon.level);
        changeText('.price',coupon.price);
        changeText('.ticket-type',ticket.type);
        changeHref('.ticket-url',ticket.url);
        
        document.querySelector('.take-ticket').href='https://ke.qq.com/p/'+coupon.ticketUrl;
    }   

    function changeText(selector,text){
        let doms=document.querySelectorAll(selector);
        for(let i=0,len=doms.length;i<len;i++){
            doms[i].innerText=text;
        }
    }

    function changeHref(selector,href){
        let doms=document.querySelectorAll(selector);
        for(let i=0,len=doms.length;i<len;i++){
            doms[i].href=href;
        }
    }

    //配置微信分享
    function share(){
        var timestamp = parseInt(new Date().getTime() / 1000, 10);
        var nonceStr = 'R' + parseInt(Math.random() * 1000000, 10);
        var url = window.location.href.replace(/#.*$/, '');
        var signature = '';
        
        fetchJsonp(`http://imweb.io/wx/signature?noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`,{
            timeout: 5000,
            jsonpCallbackFunction: 'callback'
        })
        .then(function(response){
            return response.json();
        }).then(function(json){
            signature = json.signature;
            console.log('ajax response result:', json);
            initWXAPI();
        }).catch(function(e){
            //请求出错处理
            console.error('获取weixin签名失败', e);
        });
        
        
        function initWXAPI() {
            var configParams = {
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wxd5841c34c4a7470a', // 必填，公众号的唯一标识
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            };
        
            wx.config(configParams);
        
            wx.ready(function () {
                var share={
                    title: '我在IMWebConf官网中通过'+currentCoupon.level+'，获得了'+currentCoupon.price+'元优惠券',
                    desc: '官网中的开发者控制台便是通向魔法大陆的大门，发挥你的脑洞，获得门票优惠券的同时，还能分享朋友圈，好奇就来试试吧~',
                    link: 'http://2017.imweb.io/',
                    imgUrl: 'http://2017.imweb.io/share1.jpg'
                };
        
                wx.onMenuShareTimeline({
                    title: share.title, // 分享标题
                    link: share.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: share.imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: share.title, // 分享标题
                    desc: share.desc, // 分享描述
                    link: share.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: share.imgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQQ({
                    title: share.title, // 分享标题
                    desc: share.desc, // 分享描述
                    link: share.link, // 分享链接
                    imgUrl: share.imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareWeibo({
                    title: share.title, // 分享标题
                    desc: share.desc, // 分享描述
                    link: share.link, // 分享链接
                    imgUrl: share.imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQZone({
                    title: share.title, // 分享标题
                    desc: share.desc, // 分享描述
                    link: share.link, // 分享链接
                    imgUrl: share.imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
        
            wx.error(function (res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.error(res);
            });
        }  
    }
});