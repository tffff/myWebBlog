---
title: jquery模块化书写方式
date: 2020-07-15 14:29:40
---

不要像以前那样写好多的点击事件，而是用一个模块包裹起来

```js
//单例模式 代理模式
var message ={
  init:function(arguments){
    var me=this;
    console.log('message init');
    this.render();
    this.bind();
  }
  render:function(){
    var me=this;
    me.btn=$('#btn');
  }
  bind:function(){
    var me=this;
    me.btn.on('click',$.proxy(me._go,this));
  }
  _go:function(e){
    consle.log(e.tartget)
  }
}

module.exports=message;
```
