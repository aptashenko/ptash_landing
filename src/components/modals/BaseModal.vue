<template>
  <div
      class="overlay"
      @click.self="modals.closeModal"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
  >
    <component
        :is="modals.modalState.component"
        v-bind="modals.modalState.props"
    />
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";
import {useModalStore} from "@/store/modalsStore";

const modals = useModalStore()

function keydownListener(event) {
  if (event.key === "Escape") modals.closeModal();
}

onMounted(() => {
  document.addEventListener("keydown", keydownListener);
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownListener);
});

</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(54, 58, 68, 0.4);
  z-index: 99;

  display: grid;
  place-items: center;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
