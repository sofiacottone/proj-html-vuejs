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
  },
  data() {
    return {
      navLinks: [
        {
          link: 'home',
          category: 'quick links',
          anchor: '',
        },
        {
          link: 'fixtures & results',
          category: 'education',
          anchor: 'fixtures',
        },
        {
          link: 'league table',
          category: 'education',
          anchor: 'league',
        },
        {
          link: 'players',
          category: 'education',
          anchor: 'players',
        },
        {
          link: 'matches',
          category: 'education',
          anchor: 'matches',
        },
        {
          link: 'blog',
          category: 'quick links',
          anchor: 'articles',
        },
        {
          link: 'gallery',
          category: 'quick links',
          anchor: 'hero',
        },
        {
          link: 'contact',
          category: 'quick links',
          anchor: 'contacts',
        },
      ],
    }
  }
}
</script>

<template>

  <PageHeader :navbarLink="navLinks"></PageHeader>

  <main>
    <MatchSection></MatchSection>
    <UpcomingSection></UpcomingSection>
    <PlayersSection></PlayersSection>
    <TablesSection></TablesSection>
    <ClientsSection></ClientsSection>
    <ArticlesSection></ArticlesSection>
  </main>

  <PageFooter :navbarLink="navLinks"></PageFooter>

</template>

<style lang="scss">
@use './style/generic.scss' as *;
</style>