<template>
  <section id="projects" class="my-5">
    <div class="container mt-5">
      <h2 class="text-center mb-4">프로젝트</h2>
      <div class="row">
        <div class="col-md-4" v-for="project in projects" :key="project.name">
          <div class="card mb-4">
            <img :src="project.image" class="card-img-top" :alt="project.name">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.link" class="btn btn-primary">프로젝트 보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'ProjectList',
    data() {
      return {
        projects: [
          {
            name: '프로젝트 1',
            description: '프로젝트 1 설명',
            image: 'path/to/image1.jpg',
            link: '#'
          },
          {
            name: '프로젝트 2',
            description: '프로젝트 2 설명',
            image: 'path/to/image2.jpg',
            link: '#'
          },
          {
            name: '프로젝트 3',
            description: '프로젝트 3 설명',
            image: 'path/to/image3.jpg',
            link: '#'
          }
        ]
      };
    }
  };
  </script>
  