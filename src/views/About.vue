<template>
    <div class="wrapper">
        <div class="about"><h1>show base component.</h1></div>
        <button @click="showConfirm">confirm</button>
        <confirm
            ref="confirm"
            @confirm="clickConfirm"
            text="this is a confirm."
        ></confirm>
    </div>
</template>
<script>
import confirm from '@/components/base/confirm/confirm'
export default {
    components: {
        confirm,
    },
    methods: {
        clickConfirm() {
            console.log('click confirm btn.')
        },
        showConfirm() {
            this.$refs.confirm.show()
        },
    },
}
</script>
<style lang="scss" scoped>
.wrapper {
    min-height: 100vh;
}
</style>
