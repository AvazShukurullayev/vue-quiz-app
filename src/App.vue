<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">QUIZ APP</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/all" class="nav-link">Yo'nalishlar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Qo'shish</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
