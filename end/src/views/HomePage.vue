<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { useCounterStore } from "@/stores/counter";
import { useProductsStore } from "@/stores/products";
import { storeToRefs } from "pinia";

// counter pinia
const counterStore = useCounterStore();
const { name, doubleCount, count } = storeToRefs(counterStore);
const { increment } = counterStore;

// products pinia
const productsStore = useProductsStore();
const { products, loading } = storeToRefs(productsStore);
const { fetchProducts } = productsStore;
fetchProducts();
</script>

<template>
  <button class="bg-red-500 rounded w-1/4" @click="increment">
    {{ name }} - {{ doubleCount }} - {{ count }}
  </button>
  <div class="flex flex-col items-center justify-center h-screen" v-if="loading">
    <img src="../assets/Bean Eater@1x-1.0s-200px-200px.svg" class="w-1/3" />
  </div>

  <!-- product list -->
  <div id="PAGE-HOME" class="min-h-screen flex items-center justify-center" v-else>
    <main class="my-5 bg-white grid grid-cols-4 gap-5">
      <div
        class="h-full flex flex-col justify-center items-center bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </main>
  </div>
</template>
