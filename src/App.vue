<template>
  <div id="app">
    <PortfolioHeader />
    <main class="container mt-3 pt-3">
      <router-view></router-view>
    </main>
    <PortfolioFooter />
  </div>
</template>

<script>
import PortfolioHeader from './components/PortfolioHeader.vue';
import PortfolioFooter from './components/PortfolioFooter.vue';

export default {
  name: 'App',
  components: {
    PortfolioHeader,
    PortfolioFooter
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  margin-top: 60px; /* 헤더 높이만큼 마진 추가 */
}
</style>
