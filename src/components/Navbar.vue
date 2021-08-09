<template>
  <nav class="navbar navbar-light border-bottom">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Alif Tech
      </router-link>
      <div class="navbar-nav w-25 d-flex flex-row p-2 justify-content-around">
        <router-link class="nav-link" to="/">Dashboard</router-link>
        <router-link class="nav-link" to="/employees">Employees</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
.navbar-nav a {
  font-size: 1.1rem;
  padding: .3rem;

  &.active {
    border-bottom: 3px solid #14b014;
   }
}

</style>