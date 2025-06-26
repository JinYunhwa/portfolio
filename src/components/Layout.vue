<template>
    <div id="layout">
      <header>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <slot />
      </main>
  
      <footer>
        <p>© 2025 Jin Yunhwa. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // 특별히 로직이 필요하지 않으므로 비워두었습니다.
  </script>
  
  <style scoped>
  /* 전체 레이아웃 기본 */
  #layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* 헤더 스타일 */
  header {
    background-color: #333;
    padding: 1rem;
  }
  nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
  }
  nav a.router-link-exact-active {
    font-weight: bold;
    border-bottom: 2px solid #fff;
  }
  
  /* 메인 콘텐츠 여백 */
  main {
    flex: 1;
    padding: 2rem;
    background-color: #fafafa;
  }
  
  /* 푸터 스타일 */
  footer {
    background-color: #f2f2f2;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #555;
  }
  </style>
  <template>
    <header class="header">
      <div class="container">
        <!-- 로고 영역 -->
        <div class="logo">
          <router-link to="/">My Portfolio</router-link>
        </div>
  
        <!-- 내비게이션 -->
        <nav>
          <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  // 현재는 로직이 필요 없어서 비워두었습니다.
  </script>
  
  <style scoped>
  /* 1. 헤더 전체: 스크롤 시 항상 보이도록 sticky, 그림자 추가 */
  .header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #1f2937; /* 짙은 회색 배경 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* 2. 컨테이너: 최대 너비 지정, 중앙 정렬, flex 배치 */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  
  /* 3. 로고 스타일: 눈에 띄는 크기와 볼드체 */
  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  
  /* 4. 내비게이션 메뉴: 가로 배치, 간격 조정 */
  nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /* 5. 링크 기본 스타일과 호버 애니메이션 */
  nav a {
    position: relative;
    color: #fff;
    text-decoration: none;
    padding: 0.25rem 0;
    transition: color 0.3s;
  }
  
  /* 6. 호버 시 글자색과 밑줄 애니메이션 */
  nav a:hover {
    color: #facc15; /* 노란 계열 강조색 */
  }
  nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: #facc15;
    transition: width 0.3s ease;
  }
  nav a:hover::after {
    width: 100%;
  }
  
  /* 7. 활성 링크 표시: 굵은 글씨와 밑줄 유지 */
  .router-link-exact-active {
    color: #facc15;
    font-weight: 600;
  }
  .router-link-exact-active::after {
    width: 100%;
  }
  
  /* 8. 반응형 (화면 600px 이하) */
  @media (max-width: 600px) {
    .container {
      flex-direction: column;
    }
    nav ul {
      flex-direction: column;
      gap: 1rem;
      margin-top: 0.5rem;
    }
  }
  </style>
  