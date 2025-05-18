<template>
    <span :class="[wrapperClass]" :style="wrapperStyle">
        <!-- Static text before the animated word -->
        <slot name="before">
           <span :class="[beforeClass]">{{  staticTextBefore }}{{ ' ' }}</span>
        </slot>

        <!-- Animated word with transition -->
        <transition :name="animationName" mode="out-in">
            <span
            :key="currentWord"
            :class="['inline-block', wordClass]"
            :style="wordStyle"
            >
                {{ currentWord }}
            </span>
        </transition>

        <!-- Static text after the animated word -->
         <slot name="after">
           <span :class="[afterClass]">{{' '}}{{  staticTextAfter }}</span>
        </slot>
    </span>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useSlots } from 'vue';

const props = defineProps({
    words: {
        type: Array,
        required: true,
        validator: (val) => val.every(item => typeof item === 'string')
    },
    staticTextBefore: {
        type: String,
    },
    staticTextAfter: {
        type: String,
    },
    interval: {
        type: Number,
        default: 2000
    },
    animation: {
        type: String,
        default: 'slide-up',
        validator: (val) => ['fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right'].includes(val)
    },
    wrapperClass: {
        type: String,
        default: ''
    },
    wrapperStyle: {
        type: [String, Object],
        default: ''
    },
    beforeClass: {
        type: String,
        default: '',
    },
    afterClass: {
        type: String,
        default: ''
    },
    wordClass: {
        type: String,
        default: ''
    },
    wordStyle: {
        type: [String, Object],
        default: ''
    }
})

const slots = useSlots()

const currentIndex = ref(0)
const currentWord = computed(() => props.words[currentIndex.value])
const animationName = computed(() => props.animation)

let intervalId = null

onMounted(() => {

    if (!props.staticTextBefore && !slots.before) {
        console.warn('[TextSwitcher]: No staticTextBefore or <slot name="before"> provided.')
    }

    if (!props.staticTextAfter && !slots.after) {
        console.warn('[TextSwitcher]: No staticTextAfter or <slot name="after"> provided.')
    }

    intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.words.length
    }, props.interval)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<style>
/* Fade */
.fade-enter-active, .fade-leave-active { transition: opacity .4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

/* Slide Up */
.slide-up-enter-active, .slide-up-leave-active { transition: transform .4s ease, opacity .4s ease; }
.slide-up-enter-from { transform: translateY(100%); opacity: 0; }
.slide-up-enter-to { transform: translateY(0); opacity: 1; }
.slide-up-leave-from { transform: translateY(0); opacity: 1; }
.slide-up-leave-to { transform: translateY(-100%); opacity: 0; }

/* Slide Down */
.slide-down-enter-active, .slide-down-leave-active { transition: transform .4s ease, opacity .4s ease; }
.slide-down-enter-from { transform: translateY(-100%); opacity: 0; }
.slide-down-enter-to { transform: translateY(0); opacity: 1; }
.slide-down-leave-from { transform: translateY(0); opacity: 1; }
.slide-down-leave-to { transform: translateY(100%); opacity: 0; }

/* Slide Left */
.slide-left-enter-active, .slide-left-leave-active { transition: transform .4s ease, opacity .4s ease; }
.slide-left-enter-from { transform: translateX(100%); opacity: 0; }
.slide-left-enter-to { transform: translateX(0); opacity: 1; }
.slide-left-leave-from { transform: translateX(0); opacity: 1; }
.slide-left-leave-to { transform: translateX(-100%); opacity: 0; }

/* Slide Right */
.slide-right-enter-active, .slide-right-leave-active { transition: transform .4s ease, opacity .4s ease; }
.slide-right-enter-from { transform: translateX(-100%); opacity: 0; }
.slide-right-enter-to { transform: translateX(0); opacity: 1; }
.slide-right-leave-from { transform: translateX(0); opacity: 1; }
.slide-right-leave-to { transform: translateX(100%); opacity: 0; }
</style>