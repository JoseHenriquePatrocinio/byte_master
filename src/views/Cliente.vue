<template>
  <div class="container">
    <FormCliente></FormCliente>
  </div>
</template>

<script>
import FormCliente from '@/components/FormCliente.vue'

export default {
  name: "Cliente",
  components: {
    FormCliente
  }
}
</script>

<style>
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
