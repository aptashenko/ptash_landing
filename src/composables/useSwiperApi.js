import {ref} from "vue";

export const useSwiperApi = () => {
    const swiperController = ref(null)

    const initSwiper = (swipe) => {
        swiperController.value = swipe
    }

    const nextSlide = () => {
        swiperController.value.slideNext()
    }

    const prevSlide = () => {
        swiperController.value.slidePrev()
    }

    return {
        swiperController,
        initSwiper,
        nextSlide,
        prevSlide
    }
}
