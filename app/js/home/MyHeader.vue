<template>
   <div class="MyHeader">
       <span class="left">
           <em>注册</em>&nbsp;&nbsp;|&nbsp;&nbsp;<em>登陆</em>
       </span>
       <btn class="right">APP下载</btn>
   </div>
</template>
<script>
import btn from '../core/btn'
export default {
    components:{
        btn
    },
}
</script>
<style lang='scss'>
@import '../../css/element.scss';
 .MyHeader{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    font-size: 32px;
    background: url(../../image/timg.jpg) #fff center no-repeat;
    background-size: auto 140%;
    z-index: 100 ;
    .left{
        font-size: 28px;
        height: 30px;
        margin: 17px 0 0 18px;
    }
    .right{
        font-size: 24px;
        float: right;
        line-height: 56px;
        height: 56px;
        border-width: 0;
        border-radius: 8px;
        margin: 20px 40px 0 0;
    }
}
</style>