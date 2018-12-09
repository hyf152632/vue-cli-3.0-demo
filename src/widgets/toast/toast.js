;/ * toast.js * /
import ToastComponent from './toast.vue' // 引入组件

let $vm

export default {
    install(Vue, options) {
        options
        // 判断实例是否存在
        if (!$vm) {
            const ToastPlugin = Vue.extend(ToastComponent) // 创建一个“扩展实例构造器”

            // 创建 $vm 实例
            $vm = new ToastPlugin({
                el: document.createElement('div'), // 声明挂载元素
            })

            document.body.appendChild($vm.$el) // 把 toast 组件的 DOM 添加到 body 里
        }

        // 给 toast 设置自定义文案和时间
        let toast = (text, duration) => {
            $vm.text = text
            $vm.duration = duration

            // 在指定 duration 之后让 toast 消失
            setTimeout(() => {
                $vm.isShow = false
            }, $vm.duration)
        }

        // 判断 Vue.$toast 是否存在
        if (!Vue.$toast) {
            Vue.$toast = toast
        }

        Vue.prototype.$toast = Vue.$toast // 全局添加 $toast 事件
    },
}
