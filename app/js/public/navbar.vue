<template>
  <ul class="nav-content">
    <li>
      <router-link to="/" exact>
        <img src="../../image/home.png" />
        <p>首页</p>
      </router-link>
    </li>
    <li>
      <router-link to="/money" exact>
        <img src="../../image/money.png" />
        <p>理财</p>
      </router-link>
    </li>
    <li>
      <router-link to='baitiao' exact>
        <img src="../../image/baitiao.png" />
        <p>白条</p>
      </router-link>
    </li>
    <li>
      <router-link to='zhongchou' exact>
        <img src="../../image/zhongchou.png" />
        <p>众筹</p>
      </router-link>
    </li>
    <li>
      <router-link to='my' exact>
        <img src="../../image/my.png" />
        <p>我的</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "navbar"
};
</script>
<style lang="scss" >
@import "../../css/element.scss";
.nav-content {
  width: 100%;
  position:fixed;
  bottom: 0;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-content li {
  text-align: center;
  height: 118px;
}
.nav-content li img {
  width: 50%;
  height: 50%;
  margin-top: 20px;
}
.nav-content li p {
  font-size: 20px;
  color: #666;
  padding: 10px;
}
.router-link-active{
text-decoration: none;
}
a{
text-decoration: none;
}

</style>
