<template>
  <div class="section">
    <h2 v-if="$slots.title" class="section__title title title-xs">
      <slot name="title" />
    </h2>

    <div v-if="$slots.body" class="section__body">
      <h2 v-if="$slots.subtitle" class="section__subtitle title title-lg">
        <slot name="subtitle" />
      </h2>
      <h3 v-if="$slots.description" class="section__text text text-lg">
        <slot name="description" />
      </h3>
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss">
.section {
  color: $orange-100;
  margin-top: 20px;

  &__title {
    @include container;
    margin-bottom: 20px;
  }

  &__subtitle {
    text-align: center;
    color: $black-100;
    margin-bottom: 30px;
  }

  &__body {
    @include container;

    @include wrapper(30px);
  }

}
</style>
