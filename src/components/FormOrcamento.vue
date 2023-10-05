<template>
    <div>
        <div class="container">
            <h1>Cadastro de Orçamento</h1>
            <form>
                <div class="form-group">
                    <label for="documento">Documento:</label>
                    <input type="text" name="documento" required>
                    <button @click="verificarCadastro" type="checkDoc">Verificar doc cliente</button>
                </div>

                <div class="form-group">
                    <label for="data_orcamento">Data do Orçamento:</label>
                    <input type="date" name="data_orcamento" required>
                </div>

                <div class="form-group">
                    <label for="status">Status:</label>
                    <select name="status" required>
                        <option value="Pendente">Pendente</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Reprovado">Reprovado</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="componentes">Componentes:</label>
                    <div v-for="(componente, index) in componentes" :key="index">
                        <select :name="`componente${index + 1}`" required>
                            <option v-for="(opcao, opcaoIndex) in opcoesComponentes" :key="opcaoIndex" :value="opcao">{{
                                opcao }}</option>
                        </select>
                    </div>
                    <button @click="addComponent" type="addComponent">Adicionar Componente</button>
                </div>

                <div class="form-group">
                    <label for="valor">Valor:</label>
                    <input type="number" name="valor" step="0.01" required>
                </div>
                <button type="submit">Cadastrar Orçamento</button>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "FormOrcamento",
    data() {
        return {
            componentes: [""],
            opcoesComponentes: [
                "Selecione",
                "Disco Rígido",
                "Unidade de Estado Sólido",
                "Central de Processamento",
                "Processamento Gráfico",
                "Memória de Acesso Aleatório"
            ]
        };
    },
    methods: {
        addComponent() {
            if (this.componentes.length < 7) {
                this.componentes.push("");
            }
        },
        verificarCadastro() {
            alert("Verificando doc")
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

select,
input[type="number"],
input[type="text"],
input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 5px;
}

button[type="submit"],
button[type="addComponent"],
button[type="checkDoc"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
</style>