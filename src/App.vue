<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Layout from 'Components/Layout.vue';

const store = useStore();
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  console.log(`App mounted 123`);
});
</script>

<template>
  <Layout>
    <div>
      <div
        v-loading.fullscreen.lock="isLoading"
        element-loading-text="處理中，請稍後 ..."
        element-loading-background="rgba(0, 0, 0, 0.75)"
      />

      <div class="rt-container">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </Layout>
</template>
