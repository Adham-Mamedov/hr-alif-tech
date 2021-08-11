export default {
  state: {
    employees: [
      {
        id: 1234,
        name: 'John Stone',
        DoB: 22,
        gender: 'male',
        department: 'IT',
        position: 'Head of department'
      }, {
        id: 12345,
        name: 'Michael Jordan',
        DoB: 61,
        gender: 'female',
        department: 'Marketing',
        position: 'Analyser'
      }, {
        id: 123456,
        name: 'Disney Walter',
        DoB: 34,
        gender: 'male',
        department: 'Accounting',
        position: 'Senior Accountant'
      }, {
        id: 1234,
        name: 'John Stone',
        DoB: 22,
        gender: 'male',
        department: 'IT',
        position: 'Head of department'
      }, {
        id: 12345,
        name: 'Michael Jordan',
        DoB: 61,
        gender: 'female',
        department: 'Marketing',
        position: 'Analyser'
      }, {
        id: 123456,
        name: 'Disney Walter',
        DoB: 34,
        gender: 'male',
        department: 'Accounting',
        position: 'Senior Accountant'
      }, {
        id: 1234,
        name: 'John Stone',
        DoB: 22,
        gender: 'male',
        department: 'IT',
        position: 'Head of department'
      }, {
        id: 12345,
        name: 'Michael Jordan',
        DoB: 61,
        gender: 'female',
        department: 'Marketing',
        position: 'Analyser'
      }, {
        id: 123456,
        name: 'Disney Walter',
        DoB: 34,
        gender: 'male',
        department: 'Accounting',
        position: 'Senior Accountant'
      },{
        id: 12345,
        name: 'Michael Jordan',
        DoB: 61,
        gender: 'female',
        department: 'Marketing',
        position: 'Analyser'
      }, {
        id: 123456,
        name: 'Disney Walter',
        DoB: 34,
        gender: 'male',
        department: 'Accounting',
        position: 'Senior Accountant'
      }, {
        id: 12345,
        name: 'Michael Jordan',
        DoB: 61,
        gender: 'female',
        department: 'Marketing',
        position: 'Analyser'
      }, {
        id: 123456,
        name: 'Disney',
        DoB: 34,
        gender: 'male',
        department: 'Accounting',
        position: 'Senior Accountant'
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    employees: s => s.employees,
    employeeById: s => id => s.employees.find(el => el.id === +id)
  }
}