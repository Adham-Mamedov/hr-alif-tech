<template>
  <form class="needs-validation" ref="form" novalidate
        @submit.prevent="submitType === 'create' ? createEmployee: updateEmployee">
    <div class=" mb-3">
      <label for="fullName">Full name</label>
      <input type="text" class="form-control" id="fullName" v-model="name" required>
      <div class="invalid-feedback">
        Name cannot be empty!
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="position">Position</label>
        <input type="text" class="form-control" id="position" v-model="position" required>
        <div class="invalid-feedback">
          Please provide a position.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="department">Department</label>
        <select class="custom-select" id="department" v-model="department" required>
          <option v-for="dep in departments" :key="dep">{{ dep }}</option>
        </select>
        <div class="invalid-feedback">
          Please select the department.
        </div>
      </div>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="male" v-model="gender" name="gender" value="male" class="custom-control-input" required>
      <label class="custom-control-label" for="male">Male</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="female" v-model="gender" name="gender" value="female" class="custom-control-input"
             required>
      <label class="custom-control-label" for="female">Female</label>
    </div>
    <div class="invalid-feedback">
      Please select gender.
    </div>

    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="DoB">Date of Birth</label>
        <input type="date" class="form-control" :class="{'is-invalid': !isDoBValid}" id="DoB" v-model="DoB" required>
        <div class="invalid-feedback">
          Please provide valid Date of birth.
        </div>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">{{ actionText }}</button>
  </form>
</template>

<script>
import $ from 'jquery'

export default {
  name: "CreateForm",
  props: {
    actionText: {
      type: String,
      required: false,
      default: 'Submit'
    },
    employee: Object,
    submitType: {
      type: String,
      required: false,
      default: 'create'
    }
  },
  data() {
    return {
      departments: ['Accounting', 'IT', 'Marketing'],
      name: this.employee?.name ?? '',
      department: this.employee?.department ?? 'Marketing',
      position: this.employee?.position ?? '',
      DoB: this.employee?.DoB ?? null,
      gender: this.employee?.gender ?? null
    }
  },
  mounted() {
    $('#staticBackdrop').on('hidden.bs.modal', () => {
      this.clearFields()
      this.$refs.form?.classList.remove('was-validated')
    })
  },
  computed: {
    isDoBValid() {
      return new Date(this.DoB).getTime() < new Date().getTime()
    }
  },
  methods: {
    isFormValid(form) {
      if (!form.checkValidity() || !this.isDoBValid) {
        form.classList.add('was-validated')
        return false
      }
      return true
    },
    createEmployee(e) {
      if (!this.isFormValid(e.target)) return;
      const formData = this.getFormData()
      console.log(formData)

      this.clearFields()
      this.$emit('close')
      $('#staticBackdrop').modal('hide')
    },
    updateEmployee(e) {
      if (!this.isFormValid(e.target)) return;
      const formData = this.getFormData()
      console.log(formData)

      this.clearFields()
      this.$emit('close')
      $('#staticBackdrop').modal('hide')
    },
    getFormData() {
      return {
        name: this.name,
        department: this.department,
        position: this.position,
        DoB: this.DoB,
        gender: this.gender,
        startDate: new Date().toDateString()
      }
    },
    clearFields() {
      this.name = this.employee?.name ?? ''
      this.department = this.employee?.department ?? 'Marketing'
      this.position = this.employee?.position ?? ''
      this.DoB = this.employee?.DoB ?? null
      this.gender = this.employee?.gender ?? null
    }
  }
}
</script>

<style scoped>

</style>