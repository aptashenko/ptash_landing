<template>
  <component
      :is="tag"
      :class="[mainClass]"
  >
    <template v-if="!label && icon">
      <svg-icon :name="icon.name" />
    </template>
    <template v-if="label && !icon">
      {{label}}
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
.default {
  border-radius: 6px;
  background: $velvet-100;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.20);
  color: #fff;
  padding: 12px 22px;
  border: none;
  cursor: pointer;

  transition: background .25s ease;

  &:hover {
    background: $velvet-90;
  }
}

.icon {
  background: $velvet-0;
  border: none;
  padding: 5px;
  border-radius: 30px;
}
</style>
