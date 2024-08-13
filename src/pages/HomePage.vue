<template>
  <div>
    <AboutSection />
    <SkillSection />
    <ActivitySection />
    <ProjectSection />
    <CareerSection />
  </div>
</template>

<script>
import AboutSection from './About.vue';
import ActivitySection from './Activity.vue';
import CareerSection from './Career.vue';
import ProjectSection from './Projects.vue';
import SkillSection from './Skill.vue';

export default {
  name: 'HomePage',
  components: {
    AboutSection,
    CareerSection,
    ProjectSection,
    SkillSection,
    ActivitySection,
  }
};
</script>

<style scoped>
section {
  padding: 2rem 0;
}

section h2 {
  margin-bottom: 1rem;
}
</style>
