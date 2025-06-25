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
  