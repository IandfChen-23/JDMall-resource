<template lang="html">
    <div>
        <MSlider/>
        <my-money/>
    </div>
</template>

<script>
import MSlider from "./MSlider"
import MyMoney from "./MyMoney"
export default {
    name: "MoneyProduct",
    components: {
        MSlider,
        MyMoney,
    },
}
</script>

<style lang="scss" scoped>

</style>
