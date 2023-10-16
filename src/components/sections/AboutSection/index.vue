<template>
  <section-layout>
    <template #title>
      About us
    </template>
    <template #subtitle>
      Where did our story begin?
    </template>
    <template #body>
      <about-list>
        <about-card v-for="item of aboutText">
          <template #text>
            {{item.text}}
          </template>
        </about-card>
      </about-list>
    </template>
  </section-layout>
</template>

<script setup>
import AboutCard from "@/components/sections/AboutSection/AboutCard.vue";
import AboutList from "@/components/sections/AboutSection/AboutList.vue";
import SectionLayout from "@/layouts/SectionLayout.vue";

const aboutText = [
  {
    title: 'Where did our story begin?',
    text: 'Our company, PtashSoftwareStaff, emerged from a bold idea to challenge conventional approaches to technology work.'
  },
  {
    title: 'In our three years of existence, we\'ve come a long way.',
    text: 'Our team has grown alongside our projects, earning the trust of our clients through our efficiency and creativity. We are not just a company; we are a team of experts who understand your needs and are always ready to find the best path to their solution.'
  },
  {
    title: 'Join us on this exciting journey!',
    text: 'Our roots extend deep into technology, but our vision is always forward-looking. We take pride in how, together with you, we can shape the future in the IT industry. We aspire to be your trusted partners in the world of innovation and technology, and we\'re ready to continue reaching new heights together.'
  },
]
</script>
