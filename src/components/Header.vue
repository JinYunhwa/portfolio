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
/*
  1) 버튼 클릭 시 id로 요소를 찾고 scrollIntoView를 호출합니다.
  2) behavior: 'smooth'를 주어 부드러운 스크롤을 구현합니다.
*/
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* 
  1) .btn-link: Bootstrap 기본 링크 스타일을 재활용하면서 버튼 태그의 이점을 살립니다.
  2) nav-link: 네비게이션 메뉴 요소로서 일관된 마진/패딩을 얻습니다.
*/
.nav-link.btn-link {
  color: #495057;
  text-decoration: none;
}
.nav-link.btn-link:hover {
  color: #0d6efd; /* Bootstrap primary hover 색상 */
  text-decoration: underline;
}
</style>
