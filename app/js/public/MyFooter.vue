<template>
  <ul class="footer-content">
    <li class="info">Copyright © 2004-2018 京东JD.com 版权所有</li>
    <li class="info">投资有风险，购买需谨慎</li>
    <li class="info">京东金融用户注册协议</li>
    <li class="info">京东金融隐私政策</li>
  </ul>
</template>
<script>
import Panel from "../core/panel";
export default {
  name: "MyFooter",
  components: {
    Panel
  }
};
</script>
<style lang="scss">
@import "../../css/element.scss";

.footer-content {
  height: 420px;
  background: #f5f5f5;
  margin-bottom: 10px;
  @include flex;
  font-size: 24px;
  line-height: 1.6;
  padding: 12px 16px;
  text-align: center;
  color: #999;
  position: relative;

  .info {
    padding: 18px;
    border-top: 1px solid #ddd;
  }
}
</style>

