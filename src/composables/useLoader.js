import {ref} from "vue";

export const useLoader = () => {
    const isLoading = ref(false)

    const loader = value => {
        isLoading.value = value
    }

    return {
        isLoading,
        loader
    }
}
