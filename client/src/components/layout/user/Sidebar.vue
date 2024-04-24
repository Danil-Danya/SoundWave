<template>
    <div class="sidebar">
        <div class="sidebar__container">
            <ul class="sidebar__ul">
                <li class="sidebar__link-item" v-for="link in links" :key="link">
                    <img src="" alt="Icon" class="sidebar__link-icon" v-if="link.img">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                path: '/app/home',
                text: 'Home',
            },
            {
                path: '/app/home',
                text: 'Home',
                img: ''
            },
        ]
    })
}
</script>
