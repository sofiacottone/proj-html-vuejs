<script>
import { store } from '../store.js'

export default {
    name: 'PlayersSection',
    data() {
        return {
            store,
            showLessPlayers: true,
            isFieldVisible: false
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`${name}`, import.meta.url).href;
        },
    },
    computed: {
        playersToDisplay() {
            if (this.showLessPlayers) {
                return this.store.playersInfo.slice(0, 4);
            } else {
                return this.store.playersInfo;
            }
        },
    },
}
</script>

<template>
    <div id="players" class="container-fluid text-white py-4">
        <h3 class="pb-4 text-center">Players</h3>

        <!-- player cards  -->
        <div class="row row-cols-1 row-cols-md-4 g-4" :class="[!isFieldVisible ? 'd-flex' : 'd-none']">
            <div v-for="player in playersToDisplay" class="col ms-single-card">
                <div class="border-0 rounded-5 rounded-bottom-4 overflow-hidden position-relative">
                    <img :src="getImageUrl(player.img)" class="card-img-top" :alt="player.name">
                    <div class="card-body rounded-4 text-white text-center py-3">
                        <h5 class="card-title">{{ player.number }}</h5>
                        <p class="card-text">{{ player.name }} - {{ player.role }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- field  -->
        <div class="d-flex justify-content-around my-3">
            <div :class="[isFieldVisible ? 'd-block' : 'd-none']">
                <div class="bg-dark rounded-pill p-2 fw-bold text-center">Name (number) - Role</div>
                <ol class="mt-2">
                    <template v-for="player in store.playersInfo">
                        <li class="px-1 py-1"><span class="fw-bold">{{ player.name }}</span> ({{ player.number }}) - {{
            player.role }}
                        </li>
                    </template>
                </ol>
            </div>
            <div>
                <div :class="[isFieldVisible ? 'd-block' : 'd-none']" class="text-center font-monospace p-2">3-4-3</div>
                <div id="field" :class="[isFieldVisible ? 'd-flex' : 'd-none']"
                    class="flex-column align-items-center gap-5 px-3 py-4">
                    <!-- Goalkeeper -->
                    <div class="ms-player gk rounded-circle overflow-hidden border bg-dark">GK</div>

                    <!-- Defenders -->
                    <div class="d-flex mb-3 mt-2">
                        <div class="ms-player defender rounded-circle overflow-hidden border bg-dark me-5 mt-4">DEF
                        </div>
                        <div class="ms-player defender rounded-circle overflow-hidden border bg-dark me-5">DEF</div>
                        <div class="ms-player defender rounded-circle overflow-hidden border bg-dark mt-4">DEF</div>
                    </div>
                    <!-- Midfielders -->
                    <div class="d-flex gap-4">
                        <div class="ms-player midfielder rounded-circle overflow-hidden border bg-dark">MID</div>
                        <div class="ms-player midfielder rounded-circle overflow-hidden border bg-dark">MID</div>
                        <div class="ms-player midfielder rounded-circle overflow-hidden border bg-dark">MID</div>
                        <div class="ms-player midfielder rounded-circle overflow-hidden border bg-dark">MID</div>
                    </div>
                    <!-- Forwards -->
                    <div class="d-flex gap-5 mt-4">
                        <div class="ms-player forward rounded-circle overflow-hidden border bg-dark mt-3">FWD</div>
                        <div class="ms-player forward rounded-circle overflow-hidden border bg-dark">FWD</div>
                        <div class="ms-player forward rounded-circle overflow-hidden border bg-dark mt-3">FWD</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- button  -->
        <div class="d-flex justify-content-center align-items-center gap-3 mt-5">
            <button class="btn btn-outline-light rounded-5 py-4 px-5" @click="showLessPlayers = !showLessPlayers">
                {{ showLessPlayers === true ? "View All Players" : "Show Less" }}
            </button>
            <div @click="isFieldVisible = !isFieldVisible; showLessPlayers = true"
                class="ms-field btn rounded-5 py-2 px-4">
                <img src="../assets/img/football-field-sm.png">
            </div>
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
        height: 320px;

        .position-relative {
            max-height: 100%;
        }
    }

    .card-img-top {
        height: 320px;
        object-fit: cover;
        object-position: top;
    }

    .card-body {
        background-color: #000;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .ms-field {
        background-color: #fff;

        &:hover {
            background-color: #00A101;
            transition: 0.5s;
        }
    }

    ol {
        backdrop-filter: blur(16px) saturate(180%);
    }

    #field {
        background-image: url(../assets/img/football_field.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 630px;
        width: 400px;

        .ms-player {
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

.btn {
    background-color: #000;
}
</style>
