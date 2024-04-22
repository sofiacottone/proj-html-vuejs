<script>
import SingleMatch from '../components/SingleMatch.vue'
export default {
    name: 'UpcomingSection',
    components: {
        SingleMatch
    }
}
</script>

<template>
    <div class="container-fluid text-white py-4">
        <h3 class="pb-4 text-center">Upcoming Matches</h3>

        <SingleMatch></SingleMatch>
        <SingleMatch></SingleMatch>
        <SingleMatch></SingleMatch>
        <SingleMatch></SingleMatch>
        <SingleMatch></SingleMatch>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    background-image: url(../assets/img/saha.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;


}
</style>