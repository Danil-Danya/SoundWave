<template>
  <section class="site">
    <div class="container">
      <Navbar />
      <main class="main">
        <router-view />
      </main>
      <Footer />
    </div>
    <div class="site-bg"></div>
  </section>
</template>

<style lang="scss">
  @import '@/assets/styles/layout/landing/layout.scss';
</style>

<script>
import Navbar from '@/components/layout/landing/Navbar.vue';
import Footer from '@/components/layout/landing/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}

</script>