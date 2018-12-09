<template>
    <transition name="confirm-fade">
        <div class="confirm" v-show="showFlag" @click.stop>
            <div class="confirm-wrapper">
                <div class="confirm-content">
                    <p class="text">{{ text }}</p>
                </div>
                <div class="operate">
                    <div @click="cancel" class="operate-btn left">
                        {{ cancelBtnText }}
                    </div>
                    <div @click="confirm" class="operate-btn">
                        {{ confirmBtnText }}
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        text: String,
        confirmBtnText: {
            type: String,
            default: '确定',
        },
        cancelBtnText: {
            type: String,
            default: '取消',
        },
    },
    data() {
        return {
            showFlag: false,
        }
    },
    methods: {
        show() {
            this.showFlag = true
        },
        hide() {
            this.showFlag = false
        },
        cancel() {
            this.hide()
            this.$emit('cancel')
        },
        confirm() {
            this.hide()
            this.$emit('confirm')
        },
    },
}
</script>
<style lang="scss" scoped>
.confirm {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
}
.confirm-wrapper {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate3d(-50%, -50%, 0);

    .operate {
        display: flex;
        .operate-btn {
        }
        .left {
            margin-right: 20px;
        }
    }
}
.confirm-fade-enter-active {
    animation: confirm-fadein 0.3s;
    .confirm-content {
        animation: confirm-zoom 0.3s;
    }
}
@keyframes confirm-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes confirm-zoom {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
