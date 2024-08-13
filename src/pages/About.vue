<template>
  <section id="about" class="my-3 text-dark">
    <div class="container">
      <h2 class="text-center mb-4">About me</h2>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <p class="text-left ml-3">
            <i class="fas fa-envelope"></i> Email : dbsghk320@gmail.com
          </p>
          <p class="text-left ml-3">
            <i class="fab fa-github"></i> GitHub : <a href="https://github.com/dbsghk320" target="_blank">https://github.com/dbsghk320</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
section {
  padding: 2rem 0;
}

section h2 {
  margin-bottom: 1rem;
  color: #343a40;
}

section p {
  font-size: 1.2rem;
  color: #495057;
  margin-left: 1rem; /* 왼쪽 여백 추가 */
}

section a {
  color: #007bff;
  text-decoration: none;
}

section a:hover {
  text-decoration: underline;
}
</style>
