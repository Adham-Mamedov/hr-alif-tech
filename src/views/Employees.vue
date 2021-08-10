<template>
  <h1 class="card-title py-2">Our Employees</h1>

<!--  <EmployeeDetails v-if="$route.params.id"/>-->
  <EmployeeList :employees="employees"/>



  <button @click="modal = true" type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#staticBackdrop">
    Add employee
  </button>
  <Modal v-if="modal" title="Create Employee" @close="modal = false">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ut?</p>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal';
import EmployeeList from '@/components/EmployeeList';
import EmployeeDetails from '@/views/EmployeeDetails';
export default {
  name: "Employees",
  components: {EmployeeDetails, EmployeeList, Modal},
  data() {
    return {
      modal: false,
      employees: [
        {
          id: 1234,
          name: 'John Stone',
          age: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          age: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          age: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          age: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          age: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          age: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          age: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          age: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          age: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          age: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          age: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney Walter',
          age: 34,
          gender: 'male',
          department: 'Accounting',
          position: 'Senior Accountant'
        },
        {
          id: 1234,
          name: 'John Stone',
          age: 22,
          gender: 'male',
          department: 'IT',
          position: 'Head of department'
        },{
          id: 12345,
          name: 'Michael Jordan',
          age: 61,
          gender: 'female',
          department: 'Marketing',
          position: 'Analyser'
        },{
          id: 123456,
          name: 'Disney',
          age: 34,
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