<script>
export default {
    name: 'MatchSection',
    components: {

    }
}
</script>

<template>
    <div class="container-fluid">
        <!-- match  -->
        <div class="d-flex justify-content-center align-items-center my-4">
            <div class="d-flex align-items-center">
                <h4>Istanbul Sports</h4>
                <img src="../assets/img/club-1.png" alt="Instanbul Sports">
            </div>
            <div class="ms-versus fw-bold p-4">VS</div>
            <div class="d-flex align-items-center">
                <img src="../assets/img/club-2.png" alt="United Fs Club">
                <h4>United Fs Club</h4>
            </div>
        </div>
        <!-- match info (date, place)  -->
        <div class="d-flex justify-content-center align-items-center gap-4">
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-calendar-days"></i>
                <span class="fw-bold">May 21, 2022 18:05</span>
            </div>

            <div class="d-flex align-items-center gap-1">
                <i class="fa-regular fa-circle-xmark fa-rotate-by"></i>
                <span class="fw-bold">Expert Stadium</span>
            </div>
        </div>
        <!-- button  -->
        <div class="d-flex justify-content-center m-4">
            <button class="btn btn-dark rounded-5 py-4 px-5">View Match Details</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    min-height: 300px;

    .ms-versus {
        font-size: 60px;
    }

    .fa-circle-xmark {
        &.fa-rotate-by {
            transform: rotate(45deg);
        }
    }
}
</style>