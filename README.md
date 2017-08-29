# CONF

IMWebConf 2017官网，包含有控制台小游戏和优惠券h5页面，使用gulp，npm，bower构建

## 使用方法

安装必须的npm包和bower包
```
npm install
bower install
```

启动本地开发服务器，有实时watch功能
```
gulp serve
```

打包到生产项目，已添加静态资源的md5码和css压缩内联
```
gulp
```
index.html为conf官网，en.html为英文官网，coupon.html为优惠券h5页面

打包并发布到服务器上
```
gulp pub
```

将image/sprite文件夹中的小图片构建为雪碧图
```
gulp sprite
```