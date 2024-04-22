<script>
export default {
    name: 'PageHero'
}
</script>

<template>
    <div class="ms-hero d-flex justify-content-between align-items-center">
        <div>left</div>
        <div>
            <h1 class="fw-bold">Football Club Sport Club</h1>
        </div>
        <div>right</div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-hero {
    height: calc($full-header-height - $top-header-height);

    h1 {
        font-size: 60px;
    }
}
</style>