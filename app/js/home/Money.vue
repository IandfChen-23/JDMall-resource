<template>
  <panel title="理财精选" class="panel">
    <section class="content">
      <dl class="item" v-for="item in items" :key="item.title">
        <dt>{{item.title}}<span class="sub">{{item.sub}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </panel>
</template>
<script>
import Panel from "../core/panel";
export default {
  name: "Money",
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          title: "定期理财",
          sub: "理财首选",
          rate: "5.6%",
          text: "历史年化回报率"
        },
        {
          title: "小白理财",
          sub: "理财首选",
          rate: "6.5%",
          text: "历史年化回报率"
        },
        {
          title: "小白基金",
          sub: "理财首选",
          rate: "7.6%",
          text: "历史年化回报率"
        },
        {
          title: "定期理财",
          sub: "理财首选",
          rate: "8.2%",
          text: "历史年化回报率"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        @include flex(row);
        justify-content: space-around;
        box-sizing: border-box;
        .item{
            position: relative;
            width:50%;
            padding: 34px 16px;
            box-sizing: border-box;
            dt{
                font-size: 30px;
                line-height: 42px;
                color: #333;
                span{
                    font-size: 22px;
                    color: #ff5155;
                    border: 1px solid #ff5155;
                    padding: 0 8px;
                    vertical-align: 1px;
                    margin-left: 10px;
                }
            }
            dd{
                &:nth-child(even){
                    font-weight: 700;
                    color: #ff5155;
                    padding: 8px;
                    vertical-align: 1px;
                    margin-left: 2px;
                }
                &:nth-child(odd){
                    font-size: 24px;
                    color: #666;
                    padding:  8px;
                    vertical-align: 1px;
                    margin-left: 2px;
                }
            }
        }
    }
}
</style>

