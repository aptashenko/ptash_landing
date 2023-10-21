<template>
  <div v-if="label">
    <label class="label">
      {{label}}
      <span
          v-if="required"
          class="label-required"
      >
        (Required field)
      </span>
    </label>
    <div :class="mainClass">
      <svg-icon v-if="icon" :name="icon" />
      <input
          type="text"
          :value="modelValue"
          :class="`${mainClass}__input`"
          :placeholder="placeholder"
          @input="emit('update:modelValue', $event.target.value)"
      />
      <base-button
          v-if="modelValue"
          type="icon"
          :icon="{name: 'cross'}"
          class="close-btn"
          @click="emit('update:modelValue', '')"
      />
    </div>
    <div v-if="error" class="error">
      <svg-icon
          class="icon"
          name="error"
      />
      <span>{{ errorText }}</span>
    </div>
    <p class="help-message">{{helpMessage}}</p>
  </div>
  <div v-else :class="mainClass">
    <svg-icon v-if="icon" :name="icon" />
    <input
        type="text"
        :value="modelValue"
        :class="`${mainClass}__input`"
        :placeholder="placeholder"
        @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import {computed, useAttrs} from "vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import SvgIcon from "@/components/BaseComponents/SvgIcon.vue";
import {getInputErrorMessage} from "@/utils/error-message";

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: ''
  },
  variant: {
    type: String,
    default: 'default'
  },
  id: {
    type: String,
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  helpMessage: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

const mainClass = computed(() => ({
  default: 'base-search-field',
  white: 'white'
}[props.variant]))

const borderColor = computed(() => props.error ? '#F8564B' : '#EBEAED')

const { placeholder } = useAttrs()

const emit = defineEmits(['update:modelValue'])

const errorText = computed(() => {
  const response = getInputErrorMessage(
      `${props.id}_${props.error}`,
      'Unknown error'
  );
  return response.message;
});
</script>

<style lang="scss" scoped>
.base-search-field {
  border-radius: 45px;
  background: #EEE9E2;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: 24px;
    height: 24px;
  }

  &__input {
    all: unset;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;

    width: 100%;

    &::placeholder {
      all: unset;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      color: rgba(0, 0, 0, 0.50);
    }

    &:focus-visible {
      outline: none;
      border: none;
    }
  }
}

.white {
  position: relative;
  border-radius: 100px;
  border: 2px solid v-bind(borderColor);
  background: #FFF;

  & .error {
    border-color: #F8564B;
  }

  &__input {
    all: unset;
    width: 100%;
    padding: 11px 20px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;

    &::placeholder {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.15;
      color: $gray-100;
    }

    &:active {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      border: none;
    }
  }
}

.label {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 7px;

  &-required {
    color: $gray-100;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-transform: none;
    letter-spacing: 0;
  }
}

.help-message {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 10px;
}

.error {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;

  & svg {
    width: 16px;
    height: 16px;
  }

  & span {
    color: #F8564B;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
  }
}

.close-btn {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
  width: 40px;
  height: 40px;
}
</style>
