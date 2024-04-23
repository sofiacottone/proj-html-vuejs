<script>
export default {
    name: 'PlayersSection',
}
</script>

<template>
    <div class="container-fluid text-white py-4">
        <h3 class="pb-4 text-center">Players</h3>

        <!-- player cards  -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col ms-single-card">
                <div class="border-0 rounded-5 rounded-bottom-4 overflow-hidden position-relative">
                    <img src="../assets/img/player1.jpg" class="card-img-top" alt="...">
                    <div class="card-body rounded-4 text-white text-center py-3">
                        <h5 class="card-title">07</h5>
                        <p class="card-text">Adam Brown - Forwarder</p>
                    </div>
                </div>
            </div>
            <div class="col ms-single-card">
                <div class="border-0 rounded-5 rounded-bottom-4 overflow-hidden position-relative">
                    <img src="../assets/img/player2.jpg" class="card-img-top" alt="...">
                    <div class="card-body rounded-4 text-white text-center py-3">
                        <h5 class="card-title">09</h5>
                        <p class="card-text">Michael Kayn - Forwarder</p>
                    </div>
                </div>
            </div>
            <div class="col ms-single-card">
                <div class="border-0 rounded-5 rounded-bottom-4 overflow-hidden position-relative">
                    <img src="../assets/img/player3.jpg" class="card-img-top" alt="...">
                    <div class="card-body rounded-4 text-white text-center py-3">
                        <h5 class="card-title">11</h5>
                        <p class="card-text">Michael Leo - Forwarder</p>
                    </div>
                </div>
            </div>
            <div class="col ms-single-card">
                <div class="border-0 rounded-5 rounded-bottom-4 overflow-hidden position-relative">
                    <img src="../assets/img/player4.jpg" class="card-img-top" alt="...">
                    <div class="card-body rounded-4 text-white text-center py-3">
                        <h5 class="card-title">15</h5>
                        <p class="card-text">Ethan Smith - Midfielder</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- button  -->
        <div class="d-flex justify-content-center mt-5">
            <button class="btn btn-outline-light rounded-5 py-4 px-5">View All Players</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    background-image: url(../assets/img/player.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;

    .ms-single-card {
        min-height: 320px
    }

    .card-img-top {
        min-height: 320px;
        object-fit: cover;
        object-position: top;
    }

    .card-body {
        background-color: #000;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
}

.btn {
    background-color: #000;
}
</style>
