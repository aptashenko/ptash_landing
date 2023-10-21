<template>
    <nav class="mobile-menu">
      <the-logo />
      <ul class="mobile-menu__list">
        <li
            v-for="item of main.menu"
            :key="item.label"
            class="mobile-menu__item"
            @click="modals.closeModal"
        >
          <a
              :href="item.link"
              class="mobile-menu__link text text-lg"
          >
            {{item.label}}
          </a>
        </li>
      </ul>
    </nav>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import {useMainStore} from "@/store/mainStore";
import {useModalStore} from "@/store/modalsStore";
const main = useMainStore()
const modals = useModalStore()
</script>

<style lang="scss">
.mobile-menu {
  width: 70%;
  height: 100%;
  background: #fff;

  padding: 30px;

  box-shadow: rgba(0, 0, 0, 0.1) -10px 0px 15px -3px;

  &__list {
    height: fit-content;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  &__link {
    text-decoration: none;
    color: $black-100;
  }
}

.overlay {
  place-items: flex-end !important;
}
</style>
