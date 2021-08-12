<template>
  <h1 class="card-title py-2">Employee details</h1>
  <div class="card mb-3" v-if="employee">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="img-fluid" src="https://le-cdn.website-editor.net/4d1bfad533d546148a7d7e044841c0dc/dms3rep/multi/opt/%23Alain+Connu-1920w.jpg" alt="profile photo">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">{{employee.name}}</h2>
          <p class="card-text text-black-50">Date of Birth: <span class="text-dark">{{toDateFormat(employee.DoB)}} ({{age}} years)</span></p>
          <p class="card-text text-black-50">Gender: <span class="text-dark">{{employee.gender}}</span></p>
          <p class="card-text text-black-50">Department: <span class="text-dark">{{employee.department}}</span></p>
          <p class="card-text text-black-50">Position: <span class="text-dark">{{employee.position}}</span></p>
          <p class="card-text text-black-50">Works since: <span class="text-dark">{{toDateFormat(employee.startDate)}}</span></p>
          <button @click="modal = true" type="button" class="btn btn-info mt-3" data-toggle="modal" data-target="#staticBackdrop">
            Update employee
          </button>
        </div>
      </div>
    </div>
  </div>
  <p class="display-4 text-danger" v-else>No employee with this id!</p>

  <Modal v-if="modal" title="Update Employee" @close="modal = false">
    <EmployeeForm action-text="Update" :employee="employee" submitType="update" @close="modal = false"/>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal';
import EmployeeForm from '@/components/EmployeeForm';
export default {
  name: "EmployeeDetails",
  components: {Modal, EmployeeForm},
  data() {
    return {
      modal: false
    }
  },
  computed: {
    employee() {
      const id = this.$route.params.id
      return this.$store.getters.employeeById(id)
    },
    age() {
      return new Date().getFullYear() - new Date(this.employee.DoB).getFullYear()
    },
  },
  methods: {
    toDateFormat(date = '') {
      return new Date(date).toLocaleString('en-EN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 100%;
}
.card-text {
  font-size: 1.1rem;
}
.card-text span {
  font-size: 1.12rem;
  text-transform: capitalize;
}

</style>