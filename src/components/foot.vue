<template>
     <ul class="foot">
         <router-link to="/" exact tag="li">
              <div class="icon icon-home"></div>
              <div class="name">首页</div>
         </router-link>   
         <router-link to="/items" tag="li">
              <div class="icon icon-items"></div>
              <div class="name">题库</div>
          </router-link>    
          <router-link to="/cart" tag="li">
              <div class="icon icon-cart"></div>
              <div class="name">试题篮</div>
              <span class="num_num">{{num_num}}</span>
              <div class="ball-container">
                <div v-for="(item,index) in balls" :key="index">
                  <transition 
                  @after-enter="afterEnter" 
                  @enter="enter" 
                  @before-enter="beforeEnter">
                    <div v-show="item.show" class="ball">
                      <div class="inner inner-hook"></div>
                    </div>
                  </transition>                     
                </div>
              </div>
          </router-link>  
          <router-link to="/my" tag="li">
              <div class="icon icon-my"></div>
              <div class="name">我的</div>
          </router-link>                                   
     </ul>
</template>
<script>
// v-on:before-enter="beforeEnter" （动画进入前）
// v-on:enter="enter"（动画进入时）
// v-on:after-enter="afterEnter" （动画进入完后）
import  { mapState ,mapGetters }  from 'vuex'

function createBalls (){
    let ret = [];
    for (let i = 0;i<10;i++){
       ret.push({show:false})
    }
    return ret;
}

export default {
  name: 'tree',
  data() {
    return {
      balls:createBalls(),
      dropBalls:[]          
    }
  },
  created(){
    
  },
  computed:{
     numGets(){
        return this.$store.getters.filterNum
     },
     ...mapState(['num_num']),
     ...mapGetters(['filter_Num'])
  },
  methods:{
     drop(el){
       for (let i = 0; i<this.balls.length;i++){
         const ball = this.balls[i];
         if(!ball.show){
            ball.show=true;
            ball.el = el;
            this.dropBalls.push(ball);
            return
         }
       }
     },
     beforeEnter(el){
        var html = document.querySelector("html");
        var  fontSize = html.style.fontSize;
        var reg = /\d+/;
        var rem = fontSize.match(reg)[0];
        const ball = this.dropBalls[this.dropBalls.length -1];
        const rect = ball.el.getBoundingClientRect();
        var  AdaX =  4.8 * rem;
        var AdaY = 0.586667 * rem;
        const x = rect.left - AdaX;
        const y = -(window.innerHeight - rect.top - AdaY);
        el.style.display = '';
        el.style.transform  = `translate3d(0,${y}px,0)`;
        const inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.transform = `translate3d(${x}px,0,0)`;
     },
     enter(el,done){
       this._reflow = document.body.offsetHeight  //触发重绘
       el.style.transform = `translate3d(0,0,0)`;
       const inner = el.getElementsByClassName('inner-hook')[0];
       inner.style.transform = `translate3d(0,0,0)`;
       el.addEventListener("transitionend",done) //监听结束触发下个钩子
     },
     afterEnter(el){
        const ball = this.dropBalls.shift();
        if(ball){
           ball.show = false;
           el.style.display = "none"
        }
     },
  }
}
</script>
<!-- 4.8rem;
 0.586667rem; -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .foot {
       position: fixed;
       z-index: 80;
       bottom: 0;
       width: 100%;
       left: 0;
       right: 0;
       border-top: 1PX solid #f1f1f1;
       background-color: #fff;
      li {
         float: left;
         width: 25%;
         text-align: center;
         position: relative;
         .name { font-size: 11px; margin-bottom: 3px;color:#5e5e5e;}
         .icon { width: 26px;height:26px;background-repeat: no-repeat;background-size: contain;margin: 8px auto 3px auto;}
         .icon-home { background-image: url('../assets/home.png'); }
         .icon-items { background-image: url('../assets/items.png'); }
         .icon-cart { background-image: url('../assets/cart.png'); }
         .icon-my { background-image: url('../assets/my.png');}
         .num_num { top:3px;right: 18px;color:#fff; }
          &.router-link-active {
             .icon-home { background-image: url('../assets/home_a.png'); }
             .icon-items { background-image: url('../assets/items_a.png'); }
             .icon-cart { background-image: url('../assets/cart_a.png'); }
             .icon-my { background-image: url('../assets/my_a.png');}
             .name { color: #000000;font-weight: bold; }
          }         

      }
   }

 

.ball-container {
   .ball {
      position:fixed;
      left:220px;
      bottom:22px;
      z-index:900;
      transition:all 0.4s cubic-bezier(0.49,-0.29,0.75,0.41);
      .inner {
          width:16px;
          height:16px;
          border-radius: 50%;
          background:rgb(0,160,220);
          transition:all 0.4s linear;
      }      
   }
}
  
</style>
