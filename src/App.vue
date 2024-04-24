<script>
import PageHeader from './components/PageHeader.vue';
import MatchSection from './components/MatchSection.vue';
import UpcomingSection from './components/UpcomingSection.vue';
import PlayersSection from './components/PlayersSection.vue';
import TablesSection from './components/TablesSection.vue';
import ClientsSection from './components/ClientsSection.vue';
import ArticlesSection from './components/ArticlesSection.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    MatchSection,
    UpcomingSection,
    PlayersSection,
    TablesSection,
    ClientsSection,
    ArticlesSection,
    PageFooter
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
    <ClientsSection></ClientsSection>
    <ArticlesSection></ArticlesSection>
  </main>

  <PageFooter></PageFooter>

</template>

<style lang="scss">
@use './style/generic.scss' as *;
</style>