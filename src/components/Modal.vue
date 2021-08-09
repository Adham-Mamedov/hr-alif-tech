<template>
  <teleport to="#teleport">
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>

</template>

<script>
export default {
  emits: ['close'],
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true,
      default: 'Alif Tech'
    },
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>