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
export default {
  name: "Employees",
  components: {EmployeeForm, EmployeeDetails, EmployeeList, Modal},
  data() {
    return {
      modal: false,
      employees: [
        {
          id: 1234,
          name: 'John Stone',
          DoB: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          DoB: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          DoB: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          DoB: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          DoB: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          DoB: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          DoB: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          DoB: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          DoB: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          DoB: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          DoB: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          DoB: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          DoB: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          DoB: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney',
          DoB: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
      ]
    }
  },

}
</script>

<style scoped>
h1 {

}

</style>