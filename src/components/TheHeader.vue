<template>
  <header class="header">
    <the-logo />
    <nav class="header__navigation">
      <ul class="header__list">
        <li
            v-for="item of main.menu"
            :key="item.label"
            class="header__item"
        >
          <a
              :href="item.link"
              class="header__link text text-lg"
          >
            {{item.label}}
          </a>
        </li>
      </ul>
    </nav>
    <base-button
        type="icon"
        :icon="{name: 'menu'}"
        class="header__burger"
        @click="openMobileMenu"
    />
  </header>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import ModalMobMenu from "@/components/modals/ModalMobMenu.vue";

import {useModalStore} from "@/store/modalsStore";
import {useMainStore} from "@/store/mainStore";

const modals = useModalStore()
const main = useMainStore()

const openMobileMenu = () => {
  modals.openModal({
    component: ModalMobMenu
  })
}
</script>

<style lang="scss">
.header {
  @include container;
  @include wrapper(100px);

  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  &__navigation {
    flex-grow: 1;

    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  &__burger {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 993px) {
      display: none;
    }
  }

  &__list {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: flex-end;
    gap: 30px;
  }

  &__link {
    color: $black-100;
    text-decoration: none;
  }
}
</style>
