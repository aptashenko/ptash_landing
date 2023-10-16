<template>
    <nav class="mobile-menu">
      <the-logo />
      <ul class="mobile-menu__list">
        <li
            v-for="item of menu"
            :key="item.label"
            class="mobile-menu__item"
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

const menu = [
  {
    label: 'Home',
    link: '#',
  },
  {
    label: 'About us',
    link: '#',
  },
  {
    label: 'Services',
    link: '#',
  },
  {
    label: 'Benefits',
    link: '#'
  },
  {
    label: 'Reviews',
    link: '#'
  }
]
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
