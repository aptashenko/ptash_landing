<template>
  <default-layout>
    body
  </default-layout>
  <base-modal
      v-if="modals.modalState.component"
  />
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseModal from "@/components/modals/BaseModal.vue";
import {useModalStore} from "@/store/modalsStore";

const modals = useModalStore()
</script>

<style scoped>
</style>

