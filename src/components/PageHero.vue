<script>
import { store } from '../store.js'

export default {
    name: 'PageHero',
    data() {
        return {
            store,
            activeImage: 1

        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        },
        showNextImage() {
            if (this.activeImage < this.store.slider.length - 1) {
                this.activeImage++;
            } else {
                this.activeImage = 0;
            }
        },
        showPreviousImage() {
            if (this.activeImage > 0) {
                this.activeImage--;
            } else {
                this.activeImage = this.store.slider.length - 1;
            }
        }
    }
}
</script>

<template>
    <div id="hero" class="row position-relative">
        <div class="ms-slider p-0">
            <img class="img-fluid h-100 w-100" :src="getImageUrl(store.slider[activeImage].image)">
        </div>
        <div class="ms-hero-text d-flex justify-content-between align-items-center position-absolute">
            <!-- left  -->
            <div @click="showPreviousImage()" role="button"
                class="d-flex justify-content-center align-items-center border rounded-circle p-3">
                <i class="fa-solid fa-chevron-left"></i>
            </div>

            <!-- text  -->
            <div class="col-5">
                <h1 class="fw-bold">Football Club Sport Club</h1>
                <div>Private football matches</div>
                <button class="btn btn-outline-light rounded-5 px-4 py-3 mt-4">Learn More &rarr;</button>
            </div>

            <!-- right  -->
            <div @click="showNextImage()" role="button"
                class="d-flex justify-content-center align-items-center border rounded-circle p-3">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-slider {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    object-position: center;

}

.ms-hero-text {
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);

    h1 {
        font-size: 60px;
    }

    .rounded-circle {
        width: 50px;
        height: 50px;
    }
}
</style>