<template>
   <div class="MyHeader">
       <span class="left">
           <em>注册</em>&nbsp;&nbsp;|&nbsp;&nbsp;<em>登陆</em>
       </span>
       <btn>APP下载</btn>
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
    position: relative;
}
</style>