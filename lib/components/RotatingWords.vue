<template>
    <span :class="[wrapperClass]" :style="wrapperStyle">
        <slot name="before">
           <span :class="[beforeClass]">{{ staticTextBefore }}&nbsp;</span>
        </slot>

        <transition name="slide-up" mode="out-in" type="transition">
            <span
            :key="currentWord"
            :class="['inline-block', wordClass]"
            :style="wordStyle"
            >
                {{ currentWord }}
            </span>
        </transition>

         <slot name="after">
           <span :class="[afterClass]">&nbsp;{{ staticTextAfter }}</span>
        </slot>
    </span>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useSlots } from 'vue';

interface Props {
    words: string[];
    staticTextBefore?: string;
    staticTextAfter?: string;
    interval?: number;
    animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
    wrapperClass?: string;
    wrapperStyle?: string | Record<string, string>;
    beforeClass?: string;
    afterClass?: string;
    wordClass?: string;
    wordStyle?: string | Record<string, string>;
}

const props = withDefaults(defineProps<Props>(), {
    interval: 2000,
    animation: 'slide-up',
    wrapperClass: '',
    wrapperStyle: '',
    beforeClass: '',
    afterClass: '',
    wordClass: '',
    wordStyle: ''
})

const slots = useSlots()

const currentIndex = ref(0)
const currentWord = computed(() => props.words[currentIndex.value])
const animationName = computed(() => props.animation)

let intervalId: number | null = null

onMounted(() => {
    if (!props.staticTextBefore && !slots.before) {
        console.warn('[TextSwitcher]: No staticTextBefore or <slot name="before"> provided.')
    }

    if (!props.staticTextAfter && !slots.after) {
        console.warn('[TextSwitcher]: No staticTextAfter or <slot name="after"> provided.')
    }

    intervalId = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.words.length
    }, props.interval)
})

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.slide-left-enter-from {
    opacity: 0;
    transform: translateX(20px);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.slide-right-enter-from {
    opacity: 0;
    transform: translateX(-20px);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>