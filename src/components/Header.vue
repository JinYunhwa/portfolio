<template>
  <header class="fixed-top bg-white shadow-sm">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- 브랜드 -->
        <a class="navbar-brand" href="#">My Portfolio</a>

        <!-- 모바일 토글 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- 메뉴 버튼들 -->
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            <li class="nav-item">
              <button class="nav-link btn btn-link" @click="scrollTo('about')">About</button>
            </li>
            <li class="nav-item">
              <button class="nav-link btn btn-link" @click="scrollTo('skills')">Skills</button>
            </li>
            <li class="nav-item">
              <button class="nav-link btn btn-link" @click="scrollTo('projects')">Projects</button>
            </li>
            <li class="nav-item">
              <button class="nav-link btn btn-link" @click="scrollTo('contact')">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.nav-link.btn-link {
  color: #495057;
  text-decoration: none;
}
.nav-link.btn-link:hover {
  color: #0d6efd;
  text-decoration: underline;
}
</style>
