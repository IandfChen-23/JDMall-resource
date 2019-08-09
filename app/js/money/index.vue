<template lang="html">
    <div>
        <MSlider/>
        <my-money/>
        <lucky-draw/>
    </div>
</template>

<script>
import MSlider from "./MSlider"
import MyMoney from "./MyMoney"
import LuckyDraw from "./LuckyDraw"
export default {
    name: "MoneyProduct",
    components: {
        MSlider,
        MyMoney,
        LuckyDraw,
    },
}
</script>

<style lang="scss" scoped>

</style>
