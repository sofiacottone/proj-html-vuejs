<script>
import AppHero from './AppHero.vue'

export default {
    name: 'PageHeader',
    components: {
        AppHero
    }
}
</script>

<template>
    <div class="container-fluid ms-bg-image text-white text-center fw-bold">
        <!-- sponsors + navbar  -->
        <div class="ms-header-nav">
            <div class="ms-logo-container">
                <img src="../assets/img/sponsor1.png" alt="">
                <img src="../assets/img/sponsor2.png" alt="">
                <img src="../assets/img/loader-football.png" alt="">
            </div>
            <nav class="text-uppercase">navbar links</nav>
        </div>
        <!-- hero -->
        <AppHero></AppHero>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    &.ms-bg-image {
        background-image: url(../assets/img/slider2-1.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: $full-header-height;
    }

    .ms-header-nav {
        background-color: #000;
        opacity: 0.7;
        min-height: 10rem;
    }
}
</style>