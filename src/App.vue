<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
 .head {
    height: 50px;
    background-color: #37aafd;
    position: fixed;
    top:0;
    right: 0;
    color:#fff;
    left:0;
    line-height: 50px;
    font-size: 17px;
    padding: 0 15px;
 }
 .main {
   padding-top: 50px;
 }
 .img {
   display: inline-block;
   img {
     width: 100%;
     height: 100%;
   }
 }
 h3{
   font-size: 17px;
   height:44px;
   line-height: 44px;
   position: relative;
   border-bottom: 1px solid #e8e8e8;
   .more {
     position: absolute;
     right: 0;
     bottom: 0px;
   }
 }
</style>
