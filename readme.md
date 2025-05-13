# Vue State Management with Pinia

## What is State Management?
State management adalah cara kita mengelola data secara global yang agar bisa digunakan oleh komponen manapun dalam aplikasi kita. Dalam aplikasi Vue, kita bisa menggunakan **Pinia** untuk mengelola state.

## [What is Pinia?](https://pinia.vuejs.org/introduction.html#Why-should-I-use-Pinia-)
Pinia adalah library state management untuk Vue yang modern dan ringan. Pinia dirancang untuk bekerja dengan Vue 3 dan Composition API, memberikan API yang lebih sederhana dan lebih intuitif.

## 4 Core concepts in Pinia
- [**Store**](https://pinia.vuejs.org/getting-started.html#What-is-a-Store-): Tempat kita menyimpan state, actions, dan getters. Dalam 1 aplikasi kita bisa memiliki lebih dari 1 store.
- [**State**](https://pinia.vuejs.org/core-concepts/state.html#State): Data reaktif yang bisa kita share antarkomponen.
- [**Actions**](https://pinia.vuejs.org/core-concepts/actions.html#Actions): Fungsi yang bisa kita gunakan untuk mengubah state.
- [**Getters**](https://pinia.vuejs.org/core-concepts/getters.html): Computed properties dari state. 

## [When to use Pinia?](https://pinia.vuejs.org/getting-started.html#When-should-I-use-a-Store)
- Ketika kita memiliki data yang perlu di-share antarkomponen, untuk menghindari prop drilling.
- Ketika kita memiliki data yang perlu di-update dari beberapa komponen, untuk menghindari state yang tidak konsisten.
- Ketika kita memiliki data yang perlu di-cache, untuk menghindari fetch yang berulang-ulang.
- Ketika kita memiliki data yang perlu di-persist, untuk menghindari kehilangan data ketika aplikasi di-refresh.

## Demo

## [Instalation](https://pinia.vuejs.org/getting-started.html#Installation) 
Jika kita ingin menggunakan Pinia dari awal, kita bisa menginstall Pinia dengan menggunakan `npm create vite@latest` dan memilih menggunakan pinia.

Jika kita sudah memiliki project vue, kita bisa menginstall Pinia dengan `npm install pinia`

Jika sudah terinstall, kita bisa inisialisasi Pinia di dalam file `main.js` dengan cara :
1. Import `createPinia` dari `pinia`
2. buat instance Pinia dengan `createPinia()`
3. Gunakan `app.use(pinia)` untuk menginstall Pinia ke dalam aplikasi kita

## [Define a Store](https://pinia.vuejs.org/core-concepts/#Defining-a-Store)

Step by step untuk membuat store dengan Pinia:
1. Buat folder `stores` di dalam folder `src`
2. Buat file `counter.js` di dalam folder `stores`
3. Import `defineStore` dari `pinia`
4. Buat store dengan menggunakan `defineStore`
5. import `ref` & `computed` dari `vue`
6. Buat state,computed properties, function di dalam store
7. Return state, computed properties, dan function di dalam store
8. Export store yang udah dibuat
9. Import store di dalam komponen yang ingin kita gunakan
10. Destrkuktur store yang kita import dengan menggunakan `storeToRefs`
11. Gunakan state, actions, dan getters di dalam komponen kita

## Fetching data with Pinia

Step by step untuk fetching data dengan Pinia:
1. Buat file `products.js` di dalam folder `stores`
2. Import `defineStore` dari `pinia`
3. Buat store dengan menggunakan `defineStore`
4. Import `ref` dari vue
5. Buat state dengan menggunakan `ref`
6. Buat function untuk fetching data dengan menggunakan `fetch`
7. Return state dan function di dalam store
8. Export store yang udah dibuat
9. Import store di dalam komponen yang ingin kita gunakan
10. Destrkuktur store yang kita import dengan menggunakan `storeToRefs`
11. Gunakan state dan actions di dalam komponen kita