<template>
  <section-layout id="benefits">
    <template #title>
      Our benefits
    </template>
    <template #subtitle>
      Benefits
    </template>
    <template #body>
      <cards-list class="benefits__desktop">
        <benefit-card
            v-for="item of benefitsList"
            :key="item.id"
            :icon="item.icon"
        >
          <template #title>
            {{ item.title }}
          </template>
          <template #text>
            {{ item.text }}
          </template>
        </benefit-card>
      </cards-list>
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          @swiper="initSwiper($event)"
          class="benefits__mobile"
      >
        <swiper-slide
            v-for="item of benefitsList"
            :key="item.id"
        >
          <benefit-card
              :icon="item.icon"
          >
            <template #title>
              {{ item.title }}
            </template>
            <template #text>
              {{ item.text }}
            </template>
          </benefit-card>
        </swiper-slide>
      </Swiper>
      <div class="benefits__nav">
        <base-button
            type="icon"
            :icon="{name: 'arrow'}"
            @click="prevSlide"
        />
        <base-button
            type="icon"
            :icon="{name: 'arrow', rotate: 180}"
            @click="nextSlide"
        />
      </div>
    </template>
  </section-layout>
</template>
<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";
import CardsList from "@/components/sections/CardsList.vue";
import BenefitCard from "@/components/sections/BenefitsSection/BenefitCard.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import {useSwiperApi} from "@/composables/useSwiperApi";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
const { initSwiper, nextSlide, prevSlide } = useSwiperApi()

const benefitsList = [
  {
    id: 1,
    icon: 'experience.png',
    title: 'Experience',
    text: 'With three years of successful work in the IT field, we have accumulated a rich experience in solving the most complex tasks and problems.'
  },
  {
    id: 2,
    icon: 'expertise.png',
    title: 'Expertise',
    text: 'Our team consists of highly qualified and professional IT specialists ready to tackle any task.'
  },
  {
    id: 3,
    icon: 'quality.png',
    title: 'Quality',
    text: 'We strive for the highest quality standards in everything we do. Your success is our success, and we do everything possible to guarantee the best results.'
  },
  {
    id: 4,
    icon: 'effective.png',
    title: 'Efficiency',
    text: 'We understand that time is money. Therefore, we always adhere to deadlines and offer efficient solutions.'
  },
  {
    id: 5,
    icon: 'puzzle.png',
    title: 'Customized Approach',
    text: 'We understand that every client is unique. That\'s why we offer an individualized approach and solutions that meet your needs.'
  },
  {
    id: 6,
    icon: 'wide.png',
    title: 'Wide Range of Services',
    text: 'We offer a wide range of IT services, including development, consulting, testing, and many others to meet all your needs.'
  },
]
</script>

<style lang="scss">
.benefits {
  &__desktop {

    @media (max-width: 480px) {
      display: none;
    }
  }

  &__mobile {
    @media (min-width: 481px) {
      display: none;
    }
  }

  &__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 481px) {
      display: none;
    }

    & button {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
