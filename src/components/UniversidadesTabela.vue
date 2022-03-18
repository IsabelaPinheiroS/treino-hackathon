<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Universidade
          </th>
          <th class="text-left">
            País
          </th>
          <th class="text-left">
            Site
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="universidade in universidades"
          :key="universidade.name"
        >
          <td>{{ universidade.name }}</td>
          <td>{{ universidade.country }}</td>
          <td>{{ universidade.web_pages }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
    name: 'UniversidadesTabela',
    props: {
        universidades: {
        type: Array,
        required: true
        }
    }
}
</script>
    
<style>

</style>