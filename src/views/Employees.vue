<template>
  <h1 class="card-title py-2">Our Employees</h1>
  <EmployeeList :employees="employees"/>

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
import {mapGetters} from 'vuex'
export default {
  name: "Employees",
  components: {EmployeeForm, EmployeeDetails, EmployeeList, Modal},
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    ...mapGetters(['employees'])
  }
}
</script>

<style scoped>

</style>