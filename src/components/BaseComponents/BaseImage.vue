<template>
  <div
      v-if="imageUrl"
      class="image-wrapper"
  >
    <base-loader v-show="isLoading" />
    <img
        v-show="!isLoading"
        :src="imageUrl"
        :alt="alt"
        @load="handleLoad"
        class="image"
    >
  </div>
</template>

<script setup>
import { useLoader } from "@/composables/useLoader.js";
import BaseLoader from "@/components/TheLoader.vue";
import {computed} from "vue";
const { isLoading, loader } = useLoader();

const { src, alt } = defineProps({
  src: {
    type: Object,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})

loader(true)
const imageUrl = computed(() => {
  if (src?.subdir) {
    return new URL(`../../assets/images/${src?.dir}/${src?.subdir}/${src?.name}`, import.meta.url).href
  }
  if (src?.dir && !src?.subdir) {
    return new URL(`../../assets/images/${src?.dir}/${src?.name}`, import.meta.url).href
  }
  return new URL(`../../assets/images/${src?.name}`, import.meta.url).href
})


const handleLoad = () => {
  loader(false)
}

</script>

<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
