<template>
  <default-layout>
    <main-section />
    <about-section />
    <services-section />
    <benefits-section />
    <reviews-section />
  </default-layout>
  <transition name="local-fade" appear mode="out-in">
    <base-modal
        v-if="modals.modalState.component"
    />
  </transition>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseModal from "@/components/modals/BaseModal.vue";
import MainSection from "@/components/sections/MainSection.vue";
import AboutSection from "@/components/sections/AboutSection/index.vue";
import ServicesSection from "@/components/sections/ServicesSection/index.vue";
import BenefitsSection from "@/components/sections/BenefitsSection/index.vue";
import ReviewsSection from "@/components/sections/ReviewsSection/index.vue";

import {useModalStore} from "@/store/modalsStore";

const modals = useModalStore()
</script>

<style lang="scss">
body {
  background: $velvet-0;
}
</style>

