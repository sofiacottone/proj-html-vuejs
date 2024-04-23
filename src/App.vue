<script>
import PageHeader from './components/PageHeader.vue';
import MatchSection from './components/MatchSection.vue';
import UpcomingSection from './components/UpcomingSection.vue';
import PlayersSection from './components/PlayersSection.vue';
import TablesSection from './components/TablesSection.vue';

export default {
  components: {
    PageHeader,
    MatchSection,
    UpcomingSection,
    PlayersSection,
    TablesSection
  }
}
</script>

<template>

  <PageHeader></PageHeader>

  <main>
    <MatchSection></MatchSection>
    <UpcomingSection></UpcomingSection>
    <PlayersSection></PlayersSection>
    <TablesSection></TablesSection>
  </main>

</template>

<style lang="scss">
@use './style/generic.scss' as *;
</style>