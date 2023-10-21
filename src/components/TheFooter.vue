<template>
  <footer class="footer">
    <the-logo />
    <ul class="footer__list">
      <li
          v-for="item of main.menu"
          :key="item.label"
          class="footer__item"
      >
        <a
            :href="item.link"
            class="footer__link text text-lg"
        >
          {{item.label}}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import {useMainStore} from "@/store/mainStore";
const main = useMainStore()

</script>

<style lang="scss">
.footer {
  @include container;
  background: $blue-10;

  margin-top: 40px;

  padding-top: 100px;
  padding-bottom: 20px;

  border-radius: 30px 30px 0 0;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__list {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: flex-end;
    gap: 30px;

    @media (max-width: 768px) {
      margin-top: 30px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }


  &__link {
    color: $black-100;
    text-decoration: none;
  }
}
</style>
