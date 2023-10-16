<template>
  <div
      class="overlay"
      @click.self="handleClose"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
  >
    <transition name="slide-horizontal-to-left" appear mode="out-in">
      <component
          v-show="show"
          :is="modals.modalState.component"
          v-bind="modals.modalState.props"
      />
    </transition>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useModalStore} from "@/store/modalsStore";
import {useTimeOut} from "@/composables/useTimeOut";
const show = ref(false)
const modals = useModalStore()
const showModalWindow = () => {
  show.value = !show.value
}

const { setTimeOut:onOpen } = useTimeOut(300, showModalWindow)
const { setTimeOut:onClose } = useTimeOut(300, modals.closeModal)

const handleClose = () => {
  showModalWindow()
  onClose()
}


function keydownListener(event) {
  if (event.key === "Escape") modals.closeModal();
}

onMounted(() => {
  onOpen()
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
