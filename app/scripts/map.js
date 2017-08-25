'use strict';

$(document).ready(function(){
    function init(){
        let center=new qq.maps.LatLng(22.548380,113.945070);

        let map=new qq.maps.Map(document.getElementById('map'),{
            center: center,
            zoom: 18
        });

        let marker=new qq.maps.Marker({
            position: center,
            map: map
        });

        let info=new qq.maps.InfoWindow({
            map: map
        });

        qq.maps.event.addListener(marker, 'click', function() {
            info.open(); 
            info.setContent('<div style="text-align:center;white-space:nowrap;'+
            'margin:10px;font-size: 16px;line-height: 1.5;"><strong style="font-size: 18px;font-weight: bold;">IMWebConf 2017</strong><br/>深圳科兴科学园东门B4单元</div>');
            info.setPosition(center); 
        });
    }
    init();
});