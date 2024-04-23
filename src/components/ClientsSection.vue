<script>
export default {
    name: 'ClientsSection',
}
</script>

<template>
    <div class="container-fluid text-white p-4">
        <div class="d-flex justify-content-center align-items-center gap-4 my-4">
            <div class="border rounded-5 text-center px-2">
                <img class="img-fluid" src="../assets/img/client2.png" alt="">
            </div>
            <div class="border rounded-5 text-center px-2">
                <img class="img-fluid" src="../assets/img/client3.png" alt="">
            </div>
            <div class="border rounded-5 text-center px-2">
                <img class="img-fluid" src="../assets/img/client4.png" alt="">
            </div>
            <div class="border rounded-5 text-center px-2">
                <img class="img-fluid" src="../assets/img/client7.png" alt="">
            </div>
            <div class="border rounded-5 text-center px-2">
                <img class="img-fluid" src="../assets/img/client9.png" alt="">
            </div>
            <div class="border rounded-5 text-center px-2">
                <img class="img-fluid" src="../assets/img/client10.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    min-height: 260px;
    background-color: #000;

}
</style>
