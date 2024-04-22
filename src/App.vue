<script>
import PageHeader from './components/PageHeader.vue';
import MatchSection from './components/MatchSection.vue';
import UpcomingSection from './components/UpcomingSection.vue';

export default {
  components: {
    PageHeader,
    MatchSection,
    UpcomingSection
  }
}
</script>

<template>

  <PageHeader></PageHeader>

  <main>
    <MatchSection></MatchSection>
    <UpcomingSection></UpcomingSection>
  </main>

</template>

<style lang="scss">
@use './style/generic.scss' as *;
</style>