<template>
    <span :class="['flex items-baseline', wrapperClass]" :style="wrapperStyle">
        <!-- Static text before the animated word -->
        <slot name="before">
           <span :class="beforeClass">{{  staticTextBefore }}</span>
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
           <span :class="afterClass">{{  staticTextAfter }}</span>
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
</style>