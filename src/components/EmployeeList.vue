<template>
  <table class="table table-striped mb-0 border-bottom">
    <caption>List of employees</caption>
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col" role="button" @click="sortBy('gender')">Gender <i class="bi bi-chevron-expand"></i></th>
      <th scope="col" role="button" @click="sortBy('department')">Department <i class="bi bi-chevron-expand"></i></th>
      <th scope="col">Position</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody v-if="displayedEmployees && displayedEmployees.length !== 0">
    <tr v-for="(employee, idx) in displayedEmployees" :key="employee.id">
      <th scope="row">{{ idx + 1 }}</th>
      <td>
        <router-link :to="`/employee/${employee.id}`">{{ employee.name}}</router-link>
      </td>
      <td>{{ employee.gender }}</td>
      <td>{{ employee.department }}</td>
      <td>{{ employee.position }}</td>
      <td>
        <button class="btn small btn-outline-danger" @click="removeEmployee(employee.id)"><i class="bi bi-trash"></i></button>
      </td>
    </tr>
    </tbody>
    <tbody v-else>
    <tr>
      <td colspan="6">No employees yet!</td>
    </tr>
    </tbody>
  </table>

  <Pagination :current-page="currentPage" :page-number="pageNumber"/>
</template>

<script>
import Pagination from '@/components/Pagination';
export default {
  name: "EmployeeList",
  components: {Pagination},
  props: {
    employees: Array,
  },
  data() {
    return {
      employeeList: this.employees || [],
      sortedBy: ''
    }
  },
  methods: {
    removeEmployee(id) {

    },
    sortBy(type) {
      if(this.sortedBy === type) {
        this.sortedBy = ''
        return this.employeeList.sort((a, b) => a[type] >= b[type] ? 1 : -1)
      }
      this.sortedBy = type
      this.employeeList.sort((a, b) => a[type] <= b[type] ? 1 : -1)
    }
  },
  computed: {
    displayedEmployees() {
      let startIdx = (this.currentPage - 1) * 10
      return this.employeeList.slice(startIdx, startIdx + 10)
    },
    currentPage() {
      return this.$route.query.page ?? 1
    },
    pageNumber() {
      return Math.ceil(this.employees.length / 10)
    }
  }
}
</script>

<style scoped>

</style>