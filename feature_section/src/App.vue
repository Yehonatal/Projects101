<script setup>
import Header from "./components/Header.vue";
import Card from "./components/Cards.vue";
import Vue from "./assets/vue.svg";
</script>

<template>
    <Header />
    <br />
    <br />
    <Card />

    <div
        class="tag w-min bg-white shadow-lg border-4 border-green-600 p-2 font-bold absolute bottom-0 right-0"
    >
        <img :src="Vue" alt="vue tag" class="scale-[1.5] mb-2" />
        <div>U E</div>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
