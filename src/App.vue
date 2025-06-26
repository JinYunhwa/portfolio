<template>
  <div>
    <Header />
    <main class="pt-20">
      <section id="about" class="flex items-center justify-center">
        <SectionAbout />
      </section>
      <section id="skills" class="flex items-center justify-center">
        <SectionSkills />
      </section>
      <section id="projects" class="flex items-center justify-center">
        <SectionProjects />
      </section>
      <section id="contact" class="flex items-center justify-center">
        <SectionContact />
      </section>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import SectionAbout from './components/SectionAbout.vue'
import SectionSkills from './components/SectionSkills.vue'
import SectionProjects from './components/SectionProjects.vue'
import SectionContact from './components/SectionContact.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
section {
  scroll-margin-top: 80px;
}
</style>
