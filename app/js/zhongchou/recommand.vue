<template>
    <panel title="潮牌推荐" class="zhong-panel">
        <ul>
            <li v-for="item in recommands" :key="item.title">
                <img v-lazy="item.src" >
                <div class="title">{{ item.title }}</div>
                <div class="desc">{{ item.desc }}</div>
                <span class="price">{{ item.price }}</span>
                <button class="gouwu">加入购物车</button>
            </li>
        </ul>
    </panel>
</template>
<script>
import Panel from "../core/panel"
export default {
    name: "QianDao",
    components: {
        Panel,
    },
    data() {
        return {
            recommands: [
                {
                    src: require("../../image/recommand0.jpg"),
                    title: "银离子速干致冷抗菌T",
                    desc: " 抗菌除臭 ",
                    price: 19.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米",
                    desc: " 五谷稻米 ",
                    price: 29.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 纯真酸奶 ",
                    price: 39.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "驱鼠黑科技空间驱鼠器",
                    desc: " 国际领先 ",
                    price: 199.99,
                },
                {
                    src: require("../../image/recommand4.jpg"),
                    title: "多功能迷你剃须刀",
                    desc: " 值得拥有 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand0.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand4.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand3.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
                {
                    src: require("../../image/recommand2.jpg"),
                    title: "银离子高温杀菌酸奶",
                    desc: " 抗菌除臭 ",
                    price: 59.99,
                },
                {
                    src: require("../../image/recommand1.jpg"),
                    title: "纯天然五谷香米T",
                    desc: " 抗菌除臭 ",
                    price: 49.99,
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../../css/element.scss";
.zhong-panel {
  @include panel;
  box-sizing: border-box;

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      margin-bottom: 10px;
      &:nth-child(even) {
        box-sizing: border-box;
        padding: 0 20px;
        left: 0;
        img {
          width: 100%;
        }
      }
      &:nth-child(odd) {
        box-sizing: border-box;
        right: 0;
        padding: 0 20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
.title {
  margin-top: 8px;
  font-size: 14px !important;
  font-weight: 800;
}
.desc {
  padding: 10px 0 0 0;
  color: #666;
  font-size: 12px !important;
}
.price {
  padding: 0;
  color: rgb(245, 47, 52);
  font-size: 20px !important;
}
img[lazy="loading"] {
  transform: scaleX(0.3) scaleY(0.5);
}
img[lazy="loaded"] {
  animation: appear 0.3s;
  animation-fill-mode: both;
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.gouwu {
  border-radius: 1.04688rem;

  text-align: center;
  font-size:18px;
  color: #fff;
  letter-spacing: 0;
  background-image: linear-gradient(-129deg, #ff6b00, #ff6f00);
  width: 3rem;
  height: 1.2rem;
  float:right;
}
</style>

