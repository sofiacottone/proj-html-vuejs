<script>
import { store } from '../store.js'

export default {
    name: 'ArticlesSection',
    data() {
        return {
            store,
            activeArticle: 0
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        },
        activateArticle(clickedIndex) {
            this.activeArticle = clickedIndex;
        },
        horizontalScroll(event) {
            event.preventDefault();
            event.currentTarget.scrollLeft += event.deltaY
        },
    }

}
</script>

<template>
    <div id="articles" class="container-fluid p-4">
        <div class="ms-thumbs-up text-center my-3">
            <img src="../assets/img/thumbs-up.png" class="rounded-circle overflow-hidden p-3">
        </div>
        <h2 class="pb-4 fw-bold fs-2 text-center">Resent New & Articles</h2>

        <!-- cards  -->
        <div @wheel="horizontalScroll($event)"
            class="d-flex justify-content-start gap-3 overflow-y-auto ms-no-scrollbar p-3 pb-5">
            <div v-for="(article, index) in store.articlesInfo" @click="activateArticle(index)"
                :class="{ 'active': index == activeArticle }" class="card col-3 border-0">
                <img :src="getImageUrl(article.img)" class="card-img-top p-4 pb-1" alt="...">
                <div class="text-center">{{ article.date }} - {{ article.topic }}</div>
                <div class="card-body">
                    <h5 class="card-title text-center fw-bold pb-2">{{ article.title }}</h5>
                    <p class="card-text">{{ article.paragraph }}</p>
                    <div class="d-flex justify-content-center mb-3">
                        <a href="#" class="btn btn-dark rounded-5 px-5 py-3">More</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- slider  -->
        <div class="d-flex justify-content-center gap-1 mt-3">
            <div v-for="(n, index) in store.articlesInfo.length" @click="activateArticle(index)"
                class="ms-slider rounded-pill" :class="{ 'active': index == activeArticle }"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    min-height: 37.5rem;

    .ms-thumbs-up {
        img {
            background-color: #000;
        }
    }

    .card {
        box-shadow: 2px 2px 20px #00000050;
        max-width: 300px;
        height: fit-content;

        &.active {
            transform: scale(1.1);
            margin-inline: 16px;
        }
    }

    .ms-slider {
        height: 6px;
        width: 50px;
        background: $dark-gray;

        &.active {
            background: #000;
            width: 80px;
        }
    }

}

.ms-no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>