<script lang="ts" setup>
    defineProps<{
        fillColor: string
    }>()
</script>

<template>
    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2311_6721)">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" :fill="fillColor"/>
        </g>
    </svg>
</template>