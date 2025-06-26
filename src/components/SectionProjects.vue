<template>
    <section class="py-5" id="projects">
      <div class="container text-center">
        <h2 class="fw-bold mb-5">Projects</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="n in 3" :key="n">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">프로젝트 제목 {{ n }}</h5>
                <p class="card-text">
                  이 프로젝트는 Vue.js와 Vite를 활용하여 제작되었으며, 반응형 UI 구현 및 사용자 친화적인 인터페이스에 중점을 두었습니다.
                </p>
                <ul class="list-unstyled text-start small">
                  <li>✅ 주요 기능 1</li>
                  <li>✅ 주요 기능 2</li>
                  <li>✅ 주요 기능 3</li>
                </ul>
              </div>
              <div class="card-footer bg-transparent border-top-0">
                <a href="#" class="btn btn-outline-primary btn-sm">깃허브 보기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>