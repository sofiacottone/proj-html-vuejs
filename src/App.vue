<script>
import PageHeader from './components/PageHeader.vue';
import MatchSection from './components/MatchSection.vue';
import UpcomingSection from './components/UpcomingSection.vue';
import PlayersSection from './components/PlayersSection.vue';

export default {
  components: {
    PageHeader,
    MatchSection,
    UpcomingSection,
    PlayersSection
  }
}
</script>

<template>

  <PageHeader></PageHeader>

  <main>
    <MatchSection></MatchSection>
    <UpcomingSection></UpcomingSection>
    <PlayersSection></PlayersSection>
  </main>

</template>

<style lang="scss">
@use './style/generic.scss' as *;
</style>