<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <router-link class="page-link" :to="`/employees?page=${+currentPage === 1 ? 1 : currentPage - 1}`" replace
                     aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <li class="page-item" :class="{active: +currentPage === page}" v-for="page in pageNumber">
        <router-link class="page-link" :to="`/employees?page=${page}`" replace>{{ page }}</router-link>
      </li>
      <li class="page-item">
        <router-link class="page-link"
                     :to="`/employees?page=${+currentPage === pageNumber ? pageNumber: +currentPage + 1}`" replace
                     aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ['currentPage', 'pageNumber']
}
</script>

<style scoped>

</style>