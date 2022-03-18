<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Universidades</h2>
    <ClubesTabela :clubesOrdenados="clubesOrdenados"/>
  </v-container>
</template>

<script>
import UniversidadesTabela from '../components/UniversidadesTabela';

export default {
  name: 'UniversidadeLista',
  components: {
    UniversidadesTabela
  },
  data() {
    return {
      universidadeLista: []
    }
  },
  created() {
    fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
      .then(response => response.json())
      .then(json => {
        this.universidadeLista = json;
      })
  },
  computed: {
    clubesOrdenados() {
      const computado = this.clubesLista.slice(0).sort(
        (a, b) =>  a.pontos > b.pontos ? -1 : 1
      );
      return computado;
    }
  }
}
</script>
