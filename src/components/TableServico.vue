<template>
    <div>
      <div>
        <input type="date" v-model="filtroData" placeholder="Filtrar por data" class="filtro-data" />
      </div>
      <table class="tabela-ordens">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ordem in ordensFiltradas" :key="ordem.id">
            <td>{{ ordem.id }}</td>
            <td>{{ ordem.data }}</td>
            <td>{{ ordem.descricao }}</td>
            <td>
              <select v-model="ordem.status" class="select-status">
                <option value="Pendente">Pendente</option>
                <option value="Em Progresso">Em Progresso</option>
                <option value="Concluído">Concluído</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "TableServico",
    data() {
      return {
        ordens: [
          { id: 1, data: "2023-10-01", descricao: "Serviço 1", status: "Pendente" },
          { id: 2, data: "2023-10-02", descricao: "Serviço 2", status: "Em Progresso" },
          { id: 3, data: "2023-10-03", descricao: "Serviço 3", status: "Concluído" },
        ],
        filtroData: "",
      };
    },
    computed: {
      ordensFiltradas() {
        return this.ordens.filter((ordem) =>
          ordem.data.includes(this.filtroData)
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .filtro-data {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    width: 150px;
  }
  
  .tabela-ordens {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .tabela-ordens th,
  .tabela-ordens td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  .tabela-ordens th {
    background-color: #007BFF;
    color: #fff;
  }
  
  .tabela-ordens tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .select-status {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    font-size: 14px;
    width: 150px;
  }
  </style>
  