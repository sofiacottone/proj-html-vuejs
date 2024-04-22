<script>
export default {
    name: 'AppHero'
}
</script>

<template>
    <div class="ms-hero d-flex justify-content-between align-items-center">
        <div>left</div>
        <div>title</div>
        <div>right</div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-hero {
    height: calc($full-header-height - $top-header-height);
}
</style>