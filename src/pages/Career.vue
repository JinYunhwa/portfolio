<template>
    <section id="career" class="my-5">
        <div class="container">
        <h2 class="text-center mb-4">Career</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                <div class="d-flex align-items-center">
                    <i class="fas fa-briefcase fa-2x me-3"></i>
                    <div>
                    <h5 class="card-title">SK Family AI CAMP 3기</h5>
                    <p class="card-text">2024/07/08 ~ 2024/12/31</p>
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
name: 'CareerSection'
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

.card-body {
display: flex;
align-items: center;
}

.card-title {
font-size: 1.5rem;
margin-bottom: 0.5rem;
}

.card-text {
font-size: 1rem;
color: #6c757d;
}

.fa-briefcase {
color: #007bff;
}
</style>
