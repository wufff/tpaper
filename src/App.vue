<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import './style/reset.css';
body, html, #app {
   width: 100%;
   height: 100%;
   font-size: 15px;
   background-color: #f1f1f1;
}
//==========布局
 .main {
   height: 100%;
   width: 100%;
   padding-bottom:52px;
   .list {
      width: 100%;
      height: 100%;
   }
 }
 .page {
   height: 100%;
   width: 100%;    
 }

//===========单件
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
    z-index: 100;
    .inner {
        text-align: center;
        line-height: 50px; 
     }    
    .moreBt {
          display: inline-block;
          width: 16px;
          height: 15px;
          margin-right: 10px; 
          img {
              width: 100%;
              height: 100%;
          }
       }    
   .space {
     font-size: 22px;
   }       
 }
 //模块开头
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
//试卷标题
  h4  {
    font-size: 15px;
    color:#000000;
    margin-bottom: 12px;
    max-height:36px;
    overflow: hidden;
  }
 .img {
   display: inline-block;
   img {
     width: 100%;
     height: 100%;
   }
 }
  .downlist {
      width: 100%;
      height: 100%;
       position: fixed;
       left:0;
       right:0;
       top:0;
       z-index: 90;
       background-color: rgba(0,0,0,0.5);
       padding-top: 96px;
       .content {
          background-color: #fff;
          padding: 12px 23px;
          .item {
              line-height: 36px;
              height: 36px;
              color:#919191;
              font-size: 16px;
              &.active {
                  color:#37aafd;
              }
          }
       }
  }



 .back {
    display: inline-block;
    width: 40px;
    height: 100%;
    padding-left: 20px;
    position: absolute;
    left:0px;
    bottom: 0;
 }
 .back-bt {
    width: 8px;
    height: 15px;
    position: relative;
    top:2px;
 }


.num_num {
    border-radius: 100%;
    background: red;
    text-align: center;
    line-height: 22px;
    position: absolute;
    font-size: 12px;
    min-width: 22px;
 }


.noneWarp {
    text-align: center;
    padding-top: 155px;
   .none_items {
          width: 108px;
          height: 85px;
          margin-bottom: 15px;
    }    
    .none_com {
        height: 72.5px;
        width: 101.5px;
        margin-bottom: 15px; 
    }
    .title{
        margin-bottom: 15px;
    }
    .goItem {
        color:#37aafd;
        font-size: 17px;
    }
 } 




 .test {
    padding: 16px;
    margin-top: 10px;
    background-color: #fff;
   .add-img { 
        width: 11px;
        height: 11px;
    }
   .add-img_y{
      width: 11px;
      height: 9px;
      margin-right: 3px;
   }    
    .title {
       margin-bottom: 8px;
    }
    .aswerbox {
         padding-left:12px; 
         .sort{
           position: absolute;
           left:2px;
         }
         .option {
           padding-left: 20px;
           display: block;
         }
         li {
           border-radius: 2px;
           // background-color: #a3d3f6;
           padding: 6px;
           position: relative;
         }
         margin-bottom: 30px;
       }     
     .bottom {
        padding-left: 15px;
        color:#919191;
        position: relative;
         .type{ 
            margin-right: 20px;
          }
        .addItemBt{
           position: absolute;
           right: 0;
           bottom: 0;
           border:1px solid #919191;
           border-radius: 2px;
           padding: 6px  9px;
        }
        .addItemBt_y{
           position: absolute;
           right: 0;
           bottom: 0;
           background-color: #37aafd;
           color: #fff;
           border-radius: 2px;
           padding: 6px  9px;           
        }
     }

   }









// ==================动画===========================
.up-enter-active, .up-leave-active {
     transition: .3s;
  }
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
     transform:translateY(30px);
     opacity: 0
}



.moveLeft-enter-active, .moveLeft-leave-active {
     transition: .3s;
}
.moveLeft-enter, .moveLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateX(100%);
}
</style>
