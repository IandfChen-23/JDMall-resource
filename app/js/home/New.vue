<template>
  <panel title="新手特权" class="panel">
    <section class="content">
      <div class="item">
        <h4>
          下载app
          <span style="color:red;">送888元礼包</span>
        </h4>
        <p style="padding:20px;font-size:30px">新手专享</p>
        <img src="../../image/enter2.png" alt />
      </div>
      <div class="item">
        <ul>
          <li>
            <img src="../../image/enter1.png" alt />
            <h4>
              <span style="color:red;">领128元礼包</span>
            </h4>
            <p style="padding:20px;font-size:30px">新手下载</p>
          </li>
          <li>
            <img src="../../image/enter0.png" alt />
            <h4>
              打白条
              <span style="color:red;">享免息</span>
            </h4>
            <p style="padding:20px;font-size:20px">立即开通享好礼</p>
          </li>
        </ul>
      </div>
    </section>
  </panel>
</template>
<script>
import Panel from "../core/panel";
export default {
  name: "New",
  components: {
    Panel
  }
};
</script>
<style lang="scss" scoped>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include list(row);
    box-sizing: border-box;
    font-size: 26px;
    text-align: center;
    .item {
      &:first-child {
        width: 50%;
        padding: 32px 20px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      &:last-child{
          ul {
        li {
          height: 144px;
          padding: 32px 0 ;
          box-sizing: border-box;
          img {
            width: 80px;
            height: 80px;
            position: absolute;
            right: 20px;
          }
        }
      }
      }
    
    }
  }
}
</style>

