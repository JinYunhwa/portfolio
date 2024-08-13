<template>
    <header class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <router-link class="navbar-brand" to="/">Yunhwa's Portfolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link" href="#about">About me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#skill">Skill</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#activity">Activity</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#career">Career</a>
                </li>
            </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'PortfolioHeader'
    };
</script>

<style scoped>
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    .navbar-brand {
        font-size: 1.5rem;
    }

    .nav-link {
        font-size: 1rem;
    }
</style>
