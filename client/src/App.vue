<template>
  <section>
    <component :is="layout">
      <router-view/>
    </component>
  </section>
</template>

<script>
  import LoginLayout from './layouts/LoginLayout.vue';
  import AdminLayout from './layouts/AdminLayout.vue';
  import ModeratorLayout from './layouts/ModeratorLayout.vue';
  import ArtistLayout from './layouts/ArtistLayout.vue';
  import UserLayout from './layouts/UserLayout.vue';

  export default {
    components: {
      LoginLayout,
      AdminLayout,
      ModeratorLayout,
      ArtistLayout,
      UserLayout
    },
    computed: {
      layout () {
        return (`${this.$route.meta.layout || 'user'}-layout`);
      }
    }
  }
</script>

