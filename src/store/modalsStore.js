import { defineStore } from "pinia";
import { ref } from "vue";

const basicState = { component: null, props: {} };

export const useModalStore = defineStore("ModalStore", () => {
    const modalState = ref(basicState)

    let resolve;
    let reject;

    const openModal = (data) => {
        const {component, props} = data;

        const modalPromise = new Promise((ok, fail) => {
            resolve = ok;
            reject = fail
        })

        modalState.value = {component, props: props || {}}

        if (document.body) {
            document.body.style.overflow = 'hidden'
        }

        return modalPromise

    };
    const closeModal = () => {
        resolve(true)
        modalState.value = basicState;

        if (document.body) {
            document.body.style.overflow = "auto";
        }
    };


    return {
        modalState,
        openModal,
        closeModal,
    };
});
