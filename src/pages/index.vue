<template>
    <div>
        <h1>Index</h1>
        <PropsSample :props-message="propsMessage" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const propsMessage = '親からのメッセージ';
        return {
            propsMessage
        };
    }
});
</script>