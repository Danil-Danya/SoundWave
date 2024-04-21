<template>
  <section :class="layout">
    <component :is="layout">
      <Router-view/>
    </component>
  </section>
</template>

<script>
  import LoginLayout from './layouts/LoginLayout.vue';
  import AdminLayout from './layouts/AdminLayout.vue';
  import ModeratorLayout from './layouts/ModeratorLayout.vue';
  import ArtistLayout from './layouts/ArtistLayout.vue';
  import UserLayout from './layouts/UserLayout.vue';
  import LandingLayout from './layouts/LandingLayout.vue';
  import NotfoundLayout from './layouts/NotFoundLayout.vue';
  

  export default {
    components: {
      LoginLayout,
      AdminLayout,
      ModeratorLayout,
      ArtistLayout,
      UserLayout,
      LandingLayout,
      NotfoundLayout
    },
    computed: {
      layout () {
        return (`${this.$route.meta.layout || 'user'}-layout`);
      }
    }
  }
</script>

