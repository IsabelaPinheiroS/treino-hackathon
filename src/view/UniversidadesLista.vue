<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Universidades</h2>
    <UniversidadesTabela :universidades="universidadesOrdenadas" />
  </v-container>
</template>

<script>
import UniversidadesTabela from "@/components/UniversidadesTabela.vue";

export default {
  name: "UniversidadeLista",
  components: {
    UniversidadesTabela,
  },
  data() {
    return {
      universidadeLista: [],
    };
  },
  created() {
    fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
      .then((response) => response.json())
      .then((json) => {
        this.universidadeLista = json;
      });
  },
  computed: {
    universidadesOrdenadas() {
      const listaComputada = this.universidadeLista
        .slice(0)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
      return listaComputada;
    },
  },
};
</script>
