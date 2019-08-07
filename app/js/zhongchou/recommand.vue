<template>
  <panel title="潮牌推荐" class="panel">
    <ul>
      <li v-for="item in recommands" :key="item.title">
        <img :src="item.src" />
        <div>{{item.title}}</div>
        <div>{{item.desc}}</div>
        <div>{{item.price}}</div>
      </li>
    </ul>
  </panel>
</template>
<script>
import Panel from "../core/panel";
export default {
  name: "QianDao",
  components: {
    Panel
  },
  data() {
    return {
      recommands: [
        {
          src: require("../../image/recommand0.jpg"),
          title: "银离子速干致冷抗菌T",
          desc: " 抗菌除臭 ",
          price: 20
        },
        {
          src: require("../../image/recommand1.jpg"),
          title: "银离子速干致冷抗菌T",
          desc: " 抗菌除臭 ",
          price: 20
        },
        {
          src: require("../../image/recommand2.jpg"),
          title: "银离子速干致冷抗菌T",
          desc: " 抗菌除臭 ",
          price: 20
        },
        {
          src: require("../../image/recommand0.jpg"),
          title: "银离子速干致冷抗菌T",
          desc: " 抗菌除臭 ",
          price: 20
        },
        {
          src: require("../../image/recommand1.jpg"),
          title: "银离子速干致冷抗菌T",
          desc: " 抗菌除臭 ",
          price: 20
        },
        {
          src: require("../../image/recommand2.jpg"),
          title: "银离子速干致冷抗菌T",
          desc: " 抗菌除臭 ",
          price: 20
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../css/element.scss";
.panel {
  @include panel;
  box-sizing: border-box;
  height: 800px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      &:nth-child(even) {
        box-sizing: border-box;
        padding: 20px;
        left: 0;
        img {
          width: 100%;
        }
      }
      &:nth-child(odd) {
        box-sizing: border-box;
        right: 0;
        padding: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

