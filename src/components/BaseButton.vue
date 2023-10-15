<template>
  <component
      :is="tag"
      :class="[mainClass]"
  >
    <template v-if="!label && icon">
      <svg-icon :name="icon.name" />
    </template>
  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
  }
})

const mainClass = computed(() => ({
  default: 'default',
  icon: 'icon'
})[props.type])
</script>

<style lang="scss" scoped>
.icon {
  background: $velvet-0;
  border: none;
  padding: 5px;
  border-radius: 30px;
}
</style>
