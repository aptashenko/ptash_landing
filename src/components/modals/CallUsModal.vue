<template>
  <div class="call-us-modal">
    <div class="call-us-modal__head">
      <base-button
          type="icon"
          :icon="{name: 'cross'}"
          class="call-us-modal__close"
          @click="modals.closeModal"
      />
    </div>
    <div
        v-if="!formSended"
        class="call-us-modal__form"
    >
      <h2 class="call-us-modal__title">Please, contact us</h2>
      <div class="call-us-modal__fields">
        <base-input
            v-for="input of inputs"
            v-model="input.value"
            :key="input.id"
            :id="input.id"
            :placeholder="input.placeholder"
            :label="input.label"
            :required="input.required"
            :error="input.error"
            variant="white"
            @input="changeInputValue(input.id)"
        />
      </div>
      <base-button
          label="Send"
          :disabled="!formIsValid || sending"
          class="call-us-modal__button"
          @click="sendRequest"
      />
    </div>
    <div
        v-else
        class="call-us-modal__success"
    >
      <h2 class="call-us-modal__title">Thank you!</h2>
      <div class="call-us-modal__image">
        <svg-icon
            name="success"
            :size="{width: '150px', height: '150px'}"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import {reactive, computed, ref, watch} from "vue";
import useVuelidate from "@vuelidate/core";
import {email, maxLength, minLength, required, numeric} from '@vuelidate/validators';
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import {useModalStore} from "@/store/modalsStore";
import {useLoader} from "@/composables/useLoader";
import SvgIcon from "@/components/BaseComponents/SvgIcon.vue";
const {isLoading:sending, loader:setSending} = useLoader()
const modals = useModalStore()
const inputs = reactive({
  name: {
    id: 'name',
    label: 'Name',
    placeholder: 'Your name',
    value: '',
    error: null,
    required: true
  },
  phone: {
    id: 'phone',
    label: 'Phone number',
    placeholder: 'Your phone',
    value: '',
    error: null
  },
  email: {
    id: 'email',
    label: 'Email',
    placeholder: 'Your email',
    value: '',
    error: null,
    required: true
  },
})
const formSended = ref(false)
const validateInfo = async (form, key) => {
  if (v$[key]) {
    await v$[key].value.$validate()
    form[key].error = v$[key].value.$error ? v$[key].value.$errors[0].$validator : '';
  }
}

const changeInputValue = async (key) => {
  await v$[key].value.$validate()
  inputs[key].error = v$[key].value.$error ? v$[key].value.$errors[0].$validator : '';
};
const validations = {
  name: {
    value: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20),
    },
  },
  email: {
    value: {
      required,
      email,
      minLength: minLength(5),
      maxLength: maxLength(40),
    }
  },
  phone: {
    value: {
      numeric,
      minLength: minLength(5)
    }
  }
};
const v$ = useVuelidate(validations, inputs).value;

const sendRequest = () => {
  setSending(true)
  const values = Object.keys(inputs)

  values.forEach(key => {
    validateInfo(inputs, key)
  })

  new Promise((res, rej) => {
    setTimeout(() => {
      res(formSended.value = true)
    }, 1000)
  })
}
const formIsValid = computed(() => {
  const inputValues = Object.values(inputs)
  const noErrors = inputValues.every(input => !input.error)
  const requiredValues = inputValues.filter(input => input.required)
  const allRequiredHasData = requiredValues.every(input => input.value)
  return noErrors && allRequiredHasData
})

watch(formSended, (newValue) => {
  if(newValue) {
    setTimeout(() => {
      modals.closeModal()
    }, 2000)
  }
})
</script>

<style lang="scss">
.call-us-modal {
  background: #fff;
  border-radius: 25px;
  min-width: 400px;

  @media (max-width: 480px) {
    min-width: 300px;
  }

  &__head {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
  }

  &__close {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  &__title {
    color: #353434;
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 2px;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px 20px;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__image {
    display: grid;
    place-items: center;
    padding: 20px 40px;
  }
}
</style>
