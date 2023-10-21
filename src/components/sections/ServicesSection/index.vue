<template>
  <section-layout id="services">
    <template #title>
      Our services
    </template>
    <template #subtitle>
      Services
    </template>
    <template #body>
      <cards-list>
        <service-card
            v-for="item of servicesList"
            :key="item.id"
            :icon="item.icon"
        >
          <template #title>
            {{item.title}}
          </template>
          <template #description>
            {{item.description}}
          </template>
        </service-card>
      </cards-list>
    </template>
  </section-layout>
</template>

<script setup>
import SectionLayout from "@/layouts/SectionLayout.vue";
import ServiceCard from "@/components/sections/ServicesSection/ServiceCard.vue";
import CardsList from "@/components/sections/CardsList.vue";

const servicesList = [
  {
    id: 1,
    icon: 'consulting.png',
    title: 'IT consulting',
    description: 'Our expert team is ready to provide consultations on IT strategies and business process optimization. We will help you develop innovative solutions and choose the right technologies to achieve your goals.'
  },
  {
    id: 2,
    icon: 'outsoursing.png',
    title: 'IT outsourcing',
    description: 'Our expert team is ready to provide consultations on IT strategies and business process optimization. We will help you develop innovative solutions and choose the right technologies to achieve your goals.'
  },
  {
    id: 3,
    icon: 'developing.png',
    title: 'Website and App Development',
    description: 'Our team of professionals is ready to create modern and functional websites and mobile applications for your business. We develop solutions that align with your needs and contribute to achieving your goals.'
  },
]
</script>

<style lang="scss">

</style>
