import axios from 'axios';
import getAge from '../../utils/ageCalculator';

const url = 'http://localhost:5000/employees'

export default {
  state: {
    employees: []
  },
  mutations: {
    addEmployee(s, data) {
      if (!data) return
      s.employees.push(data)
    },
    updateEmployee(s, data) {
      const index = s.employees.findIndex(el => el.id === data.id)
      if(index === -1) return console.error('Something went wrong!')
      s.employees[index] = data
    },
    removeEmployee(s, id) {
      s.employees = s.employees.filter(el => el.id !== id)
    },
    loadEmployees(s, employees = []) {
      s.employees = employees
    }
  },
  actions: {
    async addEmployee({commit}, data) {
      try {
        const res = await axios.post(url, data)
        commit('addEmployee', res.data)
      } catch (e) {
        console.error('Error: ' + e.message)
      }
    },
    async updateEmployee({commit}, data) {
      try {
        const res = await axios.put(url + `/${data.id}`, data)
        commit('updateEmployee', res.data)
      } catch (e) {
        console.error('Error: ' + e.message)
      }
    },
    async removeEmployee({commit}, id) {
      try {
        const res = await axios.delete(url + `/${id}`)
        commit('removeEmployee', id)
      } catch (e) {
        console.error('Error: ' + e.message)
      }
    },
    async loadEmployees({commit}) {
      try {
        const res = await axios.get(url)
        commit('loadEmployees', res.data)
      } catch (e) {
        console.error('Error: ' + e.message)
      }
    },
  },
  getters: {
    employees: s => s.employees,
    employeeById: s => id => s.employees.find(el => el.id === +id), // remove + when ids will be a type of string
    statistics: s => ({
      totalNumberOfEmployees: s.employees.length,
      numberOfMales: s.employees.filter(el => el.gender === 'male').length,
      numberOfFemales: s.employees.filter(el => el.gender === 'female').length,
      averageAge: (s.employees.reduce((acc, cur) => acc + getAge(cur.DoB), 0) / (s.employees.length || 1)).toFixed(1)
    }),
    employeesByDepartments: (s, getters) => {
      const result = {}
      getters.employees.forEach(el => {
        if (result[el.department]) {
          result[el.department]++
        } else {
          result[el.department] = 1
        }
      })
      return result
    }
  }
}
