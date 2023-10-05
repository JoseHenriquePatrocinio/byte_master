<template>
  <div class="container-div">
    <GerarRelatorio></GerarRelatorio>
  </div>
</template>

<script>
import GerarRelatorio from '@/components/GerarRelatorio.vue';
export default {
  name: "Relatorio",
  components: {
    GerarRelatorio
  }
}
</script>