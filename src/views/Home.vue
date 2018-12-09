<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <input v-model="obj.a" /> <button @click="obj.a++">修改</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld,
    },
    data() {
        return {
            obj: {
                a: 1,
            },
        }
    },
    created() {
        //  ...
    },
    watch: {
        obj: {
            handler: function(newVal, oldVal) {
                console.log(newVal, oldVal)
            },
            deep: true,
            immediate: true,
        },
    },
}
</script>
