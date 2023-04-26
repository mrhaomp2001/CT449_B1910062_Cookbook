<template>
  <div>
    <!-- Navbar & Hero Start -->
    <div class="container-fluid position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{ name: 'recipe' }" class="text-decoration-none">
          <h1 class="text-primary m-0 text-decoration-none mx-2">
            <i class="fa fa-utensils me-3 text-decoration-none"></i>
            Hôm nay ăn gì?
          </h1>
        </router-link>
        <!-- <img src="img/logo.png" alt="Logo"> -->
        <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 pe-4">
            <router-link :to="{ name: 'recipe' }" class="nav-item nav-link">Trang chủ</router-link>
            <router-link :to="{ name: 'ingredient' }" class="nav-item nav-link">Nguyên liệu</router-link>
          </div>
        </div>
      </nav>
    </div>
    <!-- Navbar & Hero End -->
  </div>
</template>

<script setup></script>
