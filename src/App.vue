<script>
import PageHeader from './components/PageHeader.vue';
import MatchSection from './components/MatchSection.vue';

export default {
  components: {
    PageHeader,
    MatchSection
  }
}
</script>

<template>

  <PageHeader></PageHeader>

  <main>
    <MatchSection></MatchSection>
  </main>

</template>

<style lang="scss">
@use './style/generic.scss' as *;
</style>