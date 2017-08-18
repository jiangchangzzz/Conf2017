'use strict';

$(document).ready(function(){
    const Sha1=new Hashes.SHA1();

    const introduction=[
        '你好，勇士！',
        ['%c','padding:95px 139px;line-height:230px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FnmSdef6lADjV_YRNLYs-3wlon_9) no-repeat;background-position: center center;'],
        ['恭喜你发现了不得了的秘密！请不要告诉任何人，偷偷踏上征程，在旅程的尽头，我们藏着一个%c神秘的宝藏','font-weight: bold;'],
        ['想要的话，就出发吧！这里留下了一行%c古老的基础咒语%c，当它为true时，传送门将会开启！','font-weight: bold;',''],
        'window.location.search.match(/imweb-magic-land/)'
    ];
    const levels=[
        {
            url: 'imweb-magic-land',
            text: [
                ['欢迎来到 %cIMWebConf%c 魔法大陆。','font-weight:bold',''],
                ['但好像出现了些意外，%c传送门%c 被隐藏起来了！它的id是”portal"，一个黑魔法让它的透明度变成了0，请帮忙驱散魔法。','font-weight: bold',''],
                '不要忘了加上刚刚教你的基础咒语'
            ]
        },
        {
            url: Sha1.hex('赫卡忒'),
            text: [
                ['也许您听说过 %c“本地存储”魔法','font-weight: bold'],
                '那里记录着下一个传送门的位置，快去看一下！'

            ],
            init: function(){
                setStorage('portal',Sha1.hex('该亚'));
            }
        },
        {
            url: Sha1.hex('该亚'),
            text: [
                ['试炼之路需要追寻先贤的足迹，您需要向4位导师学习，找到答案。'],
                ['%c第一位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:41px 41px;line-height:102px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Flu9tvDKTZ7I8erUVGX5AQ9jPcqF) no-repeat;background-position: center center;'],
                ['W3C致力于制定未来的魔法标准，也许 %cPhilippe Le Hégaret%c 先生会为您指明前路。','font-weight:bold',''],
                ['勇士，你已经完成了将近一半的关卡，这是你应得的奖励，链接：']
            ]
        },
        {
            url: Sha1.hex('尤拉诺斯'),
            text: [
                ['%c第二位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:41px 41px;line-height:102px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FhQn2teq7E1DM0mPd1_i-YhUMWIu) no-repeat;background-position: center center;'],
                ['他比较神秘，只知道它的代号是 %c%E9%99%88%E6%98%A0%E5%B9%B3%c ，你能找到他吗？','font-weight: bold','']
            ]
        },
        {
            url: Sha1.hex('克洛诺斯'),
            text: [
                ['%c第三位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:41px 41px;line-height:102px;background:url(http://7tszky.com1.z0.glb.clouddn.com/FtWVxQQGqk58uyjCehG1AfWVeL7i) no-repeat;background-position: center center;'],
                ['他是来自微软的 %cLimin zhu%c，熟悉这片大陆的你应该知道，他们强大的 %cTypeScript 魔法体系%c 越来越流行。','font-weight:bold','','font-weight:bold',''],
                '你离最终宝藏不远了，要不要来路边的酒馆喝点小酒，链接：'
            ]
        },
        {
            url: Sha1.hex('瑞亚'),
            text: [
                ['%c最后一位导师','font-size: 18px;font-weight: bold;line-height: 30px;'],
                ['%c','padding:95px 143px;line-height:210px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Fg6h-abEvmRVaO9sP3eMJsHvAiuP) no-repeat;background-position: center center;'],
                ['他在 %c“魔法施法性能”%c 方面经验丰富，在他的笔记里记录了两个数字：1505550600000，1505553000000','font-weight: bold',''],
                ['这是一个跟 %c时间%c 有关的魔法，他好像想利用这个魔法空降现场！','font-weight:bold',''],
                '如果您找到他，请连续点击5下他的头像获得答案。'
            ],
            init: function(){
                let ouven=document.getElementById('ouven');
                let count=0;
                ouven.addEventListener('click',function(){
                    if(++count===5){
                        console.log(Sha1.hex('欧申纳斯'));
                    }
                });
            }
        },
        {
            url: Sha1.hex('欧申纳斯'),
            text: [
                ['勇士,欢迎你来到旅程的终点，这里有你想要的 %c最终宝藏','font-weight: bold'],
                ['%c','padding:95px 95px;line-height:210px;background:url(http://7tszky.com1.z0.glb.clouddn.com/Fk6145-l3XUZcNfjg1XuEmKfxWHi) no-repeat;background-position: center center;'],
                ['%c传送门%c 已开启，链接：','font-weight: bold','']
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

        let search=location.search;
        let res=levels.every(function(level,index){
            if(search.indexOf(level.url)>0){
                const levelKey=Sha1.hex('希腊');
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
        let isFirst=true;
        let image=new Image();
        Object.defineProperty(image,'id',{
            get: function(){
                if(isFirst){
                    showInfo(text);
                    isFirst=false;
                }
            }
        });
        console.log('%c',image);
    };

    //显示提示信息
    function showInfo(infos){
        let count=0;
        let add=500;
        infos.forEach(function(info){
            setTimeout(function(){
                if(Array.isArray(info)){
                    console.log(...info);
                }
                else{
                    console.log(info);
                }
            },(count++)*add);
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
            levelBlock.innerText='Congratulation';
        } else {
            levelBlock.innerText=`关卡${num}/6`;
        }
        levelBlock.style.display='block';
    }
});

