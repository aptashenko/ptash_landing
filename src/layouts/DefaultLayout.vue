<template>
  <the-header />
  <slot />
  <the-footer />
</template>
<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
