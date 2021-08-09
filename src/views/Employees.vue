<template>
  <h1>Our Employees</h1>
  <button @click="modal = true" type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
    Launch static backdrop modal
  </button>
  <Modal v-if="modal" title="Create Employee" @close="modal = false">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ut?</p>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal';
export default {
  name: "Employees",
  components: {Modal},
  data() {
    return {
      modal: false
    }
  },
}
</script>

<style scoped>

</style>