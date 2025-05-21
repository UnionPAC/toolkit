<template>
    <span :class="[wrapperClass]" :style="wrapperStyle">
        <slot name="before">
           <span :class="[beforeClass]">{{ staticTextBefore }}&nbsp;</span>
        </slot>

        <transition :name="animationName" mode="out-in">
            <span
            :key="currentWord"
            :class="['text-color-purple', wordClass]"
            :style="wordStyle"
            style="display: inline-block;"
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

    console.log('still working?')

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

<style>
</style>