<template>
    <div>
        {{ propsMessage }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        propsMessage: {
            propsMessage: String,
            required: true
        }
    }
});
</script>