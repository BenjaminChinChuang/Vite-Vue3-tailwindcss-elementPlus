<script setup>
import { useStore } from 'vuex';
import debounce from 'lodash/debounce';

const store = useStore();
</script>

<template>
  <section>
    <router-view></router-view>
  </section>
</template>
