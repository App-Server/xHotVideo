<template>
  <div>
    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- Main Content -->
    <router-view />

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
