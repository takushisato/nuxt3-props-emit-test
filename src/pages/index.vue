<template>
    <div>
        <h1>Index</h1>
        <PropsSample :props-message="propsMessage" />
        <EmitSample @sendEvent="handleEvent" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import EmitSample from '../components/EmitSample.vue';
export default defineComponent({
    setup() {
        const propsMessage = '親からのメッセージ';
        function handleEvent(message) {
            console.log('子コンポーネントからのメッセージ:', message);
        }
        return {
            propsMessage,
            handleEvent,
        };

    },
    components: { EmitSample }
});
</script>