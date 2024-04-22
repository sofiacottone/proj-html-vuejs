<script>
export default {
    name: 'SingleMatch',
    components: {

    }
}
</script>

<template>
    <div class="ms-single-match col-11 mx-auto mb-3">
        <!-- match  -->
        <div class="ms-min-h d-flex justify-content-center align-items-center">
            <div class="d-flex align-items-center">
                <div class="ms-club-logo">
                    <img class="img-fluid" src="../assets/img/club-3.png" alt="Instanbul Sports">
                </div>
                <h5>Schalke Club</h5>
            </div>
            <div class="ms-versus fw-bold px-4 py-2">VS</div>
            <div class="d-flex align-items-center">
                <h5>Inter Club</h5>
                <div class="ms-club-logo">
                    <img class="img-fluid" src="../assets/img/club-4.png" alt="United Fs Club">
                </div>
            </div>
        </div>
        <!-- match info  -->
        <div class="ms-match-info d-flex justify-content-center align-items-center gap-4">
            <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-calendar-days"></i>
                <small class="fw-bold">May 21, 2022 18:05</small>
            </div>

            <div class="d-flex align-items-center gap-1">
                <i class="fa-regular fa-circle-xmark fa-rotate-by"></i>
                <small class="fw-bold">Expert Stadium</small>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-single-match {
    background-color: rgba(0, 0, 0, 0.2);

    .ms-min-h {
        min-height: 120px;
    }

    .ms-versus {
        font-size: 36px;
    }

    .ms-club-logo {
        width: 80px;
    }

    .fa-circle-xmark {
        &.fa-rotate-by {
            transform: rotate(45deg);
        }
    }

    .ms-match-info {
        background-color: rgba(0, 0, 0, 0.3);

    }
}
</style>