<script setup>
    const props = defineProps({
        btnText: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <button class="px-3 py-3 text-lg  bg-blue-800 text-white rounded-lg">
        {{ btnText }}
    </button>
</template>