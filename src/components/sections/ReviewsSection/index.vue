<template>
  <section-layout id="reviews">
    <template #title>
      Reviews
    </template>
    <template #subtitle>
      Reviews
    </template>
    <template #body>
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          :breakpoints="swiperBreakpointsOptions"
          @swiper="initSwiper($event)"
      >
        <swiper-slide
            v-for="review of reviewsList"
        >
          <review-item
              :review="review"
          />
        </swiper-slide>
      </Swiper>
    </template>
  </section-layout>
</template>

<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import {useSwiperApi} from "@/composables/useSwiperApi";
import ReviewItem from "@/components/sections/ReviewsSection/ReviewItem.vue";
const { initSwiper, nextSlide, prevSlide } = useSwiperApi()

const swiperBreakpointsOptions = {
  '768': {
    slidesPerView: 2,
  },
}

const reviewsList = [
  {
    id: 1,
    name: 'Derek',
    ava: '1.jpg',
    text: 'PtashSoftwareStaff is a reliable and experienced partner for our company. They are always ready to consider our needs and provide high-quality IT solutions. We are very satisfied with the collaboration!',
  },
  {
    id: 2,
    name: 'Martin',
    ava: '2.jpg',
    text: 'We have been working with PtashSoftwareStaff for many years and always receive professional support and quick responses to our needs. Their experts are true professionals in the field of IT.',
  },
  {
    id: 3,
    name: 'Anna',
    ava: '3.jpg',
    text: 'PtashSoftwareStaff provides the best web development services. Our new website looks fantastic and functions perfectly. Highly recommended!',
  },
]

</script>

<style lang="scss"></style>
