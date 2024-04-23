<script>
export default {
    name: 'ArticlesSection',

}
</script>

<template>
    <div class="container-fluid p-4">
        <div class="ms-thumbs-up text-center my-3">
            <img src="../assets/img/thumbs-up.png" class="rounded-circle overflow-hidden p-3">
        </div>
        <h2 class="pb-4 fw-bold fs-2 text-center">Resent New & Articles</h2>

        <div class="d-flex justify-content-center gap-3">
            <div class="card col-3 border-0">
                <img src="../assets/img/news1-1.png" class="card-img-top p-4 pb-1" alt="...">
                <div class="text-center">29.05.2022 - Football</div>
                <div class="card-body">
                    <h5 class="card-title text-center fw-bold pb-2">What is Football?</h5>
                    <p class="card-text">GOLDEN GOAL: In a fottball match, the goal scored by one of the teams in [...]
                    </p>
                    <div class="d-flex justify-content-center mb-3">
                        <a href="#" class="btn btn-dark rounded-5 px-5 py-3">More</a>
                    </div>
                </div>
            </div>
            <div class="card col-3 border-0">
                <img src="../assets/img/news1-1.png" class="card-img-top p-4 pb-1" alt="...">
                <div class="text-center">29.05.2022 - Football</div>
                <div class="card-body">
                    <h5 class="card-title text-center fw-bold pb-2">Football Rules</h5>
                    <p class="card-text">GOLDEN GOAL: In a fottball match, the goal scored by one of the teams in [...]
                    </p>
                    <div class="d-flex justify-content-center mb-3">
                        <a href="#" class="btn btn-dark rounded-5 px-5 py-3">More</a>
                    </div>
                </div>
            </div>
            <div class="card col-3 border-0">
                <img src="../assets/img/news1-1.png" class="card-img-top p-4 pb-1" alt="...">
                <div class="text-center">29.05.2022 - Football</div>
                <div class="card-body">
                    <h5 class="card-title text-center fw-bold pb-2">Football Features</h5>
                    <p class="card-text">GOLDEN GOAL: In a fottball match, the goal scored by one of the teams in [...]
                    </p>
                    <div class="d-flex justify-content-center">
                        <a href="#" class="btn btn-dark rounded-5 px-5 py-3">More</a>
                    </div>
                </div>
            </div>
            <div class="card col-3 border-0">
                <img src="../assets/img/news1-1.png" class="card-img-top p-4 pb-1" alt="...">
                <div class="text-center">29.05.2022 - Football</div>
                <div class="card-body">
                    <h5 class="card-title text-center fw-bold pb-2">Football Terms</h5>
                    <p class="card-text">GOLDEN GOAL: In a fottball match, the goal scored by one of the teams in [...]
                    </p>
                    <div class="d-flex justify-content-center">
                        <a href="#" class="btn btn-dark rounded-5 px-5 py-3">More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center gap-1 mt-5">
            <div class="ms-slider rounded-pill"></div>
            <div class="ms-slider rounded-pill"></div>
            <div class="ms-slider active rounded-pill"></div>
            <div class="ms-slider rounded-pill"></div>
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
    }

    .ms-slider {
        height: 6px;
        width: 60px;
        background: $dark-gray;

        &.active {
            background: #000;
            width: 80px;
        }
    }

}
</style>