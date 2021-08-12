<template>
  <h1 class="card-title py-2">Our Employees</h1>
  <Loader v-if="loading"/>
  <EmployeeList v-else :employees="employees"/>

  <button @click="modal = true" type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#staticBackdrop">
    Add employee
  </button>
  <Modal v-if="modal" title="Create Employee" @close="modal = false">
    <EmployeeForm action-text="Create" @close="modal = false"/>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal';
import EmployeeList from '@/components/EmployeeList';
import EmployeeDetails from '@/views/EmployeeDetails';
import EmployeeForm from '@/components/EmployeeForm';
import Loader from '@/components/Loader';
export default {
  name: "Employees",
  components: {Loader, EmployeeForm, EmployeeDetails, EmployeeList, Modal},
  data() {
    return {
      modal: false,
      loading: false,
    }
  },
  computed: {
    employees() {
      this.loading = true
      const data = this.$store.getters.employees
      this.loading = false
      return data
    }
  }
}
</script>

<style scoped>

</style>