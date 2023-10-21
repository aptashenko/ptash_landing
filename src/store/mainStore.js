import { defineStore } from "pinia";

export const useMainStore = defineStore('MainStore', () => {
    const menu = [
        {
            label: 'Home',
            link: '#',
        },
        {
            label: 'About us',
            link: '#about',
        },
        {
            label: 'Services',
            link: '#services',
        },
        {
            label: 'Benefits',
            link: '#benefits'
        },
        {
            label: 'Reviews',
            link: '#reviews'
        }
    ]

    return {
        menu
    }
})
