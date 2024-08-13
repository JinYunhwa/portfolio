<template>
    <section id="skill" class="my-5">
        <div class="container">
        <h2 class="text-center mb-4">Skill</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
            <div class="row">
                <div class="col-md-6 mb-3" v-for="(tech, index) in techStack" :key="index">
                <div class="card h-100">
                    <div class="card-body text-center">
                    <i :class="tech.icon" class="mb-2" style="font-size: 2rem;"></i>
                    <h5 class="card-title">{{ tech.name }}</h5>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
    export default {
    name: 'SkillSection',
    data() {
        return {
        techStack: [
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'HTML', icon: 'fab fa-html5' },
            { name: 'CSS', icon: 'fab fa-css3-alt' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Vue.js', icon: 'fab fa-vuejs' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
            { name: 'Django', icon: 'fas fa-leaf' },
            { name: 'MySQL', icon: 'fas fa-database' },
            { name: 'Linux', icon: 'fab fa-linux' },
            { name: 'AWS', icon: 'fab fa-aws' }
        ]
        };
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

.card {
border: none;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
font-size: 1.2rem;
margin-top: 0.5rem;
}

.card-body i {
color: #007bff;
}
</style>
