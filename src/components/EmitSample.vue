<template>
    <button @click="sendToParent">クリックして親に送信</button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['sendEvent']);

function sendToParent() {
    emit('sendEvent', 'こんにちは、親コンポーネント!');
}
</script>