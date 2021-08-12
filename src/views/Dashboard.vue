<template>
  <div class="home">
    <h1 class="card-title py-2">Dashboard Page</h1>
    <h2 class="mb-4">Statistics</h2>
    <div class="row row-cols-2">
      <div class="col">
        <table class="table table-bordered mt-4">
          <thead>
          <tr>
            <th scope="col">Total:</th>
            <td>{{ statistics.totalNumberOfEmployees }} employee{{ statistics.totalNumberOfEmployees > 1 ? 's' : '' }}
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">Male employees:</th>
            <td>{{ statistics.numberOfMales }} employee{{ statistics.numberOfMales > 1 ? 's' : '' }}</td>
          </tr>
          <tr>
            <th scope="row">Female employees:</th>
            <td>{{ statistics.numberOfFemales }} employee{{ statistics.numberOfFemales > 1 ? 's' : '' }}</td>
          </tr>
          <tr>
            <th scope="row">Average age around company:</th>
            <td>{{ statistics.averageAge }} year{{ statistics.averageAge > 1 ? 's' : '' }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <Bar :config="BarChartConfig"/>
      </div>
    </div>


  </div>
</template>

<script>
import Bar from '@/components/charts/Bar';
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {Bar},
  data() {
    return {
      BarChartConfig: {
        type: 'bar',
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              stacked: true,
              gridLines: {
                display: true,
                color: 'rgba(255,99,132,0.2)'
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 10
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          title: {
            display: true,
            text: 'Number of employees by departments'
          }
        },
        data: {
          labels: ['Accounting', 'IT', 'Marketing'],
          datasets: [{
            label: 'Hide all',
            barThickness: 80,
            backgroundColor: ['#af98d4', '#4dfa87', '#faa94d'],
            borderColor: '#af98d4',
            data: []
          }]
        },
      }
    }
  },
  computed: {
    ...mapGetters(['statistics', 'employeesByDepartments']),
    ITEmployees() {
      return this.employeesByDepartments['IT']
    },
    MarketingEmployees() {
      return this.employeesByDepartments['Marketing']
    },
    AccountingEmployees() {
      return this.employeesByDepartments['Accounting']
    },
  },
  beforeMount() {
    this.BarChartConfig.data.datasets[0].data = [
      this.AccountingEmployees || 0,
      this.ITEmployees || 0,
      this.MarketingEmployees || 0
    ]
  }
}
</script>

<style scoped>
.row-cols-2 {
  min-height: 50vh;
}

th {
  font-size: 1.1rem;
  font-weight: 500;
}

th[scope="col"] {
  font-size: 1.3rem;
}

</style>
