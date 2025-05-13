import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0) // state
    const name = ref('Eduardo') // state
    const doubleCount = computed(() => count.value * 2) // getter

    // actions
    function increment() {
        count.value++
    }

    return { count, name, doubleCount, increment }
})

// Option API Example
// export const useCounterStore = defineStore('counter', {
//     state: () => ({ count: 0, name: 'Eduardo' }),
//     getters: {
//       doubleCount: (state) => state.count * 2,
//     },
//     actions: {
//       increment() {
//         this.count++
//       },
//     },
//   })