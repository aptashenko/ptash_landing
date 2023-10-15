<template>
    <nav class="mobile-menu">
      <ul class="header__list">
        <li
            v-for="item of menu"
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
</template>

<script setup>
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
  margin-left: auto;
  width: 300px;
  height: 100%;
  background: #fff;
}
</style>
