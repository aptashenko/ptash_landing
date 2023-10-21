<template>
  <component
      :is="icon"
      :class="[typeof size === 'string' ? size : 'custom']"
      :style="{transform: `rotate(${rotate}deg)`}"
  />
</template>

<script setup>
import {defineAsyncComponent} from "vue";

const { name, size } = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md'
  },
  rotate: {
    type: String,
    default: '0'
  },
  custom: {
    type: Object,
  }
})

const icon = defineAsyncComponent(() => import(`../../assets/images/icons/${name}.vue`))
</script>

<style lang="scss" scoped>
.lg {
  width: 36px;
  height: 36px;
}

.md {
  width: 30px;
  height: 30px;
}

.sm {
  width: 24px;
  height: 24px;
}

.custom {
  width: v-bind('size.width');
  height: v-bind('size.height');
}
</style>
