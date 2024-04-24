<template>
    <section class="user">
        <Sidebar />
        <div class="container">
            <Navbar />
            <router-view />
        </div>
        <Footer />
    </section>
</template>

<script>
import Navbar from '../components/layout/user/Navbar.vue';
import Sidebar from '../components/layout/user/Sidebar.vue';
import Footer from '../components/layout/user/Footer.vue';

export default {
    components: {
        Sidebar,
        Navbar,
        Footer
    }
}

</script>


