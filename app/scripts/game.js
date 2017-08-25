'use strict';

$(document).ready(function(){
    const Sha1=new Rusha();

    const introduction=[
        '你好，勇士！',
        ['%c','padding:95px 139px;line-height:230px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FnmSdef6lADjV_YRNLYs-3wlon_9) no-repeat;background-position: center center;'],
        ['恭喜你发现了不得了的秘密！请不要告诉任何人，偷偷踏上征程，在旅程的尽头，我们藏着一个%c神秘的宝藏','font-weight: bold;'],
        ['想要的话，就出发吧！这里留下了一行 %c古老的基础咒语%c ，当它为true时，传送门将会开启！','font-weight: bold;',''],
        'window.location.search.match(/imweb-magic-land/)，请记住这个咒语哦~'
    ];
    const levels=[
        {
            url: 'imweb-magic-land',
            text: [
                ['欢迎来到 %cIMWebConf%c 魔法大陆。','font-weight:bold',''],
                ['但好像出现了些意外，%c传送门%c 被隐藏起来了！它的id是”portal"，一个黑魔法让它的透明度变成了0，请帮忙驱散魔法。','font-weight: bold',''],
                '不要忘了加上刚刚教你的基础咒语：window.location.search.match...'
            ]
        },
        {
            url: Sha1.digest('赫卡忒'),
            text: [
                ['恭喜您闯过 %c第一关%c ，再坚持一下就会有奖励哦。','font-weight:bold',''],
                ['也许您听说过 %c“本地存储”魔法','font-weight: bold'],
                '那里记录着下一个传送门的位置，快去看一下！'
            ],
            init: function(){
                setStorage('portal',Sha1.digest('该亚'));
            }
        },
        {
            url: Sha1.digest('该亚'),
            text: [
                ['恭喜您闯过 %c第二关%c ，快来领取奖励吧。','font-weight:bold',''],
                ['试炼之路需要追寻先贤的足迹，您需要向4位导师学习，找到答案。'],
                ['%c第一位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:41px 41px;line-height:102px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Flu9tvDKTZ7I8erUVGX5AQ9jPcqF) no-repeat;background-position: center center;'],
                ['W3C致力于制定未来的魔法标准，也许 %cPhilippe Le Hégaret%c 先生会为您指明前路。','font-weight:bold',''],
                ['勇士，你已经完成了将近一半的关卡，你可以选择直接使用优惠券：'+uncompileStr('%84%DC%E8%E4%E3%ADi%5E%9A%D0%93%9F%E2%9F%91%D2%DC%9C%9F%9Ff%A4%9F%A8%E0%9C%98%CB')+'，或者继续前行（注意优惠券不能叠加使用哦）'],
                '扫描下面二维码，可以把你的当前关卡分享给朋友炫耀一下哦',
                ['%c','padding:45px 45px;line-height:110px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Fn4PbjgWz_H-5LKrmzmtcYicrknx) no-repeat;background-position: center center;']
            ]
        },
        {
            url: Sha1.digest('尤拉诺斯'),
            text: [
                ['恭喜您闯过 %c第三关%c ，前面有更大的奖励等着您哦。','font-weight:bold',''],
                ['%c第二位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:41px 41px;line-height:102px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FhQn2teq7E1DM0mPd1_i-YhUMWIu) no-repeat;background-position: center center;'],
                ['他比较神秘，只知道它的代号是 %c%E9%99%88%E6%98%A0%E5%B9%B3%c ，你能找到他吗？','font-weight: bold','']
            ]
        },
        {
            url: Sha1.digest('克洛诺斯'),
            text: [
                ['恭喜您闯过 %c第四关%c ，太了不起了，快来领取奖励吧。','font-weight:bold',''],
                ['%c第三位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:41px 41px;line-height:102px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FtWVxQQGqk58uyjCehG1AfWVeL7i) no-repeat;background-position: center center;'],
                ['他是来自微软的 %cLimin zhu%c，熟悉这片大陆的你应该知道，他们强大的 %cTypeScript 魔法体系%c 越来越流行。','font-weight:bold','','font-weight:bold',''],
                '你离最终宝藏不远了，要不要来路边的酒馆喝点小酒，你可以选择直接使用优惠券：'+uncompileStr('%84%DC%E8%E4%E3%ADi%5E%9A%D0%93%9F%E2%9F%91%D2%DC%9C%9F%9F%99%E3%CB%89%88%93%A7%BE')+'，或者继续前行（注意优惠券不能叠加使用哦）',
                '扫描下面二维码，可以把你的当前关卡分享给朋友炫耀一下哦',
                ['%c','padding:45px 45px;line-height:110px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FkXDvfFAeOMzAvVF3H16Pb3QKAAt) no-repeat;background-position: center center;']
            ]
        },
        {
            url: Sha1.digest('瑞亚'),
            text: [
                ['恭喜您闯过 %c第五关%c ，厉害！不过您还敢继续前行吗？','font-weight:bold',''],
                ['%c最后一位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:95px 143px;line-height:210px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Fg6h-abEvmRVaO9sP3eMJsHvAiuP) no-repeat;background-position: center center;'],
                ['他在 %c“魔法施法性能”%c 方面经验丰富，在他的笔记里记录了两个数字：1505550600000，1505553000000','font-weight: bold',''],
                ['这是一个跟 %c时间%c 有关的魔法，他好像想利用这个魔法空降现场！','font-weight:bold',''],
                '如果您找到他，请连续点击5下他的头像获得答案。'
            ],
            init: function(){
                let magic=document.getElementById('magic');
                let count=0;
                magic.addEventListener('click',function(){
                    if(++count===5){
                        console.log(Sha1.digest('欧申纳斯'));
                    }
                });
            }
        },
        {
            url: Sha1.digest('欧申纳斯'),
            text: [
                ['恭喜您闯过 %c第六关%c ，您已经通过了所有关卡！快来看看属于最强勇士的丰厚奖励吧！','font-weight:bold',''],
                ['%c','padding:95px 95px;line-height:210px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Fk6145-l3XUZcNfjg1XuEmKfxWHi) no-repeat;background-position: center center;'],
                ['%c最终宝藏传送门%c 已开启：'+uncompileStr('%85%DC%E8%E4%E3%ADi%5E%9A%D0%93%9F%E2%9F%91%D2%DC%9C%9F%9F%7C%C7%DD%A8%97%A1%A5%C9%B4')+'（注意优惠券不能叠加使用哦）','font-weight: bold',''],
                '扫描下面二维码，可以把你通关的喜悦分享给你的朋友Y(^_^)Y',
                ['%c','padding:45px 45px;line-height:110px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FqZXS_-tVTziJBx3TOktyL87RwFJ) no-repeat;background-position: center center;']
            ]
        }
    ];

    const cheatInfo=[
        ['%c我们发现你没有通过正常的方式来到这一关，自爆程序正在启动中…(⊙_⊙;)…','color:red'],
        ['%c...3...2...1','color:red'],
        ['%c...','color:red'],
        ['%c..','color:red'],
        ['%c.','color:red'],
        ['%c自爆程序好像坏掉了^_^|||','color:red']
    ];

    //初始化关卡
    function init(){
        levels.forEach(function(level){
            if(level.init){
                level.init();
            }
        });

        //清空控制台
        console.clear();

        let search=location.search;
        let res=levels.every(function(level,index){
            if(search.indexOf(level.url)>0){
                const levelKey=Sha1.digest('希腊');
                if(index>0){
                    let lastLevel=localStorage.getItem(levelKey);
                    if(lastLevel===levels[index-1].url || lastLevel===level.url || (index<levels.length-1 && lastLevel===levels[index+1].url)){
                        setStorage(levelKey,level.url);
                        setLevelNum(index+1);
                        print(level.text);
                    }else{
                        print(cheatInfo);
                    }
                } else {
                    setStorage(levelKey,level.url);
                    setLevelNum(index+1);
                    print(level.text);
                }
                return false;
            }
            else{
                return true;
            }
        });
        if(res){
            print(introduction);
        }
    }
    init();

    //打开控制台才开始显示提示信息
    function print(text){
        // let isFirst=true;
        // let image=new Image();
        // Object.defineProperty(image,'id',{
        //     get: function(){
        //         if(isFirst){
        //             showInfo(text);
        //             isFirst=false;
        //         }
        //     }
        // });
        // console.log('%c',image);
        showInfo(text);
    };

    //显示提示信息
    function showInfo(infos){
        // let count=0;
        // let add=500;
        // infos.forEach(function(info){
        //     setTimeout(function(){
        //         if(Array.isArray(info)){
        //             console.log(...info);
        //         }
        //         else{
        //             console.log(info);
        //         }
        //     },(count++)*add);
        // });

        infos.forEach(function(info){
            if(Array.isArray(info)){
                console.log(...info);
            }
            else{
                console.log(info);
            }
        });
    }

    //格式化查询字符串
    function parseSearch(str){
        let res={};
        if(str.length && str[0]==='?'){
            str=str.slice(1);
            let array=str.split('&');
            array.forEach(function(item){
                let itemArr=item.split('=');
                let name=itemArr.shift();
                let value=itemArr.join('=');
                res[name]=value;
            });
        }
        return res;
    }

    //存储localstorage
    function setStorage(key,value){
        try{
            localStorage.setItem(key,value);
        }
        catch(e){
            console.log('您的浏览器不支持localStorage存储，请升级您的浏览器，否则您不能体验某些有趣的关卡^_^');
        }
    }

    //设置当前关卡
    function setLevelNum(num){
        let levelBlock=document.getElementById('level-block');
        if(num===7){
            levelBlock.innerText='通关';
        } else {
            levelBlock.innerText=`关卡${num}/6`;
        }
        levelBlock.style.display='block';
    }

    //加密算法
    // function compileStr(code) { 
    //     var c = String.fromCharCode(code.charCodeAt(0) + code.length);
    //     for (var i = 1; i < code.length; i++) {
    //       c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    //     }
    //     return escape(c);
    // }

    //解密算法
    function uncompileStr(code) {
        code = unescape(code);
        var c = String.fromCharCode(code.charCodeAt(0) - code.length);
        for (var i = 1; i < code.length; i++) {
          c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        return c;
    }
});

