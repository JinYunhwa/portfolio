<!-- src/views/AboutView.vue -->
<template>
  <section class="w-full flex justify-center bg-gray-50 text-gray-800 py-12">
    <div class="w-full max-w-3xl px-6">
      <!-- 타이틀 -->
      <h1 class="text-3xl font-bold mb-4">About Me</h1>

      <!-- 자기소개 -->
      <p class="mb-8 leading-relaxed">
        안녕하세요, 프론트엔드 개발자 진윤화입니다.  
        Vue.js와 Vite를 중심으로 깔끔하고 반응형인 웹 애플리케이션을 만드는 것을 즐깁니다.  
        사용자의 경험을 최우선으로 생각하며, 코드를 통해 가치를 전달하는 데 집중하고 있습니다.
      </p>

      <!-- 기술 스택 & 경력 섹션 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 기술 스택 -->
        <div>
          <h2 class="text-2xl font-semibold mb-3">기술 스택</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Vue.js 3, Vite</li>
            <li>JavaScript (ES6)</li>
            <li>HTML5, CSS3, UnoCSS</li>
            <li>Git, GitHub</li>
            <li>python, pytorch</li>
            <li>ML, DL, LLM</li>
          </ul>
        </div>
        <div>
          <ul class="list-disc list-inside space-y-2">
            <li>삼육대학교 졸업 <br/>- 컴퓨터 메카트로닉스 공학부 소프트웨어 전공
            </li>
            <li>SK네트웍스 AI 패밀리캠프 3기 수료 <br/>-파이널 프로젝트 최우수상 수상</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 현재는 특별한 로직이 필요없습니다.
</script>

<style scoped>
/* 필요하다면 추가 커스텀 스타일을 여기에 작성하세요 */
</style>
