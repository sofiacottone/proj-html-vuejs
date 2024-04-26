<script>
export default {
    name: 'ClientsSection',
    data() {
        return {
            clients: [
                'client2.png',
                'client3.png',
                'client4.png',
                'client7.png',
                'client9.png',
                'client10.png',
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container-fluid text-white p-4">
        <div class="d-flex justify-content-center align-items-center gap-4 my-4">
            <div v-for="client in clients" class="border rounded-5 text-center px-2">
                <img class="img-fluid" :src="getImageUrl(client)" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    min-height: 220px;
    background-color: #000;

}
</style>
